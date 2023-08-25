"use client";

import React from 'react'
import Box from "@mui/material/Box";
import { Card, Container, Typography, Paper, Stack } from "@mui/material";
import Image from "next/image";
import { HardwareConnection, HardwareTesting, HardwareVersionSelection } from ".";

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
          <Image
            src="/HardwareVersionOne.png"
            alt="Hardware"
            width="172"
            height="100"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
            }}
          />
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
    </Stack>
  );
}
