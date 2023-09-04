"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import { Grid, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button/Button";
import { WaveFunctionSweepIVwaveformProps } from "@/components/Chart/Waveform/SweepIVwaveform/WaveFunctionSweepIVwaveform";

type SweepIVInputProps = {
  handleChangeSweepIVwaveformValue: (
    positivePulseValue: number, //positiveVoltage
    negativePulseValue: number, //negativeVoltage
    pulseDuration: number, //voltageWidth
    stepsPerSegment: number, //voltageStep
    cycles: number //sweepCycle
  ) => void;
  sweepIVwaveformValue: WaveFunctionSweepIVwaveformProps;
};

export default function SweepIVInput({
  handleChangeSweepIVwaveformValue,
  sweepIVwaveformValue,
}: SweepIVInputProps) {
  const [negativeVoltage, setNegativeVoltage] = React.useState<number>(
    sweepIVwaveformValue.negativePulseValue
  );
  const [positiveVoltage, setPositiveVoltage] = React.useState<number>(
    sweepIVwaveformValue.positivePulseValue
  );
  const [voltageWidth, setVoltageWidth] = React.useState<number>(
    sweepIVwaveformValue.pulseDuration
  );
  const [voltageStep, setVoltageStep] = React.useState<number>(
    sweepIVwaveformValue.stepsPerSegment
  );
  const [sweepCycle, setSweepCycle] = React.useState<number>(
    sweepIVwaveformValue.cycles
  );
  const [deviceChannel, setDeviceChannel] = React.useState<number>(1);

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
            Sweep IV curve Input
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
          <Typography>Voltage Width/Duration (ms)</Typography>
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
            helperText="the width of voltage pulse"
            placeholder="provide number"
            value={voltageWidth}
            onChange={(e) => {
              var value = parseInt(e.target.value);

              if (value > 1000) value = 1000; //max
              if (value < 0) value = 0; //min

              setVoltageWidth(value);
            }}
            inputProps={{ min: 0, max: 1000 }}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography>Voltage Step Resolution (V)</Typography>
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
            helperText="the voltage step for resolution"
            placeholder="provide number"
            value={voltageStep}
            onChange={(e) => {
              var value = parseInt(e.target.value);

              if (value > 100000) value = 100000; //max
              if (value < 0) value = 0; //min

              setVoltageStep(value);
            }}
            inputProps={{ min: 0, max: 100000 }}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography>Sweep Cycle (number)</Typography>
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
            helperText="the number of applied voltage pulse"
            placeholder="provide number"
            value={sweepCycle}
            onChange={(e) => {
              var value = parseFloat(e.target.value);

              if (value > 100000) value = 100000; //max
              if (value < 0) value = 0; //min

              setSweepCycle(value);
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
          <Button
            variant="contained"
            onClick={() =>
              handleChangeSweepIVwaveformValue(
                positiveVoltage,
                negativeVoltage,
                voltageWidth,
                voltageStep,
                sweepCycle
              )
            }
          >
            View Waveform
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
