import React from 'react'
import Button from "@mui/material/Button";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import Stack from "@mui/material/Stack";

export default function HardwareTesting( ) {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" endIcon={<PlayCircleIcon />}>
        Test Connection
      </Button>
    </Stack>
  );
}
