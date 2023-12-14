"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import { Grid, TextField, Typography, Stack } from "@mui/material";
import Button from "@mui/material/Button/Button";
import { WaveFunctionEnduranceCycleWaveformProps } from "@/modules/Chart/Waveform/EnduranceCycleWaveform/WaveFunctionEnduranceCycleWaveform";

type EnduranceCycleInputProps = {
  handleChangeEnduranceCycleWaveformValue: (
    positivePulseValue: number, //positiveVoltage
    intermediatePulseValue: number, //readVoltage
    negativePulseValue: number, //negativeVoltage
    positivePulseDuration: number, //positiveVoltageWidth
    intermediatePulseDuration: number, //readVoltageWidth
    negativePulseDuration: number, //negativeVoltageWidth
    distanceBetweenPulse: number, //interval
    cycles: number //enduranceCycleTesting
  ) => void;
  enduranceCycleWaveformValue: WaveFunctionEnduranceCycleWaveformProps;
};

export default function EnduranceCycleInput({
  handleChangeEnduranceCycleWaveformValue,
  enduranceCycleWaveformValue,
}: EnduranceCycleInputProps) {
  const [negativeVoltage, setNegativeVoltage] = React.useState<number>(
    enduranceCycleWaveformValue.negativePulseValue
  );
  const [readVoltage, setReadVoltage] = React.useState<number>(
    enduranceCycleWaveformValue.intermediatePulseValue
  );
  const [positiveVoltage, setPositiveVoltage] = React.useState<number>(
    enduranceCycleWaveformValue.positivePulseValue
  );
  const [negativeVoltageWidth, setNegativeVoltageWidth] =
    React.useState<number>(enduranceCycleWaveformValue.negativePulseDuration);
  const [readVoltageWidth, setReadVoltageWidth] = React.useState<number>(
    enduranceCycleWaveformValue.intermediatePulseDuration
  );
  const [positiveVoltageWidth, setPositiveVoltageWidth] =
    React.useState<number>(enduranceCycleWaveformValue.positivePulseDuration);
  const [interval, setInterval] = React.useState<number>(
    enduranceCycleWaveformValue.distanceBetweenPulse
  );
  const [enduranceCycleTesting, setEnduranceCycleTesting] =
    React.useState<number>(enduranceCycleWaveformValue.cycles);
  const [deviceChannel, setDeviceChannel] = React.useState<number>(1);

  const handleReset = () => {
    setNegativeVoltage(0);
    setReadVoltage(0);
    setPositiveVoltage(0);
    setNegativeVoltageWidth(0);
    setReadVoltageWidth(0);
    setPositiveVoltageWidth(0);
    setInterval(0);
    handleChangeEnduranceCycleWaveformValue(
      positiveVoltage,
      readVoltage,
      negativeVoltage,
      positiveVoltageWidth,
      readVoltageWidth,
      negativeVoltageWidth,
      interval,
      enduranceCycleTesting
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
            Endurance Cycle Input
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
            helperText="the width of postive voltage pulse"
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
          <Typography>Read Voltage Width/Duration (ms)</Typography>
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
            helperText="the width of read voltage pulse"
            placeholder="provide number"
            value={readVoltageWidth}
            onChange={(e) => {
              var value = parseInt(e.target.value);

              if (value > 1000) value = 1000; //max
              if (value < 0) value = 0; //min

              setReadVoltageWidth(value);
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
            helperText="the width of negative voltage pulse"
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
          <Typography>Endurance Cycle Testing (number)</Typography>
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
            helperText="How many endurance cycle testing"
            placeholder="provide number"
            value={enduranceCycleTesting}
            onChange={(e) => {
              var value = parseFloat(e.target.value);

              if (value > 100000) value = 100000; //max
              if (value < 0) value = 0; //min

              setEnduranceCycleTesting(value);
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
                handleChangeEnduranceCycleWaveformValue(
                  positiveVoltage,
                  readVoltage,
                  negativeVoltage,
                  positiveVoltageWidth,
                  readVoltageWidth,
                  negativeVoltageWidth,
                  interval,
                  enduranceCycleTesting
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