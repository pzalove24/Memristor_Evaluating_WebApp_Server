"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import { Grid, TextField, Typography, Stack } from "@mui/material";
import Button from "@mui/material/Button/Button";
import { WaveFunctionPulseIVwaveformProps } from "@/modules/Chart/Waveform/PulseIVwaveform/WaveFunctionPulseIVwaveform";
import { FormikProps } from "formik";
import { initialBenchmarkInputValuesProps } from "@/modules/Benchmark/BenchmarkInput/BenchmarkInputPartOne";

type PulseIVInputProps = {
  benchmarkInputFormik: FormikProps<initialBenchmarkInputValuesProps>;
};

export default function PulseIVInput({
  benchmarkInputFormik,
}: PulseIVInputProps) {
  const { values, setFieldValue, handleChange, initialValues } =
    benchmarkInputFormik;
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
          <Stack direction="row" spacing={2}>
            <Typography variant="h4" fontWeight="bold">
              Pulse IV curve Input
            </Typography>
            <Button
              variant="contained"
              onClick={() =>
                setFieldValue(
                  "pulseIVwaveformValue",
                  initialValues.pulseIVwaveformValue
                )
              }
            >
              RESET
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Typography>Negative Voltage (V)</Typography>
        </Grid>
        <Grid item xs={1}>
          <></>
        </Grid>
        <Grid item xs={7}>
          <TextField
            id="pulseIVwaveformValue.negativePulseValue"
            name="pulseIVwaveformValue.negativePulseValue"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            helperText="negative voltage (-3.00 - 0.00)"
            placeholder="provide number"
            value={values.pulseIVwaveformValue.negativePulseValue}
            onChange={handleChange}
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
            id="pulseIVwaveformValue.positivePulseValue"
            name="pulseIVwaveformValue.positivePulseValue"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            helperText="positive voltage (0.00 - 3.00)"
            placeholder="provide number"
            value={values.pulseIVwaveformValue.positivePulseValue}
            onChange={handleChange}
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
            id="pulseIVwaveformValue.pulseDuration"
            name="pulseIVwaveformValue.pulseDuration"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            helperText="the width of voltage pulse"
            placeholder="provide number"
            value={values.pulseIVwaveformValue.pulseDuration}
            onChange={handleChange}
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
            id="pulseIVwaveformValue.stepsPerSegment"
            name="pulseIVwaveformValue.stepsPerSegment"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            helperText="the voltage step for resolution"
            placeholder="provide number"
            value={values.pulseIVwaveformValue.stepsPerSegment}
            onChange={handleChange}
            inputProps={{ min: 0, max: 100000 }}
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
            id="pulseIVwaveformValue.distanceBetweenPulse"
            name="pulseIVwaveformValue.distanceBetweenPulse"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            helperText="Interpulse interval between each voltage"
            placeholder="provide number"
            value={values.pulseIVwaveformValue.distanceBetweenPulse}
            onChange={handleChange}
            inputProps={{ min: 0, max: 100000 }}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography>Pulse IV Cycle (number)</Typography>
        </Grid>
        <Grid item xs={1}>
          <></>
        </Grid>
        <Grid item xs={7}>
          <TextField
            id="pulseIVwaveformValue.cycles"
            name="pulseIVwaveformValue.cycles"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            helperText="the number of applied voltage pulse"
            placeholder="provide number"
            value={values.pulseIVwaveformValue.cycles}
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
      </Grid>
    </Box>
  );
}
