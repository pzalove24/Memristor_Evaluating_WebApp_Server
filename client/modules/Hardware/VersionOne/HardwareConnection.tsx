import React from "react";
import Button from "@mui/material/Button";
import UsbIcon from "@mui/icons-material/Usb";
import Stack from "@mui/material/Stack";

type HardwareConnectionProp = {
  inputComPort: string;
  comPortStatus: boolean;
  selectedCOMPORT: () => void;
  disconnectCOMPORT: () => void;
};

export default function HardwareConnection({
  inputComPort,
  comPortStatus,
  selectedCOMPORT,
  disconnectCOMPORT,
}: HardwareConnectionProp) {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        disabled={inputComPort === ""}
        variant="contained"
        color={comPortStatus ? "error" : "info"}
        endIcon={<UsbIcon />}
        onClick={comPortStatus ? disconnectCOMPORT : selectedCOMPORT}
      >
        {comPortStatus ? "DISCONNECT" : "CONNECT"}
      </Button>
    </Stack>
  );
}
