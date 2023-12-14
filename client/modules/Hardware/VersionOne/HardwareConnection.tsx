import React from "react";
import Button from "@mui/material/Button";
import UsbIcon from "@mui/icons-material/Usb";
import Stack from "@mui/material/Stack";

type HardwareConnectionProp = {
  inputComPort: string;
  comPortReady: boolean;
  selectedCOMPORT: () => void;
  disconnectCOMPORT: () => void;
};

export default function HardwareConnection({
  inputComPort,
  comPortReady,
  selectedCOMPORT,
  disconnectCOMPORT,
}: HardwareConnectionProp) {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        disabled={inputComPort === ""}
        variant="contained"
        color={comPortReady ? "error" : "info"}
        endIcon={<UsbIcon />}
        onClick={comPortReady ? disconnectCOMPORT : selectedCOMPORT}
      >
        {comPortReady ? "DISCONNECT" : "CONNECT"}
      </Button>
    </Stack>
  );
}
