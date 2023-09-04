"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { WaveFunctionConductancePulseTimeProps } from "@/components/Chart/Waveform/ConductancePulseNumberWaveform/WaveFunctionConductancePulseTime";

type ConductancePulseNumberInputProps = {
  handleChangesetConductancePulseNumberWaveformValue: (
    positivePulseValue: number, //positiveVoltage
    intermediatePulseValue: number, //readVoltage
    negativePulseValue: number, //negativeVoltage
    positivePulseDuration: number, //positiveVoltageWidth
    intermediatePulseDuration: number, //measureTime
    negativePulseDuration: number, //negativeVoltageWidth
    distanceBetweenPulse: number, //waitTime
    cycleReadingPulse: number, //programmingPulse
    cycles: number //programmingCyclesRepeat
  ) => void;
  conductancePulseNumberWaveformValue: WaveFunctionConductancePulseTimeProps;
};

export default function ConductancePulseNumberInput({
  handleChangesetConductancePulseNumberWaveformValue,
  conductancePulseNumberWaveformValue,
}: ConductancePulseNumberInputProps) {
  const [negativeVoltage, setNegativeVoltage] = React.useState<number>(
    conductancePulseNumberWaveformValue.negativePulseValue
  );
  const [readVoltage, setReadVoltage] = React.useState<number>(
    conductancePulseNumberWaveformValue.intermediatePulseValue
  );

  const [positiveVoltage, setPositiveVoltage] = React.useState<number>(
    conductancePulseNumberWaveformValue.positivePulseValue
  );

  const [negativeVoltageWidth, setNegativeVoltageWidth] =
    React.useState<number>(
      conductancePulseNumberWaveformValue.negativePulseDuration
    );

  const [positiveVoltageWidth, setPositiveVoltageWidth] =
    React.useState<number>(
      conductancePulseNumberWaveformValue.positivePulseDuration
    );

  const [measureTime, setMeasureTime] = React.useState<number>(
    conductancePulseNumberWaveformValue.intermediatePulseDuration
  );

  const [waitTime, setWaitTime] = React.useState<number>(
    conductancePulseNumberWaveformValue.distanceBetweenPulse
  );
  const [programmingPulse, setProgrammingPulse] = React.useState<number>(
    conductancePulseNumberWaveformValue.cycleReadingPulse
  );

  const [programmingCyclesRepeat, setProgrammingCyclesRepeat] =
    React.useState<number>(conductancePulseNumberWaveformValue.cycles);

  const [deviceChannel, setDeviceChannel] = React.useState<number>(1);

  const totalMeasureTime =
    programmingPulse *
    (positiveVoltageWidth + waitTime + measureTime + waitTime);

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
            Conductance vs PulseNumber Input
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
          <Typography>How long to test in single pulse (second)</Typography>
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
            helperText="How long to test in a single pulse"
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
          <Typography>Waiting time to test at every (ms)</Typography>
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
            helperText="The time wait for testsing pulse retention time"
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
          <Typography>Programming Pulse (pulse number)</Typography>
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
            value={programmingPulse}
            onChange={(e) => {
              var value = parseFloat(e.target.value);

              if (value > 100000) value = 100000; //max
              if (value < 0) value = 0; //min

              setProgrammingPulse(value);
            }}
            inputProps={{ min: 0, max: 100000 }}
          />
          <Typography variant="h6">{`Total Time in a single cycle = ${totalMeasureTime}`}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>Programming Cycle Testing (number)</Typography>
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
            helperText="How many programming cycle testing"
            placeholder="provide number"
            value={programmingCyclesRepeat}
            onChange={(e) => {
              var value = parseInt(e.target.value);

              if (value > 100) value = 100; //max
              if (value < 0) value = 0; //min

              setProgrammingCyclesRepeat(value);
            }}
            inputProps={{ min: 0, max: 100 }}
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
              handleChangesetConductancePulseNumberWaveformValue(
                positiveVoltage,
                readVoltage,
                negativeVoltage,
                positiveVoltageWidth,
                measureTime,
                negativeVoltageWidth,
                waitTime,
                programmingPulse,
                programmingCyclesRepeat
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
