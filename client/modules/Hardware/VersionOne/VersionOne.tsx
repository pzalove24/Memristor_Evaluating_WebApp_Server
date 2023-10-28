"use client";

import React from "react";
import Box from "@mui/material/Box";
import { Typography, Stack, Grid, Card } from "@mui/material";
import {
  HardwareConnection,
  HardwareSerialPort,
  HardwareTesting,
  HardwareVersionSelection,
} from ".";
import HardwareImage from "./HardwareImage";
import ManualRead from "@/modules/Benchmark/ManualOperation/ManualRead";
import ManualWrite from "@/modules/Benchmark/ManualOperation/ManualWrite";

export default function VersionOne() {
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
          <HardwareConnection />
          <HardwareTesting />
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
              SERIALPORTssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
            </Typography>
          </Box>
        </Stack>
      </Grid>
      <Grid container xs={12}>
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
              <HardwareSerialPort
                chartTitle="SerialPort Read Resistance"
                xTitle="Time (us)"
                yTitle="Resistance (Ohm)"
              />
            </Box>
          </Card>
        </Grid>
      </Grid>
      <Grid container xs={12}>
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
              <HardwareSerialPort
                chartTitle="SerialPort Write Voltage"
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
