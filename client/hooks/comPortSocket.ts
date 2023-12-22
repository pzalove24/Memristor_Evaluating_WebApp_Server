import useComPortStore from "@/shared/comPortStore";
import { ComPortProps, TestCommandType } from "@/types/commandType";
import handleCommand, { Command } from "@/utils/Commands";
import { SelectChangeEvent } from "@mui/material";
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { usePathname } from "next/navigation";

const socket = io("http://localhost:3001");

export type TUseComPortSocketProps = {
  comPort: ComPortProps[];
  inputComPort: string;
  serialPortIncoming: string;
  requestPortLists: () => void;
  selectedCOMPORT: () => void;
  handleChangePort: (event: SelectChangeEvent) => void;
  serialPortTest: () => void;
  serialPortCommandSent: (command: Command) => void;
  disconnectCOMPORT: () => void;
};

const useComPortSocket: () => TUseComPortSocketProps = () => {
  const [currentSocket, setCurrentSocket] = React.useState<any>(null);
  const [comPort, setComPort] = React.useState<ComPortProps[]>([]);
  const [inputComPort, setInputComPort] = React.useState<string>("");
  const [serialPortIncoming, setSerialPortIncoming] = React.useState("");
  const pathname = usePathname();
  const { updateStatus } = useComPortStore();

  //**SOCKET COMPORT**\\
  const handleChangePort = (event: SelectChangeEvent) => {
    setInputComPort(event.target.value);
  };

  // request any open connected circuit board
  const requestPortLists = () => {
    if (currentSocket) {
      socket.disconnect();
    }
    socket.emit("serialPortList", () => {});
  };

  // select connected circuit board
  const selectedCOMPORT = () => {
    socket.emit("selectedCOMPORT", inputComPort);
    updateStatus("READY");
  };

  // disconnect connected circuit board
  const disconnectCOMPORT = () => {
    socket.emit("disconnectCOMPORT", () => {});
    updateStatus("DISCONNECTED");
    setSerialPortIncoming("");
    if (currentSocket) {
      socket.disconnect();
    }
  };

  // command to test circuit board
  const serialPortTest = () => {
    const command: Command = {
      tag: TestCommandType.TESTBOARD_WEB,
    };
    socket.emit("command_benchmark", handleCommand(command));
  };

  const serialPortCommandSent = (command: Command) => {
    socket.emit("command_benchmark", handleCommand(command));
  };

  // if (serialPortIncoming !== "Ready") {
  //   updateStatus("IN_PROGRESS");
  // } else {
  //   updateStatus("READY");
  // }

  //**END**\\

  // after selecting connected circuit board, then receive data from serial port
  // if change connected circuit board, it will receive data from that new connected circuit board
  useEffect(() => {
    socket.on("benchmark_data", (benchmarkData) => {
      setSerialPortIncoming(benchmarkData);
      // if (benchmarkData !== "Ready") {
      //   updateStatus("IN_PROGRESS");
      // } else {
      //   updateStatus("READY");
      // }
    });
  }, [inputComPort]);

  // to refresh connection when change page
  // if disconnect by physical usb unplug, it will automatic disconnect serialport
  useEffect(() => {
    socket.on("disconnect", function () {
      socket.connect();
    });

    setCurrentSocket(socket);

    socket.on("COMPORT_SOCKET", (COMPORT_SOCKET) => {
      setComPort(COMPORT_SOCKET);
    });
    socket.on("disconnectByUSB", (USBDISCONNECTED) => {
      if (USBDISCONNECTED === "USBdisconnected") {
        disconnectCOMPORT();
        setInputComPort("");
      }
    });

    // // Attach the event listener when the component mounts
    window.addEventListener("beforeunload", disconnectCOMPORT);

    // Remove the event listener when the component unmounts
    return () => {
      // disconnectCOMPORT();
      window.removeEventListener("beforeunload", disconnectCOMPORT);
    };
  }, []);

  // console.log(pathname);
  // useEffect(() => {
  //   disconnectCOMPORT();
  // }, [pathname]);

  return {
    comPort,
    inputComPort,
    serialPortIncoming,
    requestPortLists,
    selectedCOMPORT,
    handleChangePort,
    serialPortTest,
    serialPortCommandSent,
    disconnectCOMPORT,
  };
};

export default useComPortSocket;