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
import handleCommand, { Command } from "@/utils/Commands";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  BoardCommandType,
  ComPortProps,
  ManualCommandType,
  TestCommandType,
} from "@/types/commandType";
import useComPortStore from "@/shared/comPortStore";
import useComPortSocket from "@/hooks/comPortSocket";

const validationManualReadSchema = yup.object({
  tag: yup.string().required("Tag is required"),
  displayVoltage: yup
    .number()
    .required("Voltage is required")
    .positive("Voltage must be a positive number")
    .min(0.5, "Voltage must be more than 0.5")
    .max(1.0, "Voltage must be less than 1.0"),
  currentVoltage: yup
    .number()
    .required("Voltage is required")
    .positive("Voltage must be a positive number")
    .min(0.5, "Voltage must be more than 0.5")
    .max(1.0, "Voltage must be less than 1.0"),
});

const validationManualWriteSchema = yup.object({
  tag: yup.string().required("Tag is required"),
  positiveVoltage: yup
    .number()
    .required("Positive Voltage is required")
    .positive("Voltage must be a positive number")
    .moreThan(0, "Voltage must be more than 0"),
  widthPostiveVoltage: yup
    .number()
    .required("Width Positive Voltage is required")
    .positive("Width Positive Voltage must be a positive number")
    .min(0.5, "Width Positive Voltage must be more than 0.5"),
  negativeVoltage: yup
    .number()
    .required("Negative Voltage is required")
    .negative("Voltage must be a negative number")
    .lessThan(0, "Voltage must be less than 0"),
  widthNegativeVoltage: yup
    .number()
    .required("Width Negative Voltage is required")
    .positive("Width Negative Voltage must be a positive number")
    .min(0.5, "Width Negative Voltage must be more than 0.5"),
});

export type initialManualReadValuesProps = {
  tag: BoardCommandType;
  displayVoltage: number;
  currentVoltage: number;
};

export type initialManualWriteValuesProps = {
  tag: BoardCommandType;
  polaritySent: "positive" | "negative";
  positiveVoltage: number;
  widthPostiveVoltage: number;
  negativeVoltage: number;
  widthNegativeVoltage: number;
};

// const socket = io("http://localhost:3001");

export default function VersionOne() {
  // const [currentSocket, setCurrentSocket] = React.useState<any>(null);
  // const [comPort, setComPort] = React.useState<ComPortProps[]>([]);
  // const [inputComPort, setInputComPort] = React.useState<string>("");
  // const [serialPortIncoming, setSerialPortIncoming] = React.useState("");
  const {
    comPortStatus,
    comPortDisconnected,
    comPortReady,
    comPortInProgress,
    updateStatus,
  } = useComPortStore();

  console.log(comPortStatus);

  const {
    comPort,
    inputComPort,
    serialPortIncoming,
    requestPortLists,
    selectedCOMPORT,
    handleChangePort,
    serialPortTest,
    serialPortCommandSent,
    disconnectCOMPORT,
  } = useComPortSocket();


  // React.useEffect(() => {
  //   disconnectCOMPORT();
  //   socket.on("disconnect", function () {
  //     socket.connect();
  //   });
  //   setCurrentSocket(socket);
  //   socket.on("COMPORT_SOCKET", (COMPORT_SOCKET) => {
  //     setComPort(COMPORT_SOCKET);
  //   });
  //   socket.on("disconnectByUSB", (USBDISCONNECTED) => {
  //     if (USBDISCONNECTED === "USBdisconnected") {
  //       disconnectCOMPORT();
  //       setInputComPort("");
  //     }
  //   });

  //   // Attach the event listener when the component mounts
  //   window.addEventListener("beforeunload", disconnectCOMPORT);

  //   // Remove the event listener when the component unmounts
  //   return () => {
  //     disconnectCOMPORT();
  //     window.removeEventListener("beforeunload", disconnectCOMPORT);
  //   };
  // }, []);


  //**MANUAL_OPERATION_FORMIK**\\

  const initialManualReadValues: initialManualReadValuesProps = {
    tag: ManualCommandType.MANUALREAD_WEB,
    displayVoltage: 0.5,
    currentVoltage: 0.5,
  };

  const initialManualWriteValues: initialManualWriteValuesProps = {
    tag: ManualCommandType.MANUALWRITE_WEB,
    polaritySent: "positive",
    positiveVoltage: 1.0,
    widthPostiveVoltage: 1.0,
    negativeVoltage: -1.0,
    widthNegativeVoltage: 1.0,
  };

  const manualReadFormik = useFormik({
    initialValues: initialManualReadValues,
    validationSchema: validationManualReadSchema,
    onSubmit: async (values) => {
      console.log(values);
      const command: Command = {
        tag: values.tag,
        write_voltage: values.currentVoltage,
      };
      serialPortCommandSent(command);
      // socket.emit("command_benchmark", handleCommand(command));
    },
  });

  const manualWriteFormik = useFormik({
    initialValues: initialManualWriteValues,
    validationSchema: validationManualWriteSchema,
    onSubmit: async (values) => {
      if (values.polaritySent === "positive") {
        console.log(values);
        const command: Command = {
          tag: values.tag,
          write_voltage: values.positiveVoltage,
          pulse_width: values.widthPostiveVoltage,
        };
        serialPortCommandSent(command);
        // socket.emit("command_benchmark", handleCommand(command));
      } else if (values.polaritySent === "negative") {
        console.log("negative");
        const command: Command = {
          tag: values.tag,
          write_voltage: values.negativeVoltage,
          pulse_width: values.widthNegativeVoltage,
        };
        serialPortCommandSent(command);
        // socket.emit("command_benchmark", handleCommand(command));
      }
    },
  });

  //**END**\\

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
          <HardwareVersionSelection comPortReady={comPortReady} />
          <HardwarePort
            comPort={comPort}
            inputComPort={inputComPort}
            comPortReady={comPortReady}
            handleChangePort={handleChangePort}
            requestPortLists={requestPortLists}
          />
          <HardwareConnection
            inputComPort={inputComPort}
            comPortReady={comPortReady}
            selectedCOMPORT={selectedCOMPORT}
            disconnectCOMPORT={disconnectCOMPORT}
          />
          <HardwareTesting
            comPortReady={comPortReady}
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
          <form onSubmit={manualReadFormik.handleSubmit}>
            <ManualRead
              comPortReady={comPortReady}
              formikProps={manualReadFormik}
            />
          </form>
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
              {/* <LiveStreamingChart
                title="SerialPort Read Resistance"
                xTitle="Time (us)"
                yTitle="Resistance (Ohm)"
              /> */}
            </Box>
          </Card>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={3}>
          <form onSubmit={manualWriteFormik.handleSubmit}>
            <ManualWrite
              comPortReady={comPortReady}
              formikProps={manualWriteFormik}
            />
          </form>
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
              {/* <LiveStreamingChart
                title="SerialPort Write Voltage"
                xTitle="Time (us)"
                yTitle="Voltage (V)"
              /> */}
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}
