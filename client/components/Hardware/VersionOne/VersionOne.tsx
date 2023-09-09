"use client";

import React from "react";
import Box from "@mui/material/Box";
import { Card, Typography, Stack } from "@mui/material";
import {
  HardwareConnection,
  HardwareTesting,
  HardwareVersionSelection,
} from ".";
import HardwareImage from "./HardwareImage";

export default function VersionOne() {
  return (
    <Stack direction={"column"} sx={{ m: 1 }}>
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
          <HardwareImage />
        </Box>
      </Card>
      <Card variant="outlined">
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
          <HardwareConnection />
          <HardwareTesting />
          <Typography>SELECT CONNECT TEST</Typography>
        </Stack>
      </Card>
      <Card variant="outlined">
        <Stack
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 215,
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
              SERIALPORTssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
            </Typography>
          </Box>
        </Stack>
      </Card>
    </Stack>
  );
}
