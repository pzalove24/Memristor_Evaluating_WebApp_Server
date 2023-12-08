"use client";

import React from "react";
import Box from "@mui/material/Box";
import {
  Typography,
  Stack,
  Grid,
  Card,
  SelectChangeEvent,
} from "@mui/material";
import {
  HardwareConnection,
  // HardwareSerialPort,
  HardwareTesting,
  HardwareVersionSelection,
} from ".";
import HardwareImage from "./HardwareImage";
import ManualRead from "@/modules/Benchmark/ManualOperation/ManualRead";
import ManualWrite from "@/modules/Benchmark/ManualOperation/ManualWrite";
import HardwarePort from "./HardwarePort";
import LiveStreamingChart from "@/components/charts/LiveStreamingChart";
import io from "socket.io-client";
import { ComPortProps } from "@/types";
import handleCommand, { BoardCommandType } from "@/utils/Commands";

const socket = io("http://localhost:3001");

export default function VersionOne() {
  const [comPort, setComPort] = React.useState<ComPortProps[]>([]);
  const [inputComPort, setInputComPort] = React.useState<string>("");
  const [comPortStatus, setComPortStatus] = React.useState(false);
  const [serialPortIncoming, setSerialPortIncoming] = React.useState("");

  const handleChangePort = (event: SelectChangeEvent) => {
    setInputComPort(event.target.value);
  };

  const requestPortLists = () => {
    socket.emit("serialPortList", () => {});
  };

  React.useEffect(() => {
    socket.on("COMPORT_SOCKET", (COMPORT_SOCKET) => {
      setComPort(COMPORT_SOCKET);
    });
    socket.on("disconnectByUSB", (USBDISCONNECTED) => {
      if (USBDISCONNECTED === "USBdisconnected") {
        disconnectCOMPORT();
        setInputComPort("");
      }
    });
  }, [socket]);

  const selectedCOMPORT = () => {
    socket.emit("selectedCOMPORT", inputComPort);
    setComPortStatus(true);
  };

  const disconnectCOMPORT = () => {
    socket.emit("disconnectCOMPORT", () => {});
    setComPortStatus(false);
    setSerialPortIncoming("");
  };

  React.useEffect(() => {
    socket.on("benchmark_data", (benchmarkData) => {
      setSerialPortIncoming(benchmarkData);
    });
  }, [inputComPort]);

  const serialPortTest = () => {
    const command = {
      type: BoardCommandType.TESTBOARD,
    };
    socket.emit("command_benchmark", handleCommand(command));
  };

  return (
    <Grid container>
      <Grid item xs={4}>
        <Box
          sx={{
            "& > :not(style)": { m: 1 },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 360,
          }}
        >
          <HardwareImage />
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Stack
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 360,
          }}
        >
          <HardwareVersionSelection />
          <HardwarePort
            comPort={comPort}
            inputComPort={inputComPort}
            handleChangePort={handleChangePort}
            requestPortLists={requestPortLists}
          />
          <HardwareConnection
            inputComPort={inputComPort}
            comPortStatus={comPortStatus}
            selectedCOMPORT={selectedCOMPORT}
            disconnectCOMPORT={disconnectCOMPORT}
          />
          <HardwareTesting
            comPortStatus={comPortStatus}
            serialPortTest={serialPortTest}
          />
        </Stack>
      </Grid>
      <Grid item xs={5}>
        <Stack
          spacing={2}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            height: 215,
            p: 3,
          }}
        >
          <Typography>SERIALPORT</Typography>
          <Box
            component="span"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              width: "100%",
              backgroundColor: "primary.main",
              "&:hover": {
                backgroundColor: "primary.main",
                opacity: [0.9, 0.8, 0.7],
              },
              border: "1px dashed grey",
            }}
          >
            <Typography noWrap sx={{ p: 3 }}>
              {serialPortIncoming}
            </Typography>
          </Box>
        </Stack>
      </Grid>
      <Grid container>
        <Grid item xs={3}>
          <ManualRead />
        </Grid>
        <Grid item xs={9}>
          <Card variant="outlined">
            <Box
              sx={{
                "& > :not(style)": { m: 1 },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 360,
              }}
            >
              <LiveStreamingChart
                title="SerialPort Read Resistance"
                xTitle="Time (us)"
                yTitle="Resistance (Ohm)"
              />
            </Box>
          </Card>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={3}>
          <ManualWrite />
        </Grid>
        <Grid item xs={9}>
          <Card variant="outlined">
            <Box
              sx={{
                "& > :not(style)": { m: 1 },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 360,
              }}
            >
              <LiveStreamingChart
                title="SerialPort Write Voltage"
                xTitle="Time (us)"
                yTitle="Voltage (V)"
              />
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}
