"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import { Grid, TextField, Typography, Stack } from "@mui/material";
import Button from "@mui/material/Button/Button";
import { WaveFunctionEnduranceCycleWaveformProps } from "@/modules/Chart/Waveform/EnduranceCycleWaveform/WaveFunctionEnduranceCycleWaveform";
import { initialBenchmarkInputValuesProps } from "@/modules/Benchmark/BenchmarkInput/BenchmarkInputPartOne";
import { FormikProps } from "formik";

type EnduranceCycleInputProps = {
  benchmarkInputFormik: FormikProps<initialBenchmarkInputValuesProps>;
};

export default function EnduranceCycleInput({
  benchmarkInputFormik,
}: EnduranceCycleInputProps) {
  const { values, handleChange, resetForm } = benchmarkInputFormik;
  const [deviceChannel, setDeviceChannel] = React.useState<number>(1);

  // const handleReset = () => {
  //   setNegativeVoltage(0);
  //   setReadVoltage(0);
  //   setPositiveVoltage(0);
  //   setNegativeVoltageWidth(0);
  //   setReadVoltageWidth(0);
  //   setPositiveVoltageWidth(0);
  //   setInterval(0);
  //   handleChangeEnduranceCycleWaveformValue(
  //     positiveVoltage,
  //     readVoltage,
  //     negativeVoltage,
  //     positiveVoltageWidth,
  //     readVoltageWidth,
  //     negativeVoltageWidth,
  //     interval,
  //     enduranceCycleTesting
  //   );
  // };

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
            id="enduranceCycleWaveformValue.negativePulseValue"
            name="enduranceCycleWaveformValue.negativePulseValue"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            helperText="negative voltage (-3.00 - 0.00)"
            placeholder="provide number"
            value={values.enduranceCycleWaveformValue.negativePulseValue}
            onChange={handleChange}
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
            id="enduranceCycleWaveformValue.intermediatePulseValue"
            name="enduranceCycleWaveformValue.intermediatePulseValue"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            helperText="read voltage (0.00 - 3.00)"
            placeholder="provide number"
            value={values.enduranceCycleWaveformValue.intermediatePulseValue}
            onChange={handleChange}
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
            id="enduranceCycleWaveformValue.positivePulseValue"
            name="enduranceCycleWaveformValue.positivePulseValue"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            helperText="positive voltage (0.00 - 3.00)"
            placeholder="provide number"
            value={values.enduranceCycleWaveformValue.positivePulseValue}
            onChange={handleChange}
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
            id="enduranceCycleWaveformValue.negativePulseDuration"
            name="enduranceCycleWaveformValue.negativePulseDuration"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            helperText="the width of postive voltage pulse"
            placeholder="provide number"
            value={values.enduranceCycleWaveformValue.negativePulseDuration}
            onChange={handleChange}
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
            id="enduranceCycleWaveformValue.intermediatePulseDuration"
            name="enduranceCycleWaveformValue.intermediatePulseDuration"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            helperText="the width of read voltage pulse"
            placeholder="provide number"
            value={values.enduranceCycleWaveformValue.intermediatePulseDuration}
            onChange={handleChange}
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
            id="enduranceCycleWaveformValue.positivePulseDuration"
            name="enduranceCycleWaveformValue.positivePulseDuration"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            helperText="the width of negative voltage pulse"
            placeholder="provide number"
            value={values.enduranceCycleWaveformValue.positivePulseDuration}
            onChange={handleChange}
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
            id="enduranceCycleWaveformValue.distanceBetweenPulse"
            name="enduranceCycleWaveformValue.distanceBetweenPulse"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            helperText="Interpulse interval between each voltage"
            placeholder="provide number"
            value={values.enduranceCycleWaveformValue.distanceBetweenPulse}
            onChange={handleChange}
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
            id="enduranceCycleWaveformValue.cycles"
            name="enduranceCycleWaveformValue.cycles"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            helperText="How many endurance cycle testing"
            placeholder="provide number"
            value={values.enduranceCycleWaveformValue.cycles}
            onChange={handleChange}
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
              // onClick={() =>
              //   handleChangeEnduranceCycleWaveformValue(
              //     positiveVoltage,
              //     readVoltage,
              //     negativeVoltage,
              //     positiveVoltageWidth,
              //     readVoltageWidth,
              //     negativeVoltageWidth,
              //     interval,
              //     enduranceCycleTesting
              //   )
              // }
            >
              View Waveform
            </Button>
            <Button variant="contained" onClick={() => resetForm()}>
              RESET
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
