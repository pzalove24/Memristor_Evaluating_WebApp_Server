import React from 'react'
import Button from '@mui/material/Button';
import UsbIcon from '@mui/icons-material/Usb';
import Stack from '@mui/material/Stack';

export default function HardwareConnection() {
  return (
    <Stack direction="row" spacing={2}>
      <Button  variant="contained" endIcon={<UsbIcon />}>
        Connect
      </Button>
    </Stack>
  );
}