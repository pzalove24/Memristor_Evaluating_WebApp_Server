"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import { Button, Grid, TextField, Typography, Stack } from "@mui/material";
import { WaveFunctionPulseRetentionTimeWaveformProps } from "@/modules/Chart/Waveform/PulseRetentionTimeWaveform/WaveFunctionPulseRetentionTimeWaveform";

type PulseRetentionTimeInputProps = {
  handleChangePulseRetentionTimeWaveformValue: (
    positivePulseValue: number, //positiveVoltage
    intermediatePulseValue: number, //readVoltage
    negativePulseValue: number, //negativeVoltage
    positivePulseDuration: number, //positiveVoltageWidth
    intermediatePulseDuration: number, //measureTime
    negativePulseDuration: number, //negativeVoltageWidth
    distanceBetweenPulse: number, //waitTime
    cycleIntermediatePulse: number, //cycleMeasure
    cycles: number //retentionCycleTesting
  ) => void;
  pulseRetentionTimeWaveformValue: WaveFunctionPulseRetentionTimeWaveformProps;
};

export default function PulseRetentionTimeInput({
  handleChangePulseRetentionTimeWaveformValue,
  pulseRetentionTimeWaveformValue,
}: PulseRetentionTimeInputProps) {
  const [negativeVoltage, setNegativeVoltage] = React.useState<number>(
    pulseRetentionTimeWaveformValue.negativePulseValue
  );
  const [readVoltage, setReadVoltage] = React.useState<number>(
    pulseRetentionTimeWaveformValue.intermediatePulseValue
  );
  const [positiveVoltage, setPositiveVoltage] = React.useState<number>(
    pulseRetentionTimeWaveformValue.positivePulseValue
  );
  const [negativeVoltageWidth, setNegativeVoltageWidth] =
    React.useState<number>(
      pulseRetentionTimeWaveformValue.negativePulseDuration
    );

  const [measureTime, setMeasureTime] = React.useState<number>(
    pulseRetentionTimeWaveformValue.intermediatePulseDuration
  );

  const [waitTime, setWaitTime] = React.useState<number>(
    pulseRetentionTimeWaveformValue.distanceBetweenPulse
  );

  const [cycleMeasure, setCycleMeasure] = React.useState<number>(
    pulseRetentionTimeWaveformValue.cycleIntermediatePulse
  );
  const [positiveVoltageWidth, setPositiveVoltageWidth] =
    React.useState<number>(
      pulseRetentionTimeWaveformValue.positivePulseDuration
    );
  const [retentionCycleTesting, setRetentionCycleTesting] =
    React.useState<number>(pulseRetentionTimeWaveformValue.cycles);
  const [deviceChannel, setDeviceChannel] = React.useState<number>(1);

  const totalMeasureTime = cycleMeasure * (measureTime + waitTime);

  const handleReset = () => {
    setNegativeVoltage(0);
    setReadVoltage(0);
    setPositiveVoltage(0);
    setNegativeVoltageWidth(0);
    setPositiveVoltageWidth(0);
    setMeasureTime(0);
    setWaitTime(0);
    setCycleMeasure(0);
    handleChangePulseRetentionTimeWaveformValue(
      positiveVoltage,
      readVoltage,
      negativeVoltage,
      positiveVoltageWidth,
      measureTime,
      negativeVoltageWidth,
      waitTime,
      cycleMeasure,
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
            Pulse Retention Time Input
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
          <Typography>How long to measure in single pulse (second)</Typography>
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
            helperText="How long to measure in a single pulse"
            placeholder="provide number"
            value={measureTime}
            onChange={(e) => {
              var value = parseFloat(e.target.value);

              if (value > 100000) value = 100000; //max
              if (value < 0) value = 0; //min

              setMeasureTime(value);
            }}
            inputProps={{ min: 0, max: 100000 }}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography>Waiting time to measure at every (ms)</Typography>
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
            helperText="The time wait for measuring pulse retention time"
            placeholder="provide number"
            value={waitTime}
            onChange={(e) => {
              var value = parseFloat(e.target.value);

              if (value > 100000) value = 100000; //max
              if (value < 0) value = 0; //min

              setWaitTime(value);
            }}
            inputProps={{ min: 0, max: 100000 }}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography>pulse cycle (number)</Typography>
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
            helperText="Number of pulse cycle in retention time"
            placeholder="provide number"
            value={cycleMeasure}
            onChange={(e) => {
              var value = parseInt(e.target.value);

              if (value > 100000) value = 100000; //max
              if (value < 0) value = 0; //min

              setCycleMeasure(value);
            }}
            inputProps={{ min: 0, max: 100000 }}
          />
          <Typography variant="h6">{`Total Measure Time = ${totalMeasureTime}`}</Typography>
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
                handleChangePulseRetentionTimeWaveformValue(
                  positiveVoltage,
                  readVoltage,
                  negativeVoltage,
                  positiveVoltageWidth,
                  measureTime,
                  negativeVoltageWidth,
                  waitTime,
                  cycleMeasure,
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
