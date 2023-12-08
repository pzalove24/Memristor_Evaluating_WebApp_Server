import React from "react";
import Button from "@mui/material/Button";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import Stack from "@mui/material/Stack";

type HardwareTestingProps = {
  comPortStatus: boolean;
  serialPortTest: () => void;
};

export default function HardwareTesting({
  comPortStatus,
  serialPortTest,
}: HardwareTestingProps) {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        disabled={!comPortStatus}
        variant="contained"
        endIcon={<PlayCircleIcon />}
        onClick={serialPortTest}
      >
        Test Connection
      </Button>
    </Stack>
  );
}
