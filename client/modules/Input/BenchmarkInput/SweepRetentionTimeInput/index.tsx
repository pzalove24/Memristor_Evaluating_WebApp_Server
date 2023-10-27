"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import { Button, Grid, TextField, Typography, Stack } from "@mui/material";
import { WaveFunctionSweepRetentionTimeWaveformProps } from "@/components/Chart/Waveform/SweepRetentionTimeWaveform/WaveFunctionSweepRetentionTimeWaveform";

type SweepRetentionTimeInputProps = {
  handleChangeSweepRetentionTimeWaveformValue: (
    positivePulseValue: number, //positiveVoltage
    intermediatePulseValue: number, //readVoltage
    negativePulseValue: number, //negativeVoltage
    positivePulseDuration: number, //positiveVoltageWidth
    intermediatePulseDuration: number, //measureTime
    negativePulseDuration: number, //negativeVoltageWidth
    distanceBetweenPulse: number, //interval
    cycles: number //retentionCycleTesting
  ) => void;
  sweepRetentionTimeWaveformValue: WaveFunctionSweepRetentionTimeWaveformProps;
};

export default function SweepRetentionTimeInput({
  handleChangeSweepRetentionTimeWaveformValue,
  sweepRetentionTimeWaveformValue,
}: SweepRetentionTimeInputProps) {
  const [negativeVoltage, setNegativeVoltage] = React.useState<number>(
    sweepRetentionTimeWaveformValue.negativePulseValue
  );
  const [readVoltage, setReadVoltage] = React.useState<number>(
    sweepRetentionTimeWaveformValue.intermediatePulseValue
  );
  const [positiveVoltage, setPositiveVoltage] = React.useState<number>(
    sweepRetentionTimeWaveformValue.positivePulseValue
  );
  const [negativeVoltageWidth, setNegativeVoltageWidth] =
    React.useState<number>(
      sweepRetentionTimeWaveformValue.negativePulseDuration
    );
  const [measureTime, setMeasureTime] = React.useState<number>(
    sweepRetentionTimeWaveformValue.intermediatePulseDuration
  );
  const [positiveVoltageWidth, setPositiveVoltageWidth] =
    React.useState<number>(
      sweepRetentionTimeWaveformValue.positivePulseDuration
    );
  const [interval, setInterval] = React.useState<number>(
    sweepRetentionTimeWaveformValue.distanceBetweenPulse
  );
  const [retentionCycleTesting, setRetentionCycleTesting] =
    React.useState<number>(sweepRetentionTimeWaveformValue.cycles);
  const [deviceChannel, setDeviceChannel] = React.useState<number>(1);

  const handleReset = () => {
    setNegativeVoltage(0);
    setReadVoltage(0);
    setPositiveVoltage(0);
    setNegativeVoltageWidth(0);
    setPositiveVoltageWidth(0);
    setMeasureTime(0);
    setInterval(0);
    handleChangeSweepRetentionTimeWaveformValue(
      positiveVoltage,
      readVoltage,
      negativeVoltage,
      positiveVoltageWidth,
      measureTime,
      negativeVoltageWidth,
      interval,
      retentionCycleTesting
    );
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
        height: 352,
      }}
      noValidate
      autoComplete="off"
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        rowSpacing={0.5}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={12}>
          <Typography variant="h4" fontWeight="bold">
            Sweep Retention Time Input
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>Negative Voltage (V)</Typography>
        </Grid>
        <Grid item xs={1}>
          <></>
        </Grid>
        <Grid item xs={7}>
          <TextField
            id="standard-number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            helperText="negative voltage (-3.00 - 0.00)"
            placeholder="provide number"
            value={negativeVoltage}
            onChange={(e) => {
              var value = parseFloat(e.target.value);

              if (value > 0) value = 0; //max
              if (value < -3) value = -3; //min

              setNegativeVoltage(value);
            }}
            inputProps={{ min: -3, max: 0 }}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography>Reading Voltage (V)</Typography>
        </Grid>
        <Grid item xs={1}>
          <></>
        </Grid>
        <Grid item xs={7}>
          <TextField
            id="standard-number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            helperText="read voltage (0.00 - 3.00)"
            placeholder="provide number"
            value={readVoltage}
            onChange={(e) => {
              var value = parseFloat(e.target.value);

              if (value > 3) value = 3; //max
              if (value < 0) value = 0; //min

              setReadVoltage(value);
            }}
            inputProps={{ min: 0, max: 3 }}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography>Positive Voltage (V)</Typography>
        </Grid>
        <Grid item xs={1}>
          <></>
        </Grid>
        <Grid item xs={7}>
          <TextField
            id="standard-number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            helperText="positive voltage (0.00 - 3.00)"
            placeholder="provide number"
            value={positiveVoltage}
            onChange={(e) => {
              var value = parseFloat(e.target.value);

              if (value > 3) value = 3; //max
              if (value < 0) value = 0; //min

              setPositiveVoltage(value);
            }}
            inputProps={{ min: 0, max: 3 }}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography>Negative Voltage Width/Duration (ms)</Typography>
        </Grid>
        <Grid item xs={1}>
          <></>
        </Grid>
        <Grid item xs={7}>
          <TextField
            id="standard-number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            helperText="the width of negative voltage pulse"
            placeholder="provide number"
            value={negativeVoltageWidth}
            onChange={(e) => {
              var value = parseInt(e.target.value);

              if (value > 1000) value = 1000; //max
              if (value < 0) value = 0; //min

              setNegativeVoltageWidth(value);
            }}
            inputProps={{ min: 0, max: 1000 }}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography>
            Read Voltage Width/Duration (ms) <br></br> How long to measure
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <></>
        </Grid>
        <Grid item xs={7}>
          <TextField
            id="standard-number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            helperText="How long to measure retention time"
            placeholder="provide number"
            value={measureTime}
            onChange={(e) => {
              var value = parseInt(e.target.value);

              if (value > 1000) value = 1000; //max
              if (value < 0) value = 0; //min

              setMeasureTime(value);
            }}
            inputProps={{ min: 0, max: 1000 }}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography>Positive Voltage Width/Duration (ms)</Typography>
        </Grid>
        <Grid item xs={1}>
          <></>
        </Grid>
        <Grid item xs={7}>
          <TextField
            id="standard-number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            helperText="the width of positive voltage pulse"
            placeholder="provide number"
            value={positiveVoltageWidth}
            onChange={(e) => {
              var value = parseInt(e.target.value);

              if (value > 1000) value = 1000; //max
              if (value < 0) value = 0; //min

              setPositiveVoltageWidth(value);
            }}
            inputProps={{ min: 0, max: 1000 }}
          />
        </Grid>

        <Grid item xs={4}>
          <Typography>Interpulse Interval (ms)</Typography>
        </Grid>
        <Grid item xs={1}>
          <></>
        </Grid>
        <Grid item xs={7}>
          <TextField
            id="standard-number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            helperText="Interpulse interval between each voltage"
            placeholder="provide number"
            value={interval}
            onChange={(e) => {
              var value = parseFloat(e.target.value);

              if (value > 100000) value = 100000; //max
              if (value < 0) value = 0; //min

              setInterval(value);
            }}
            inputProps={{ min: 0, max: 100000 }}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography>Retention Time Cycle Testing (number)</Typography>
        </Grid>
        <Grid item xs={1}>
          <></>
        </Grid>
        <Grid item xs={7}>
          <TextField
            id="standard-number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            helperText="How many retention time testing"
            placeholder="provide number"
            value={retentionCycleTesting}
            onChange={(e) => {
              var value = parseInt(e.target.value);

              if (value > 100000) value = 100000; //max
              if (value < 0) value = 0; //min

              setRetentionCycleTesting(value);
            }}
            inputProps={{ min: 0, max: 100000 }}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography>Device Channel</Typography>
        </Grid>
        <Grid item xs={1}>
          <></>
        </Grid>
        <Grid item xs={7}>
          <TextField
            disabled
            id="standard-number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            helperText="Device Channel"
            placeholder="provide number"
            value={deviceChannel}
            onChange={(event) => setDeviceChannel(parseInt(event.target.value))}
          />
        </Grid>
        <Grid item xs={12}>
          <Stack spacing={5} direction={"row"}>
            <Button
              variant="contained"
              onClick={() =>
                handleChangeSweepRetentionTimeWaveformValue(
                  positiveVoltage,
                  readVoltage,
                  negativeVoltage,
                  positiveVoltageWidth,
                  measureTime,
                  negativeVoltageWidth,
                  interval,
                  retentionCycleTesting
                )
              }
            >
              View Waveform
            </Button>
            <Button variant="contained" onClick={handleReset}>
              RESET
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
