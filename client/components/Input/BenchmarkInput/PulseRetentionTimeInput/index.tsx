"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import { Button, Grid, TextField, Typography, Stack } from "@mui/material";
import { WaveFunctionPulseRetentionTimeWaveformProps } from "@/modules/Chart/Waveform/PulseRetentionTimeWaveform/WaveFunctionPulseRetentionTimeWaveform";
import { FormikProps } from "formik";
import { initialBenchmarkInputValuesProps } from "@/modules/Benchmark/BenchmarkInput/BenchmarkInputPartOne";

type PulseRetentionTimeInputProps = {
  benchmarkInputFormik: FormikProps<initialBenchmarkInputValuesProps>;
};

export default function PulseRetentionTimeInput({
  benchmarkInputFormik,
}: PulseRetentionTimeInputProps) {
  const { values, setFieldValue, handleChange, initialValues } =
    benchmarkInputFormik;
  const [deviceChannel, setDeviceChannel] = React.useState<number>(1);

  const totalMeasureTime =
    values.pulseRetentionTimeWaveformValue.cycleIntermediatePulse *
    (values.pulseRetentionTimeWaveformValue.intermediatePulseDuration +
      values.pulseRetentionTimeWaveformValue.distanceBetweenPulse);

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
              Pulse Retention Time Input
            </Typography>
            <Button
              variant="contained"
              onClick={() =>
                setFieldValue(
                  "pulseRetentionTimeWaveformValue",
                  initialValues.pulseRetentionTimeWaveformValue
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
            id="pulseRetentionTimeWaveformValue.negativePulseValue"
            name="pulseRetentionTimeWaveformValue.negativePulseValue"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            helperText="negative voltage (-3.00 - 0.00)"
            placeholder="provide number"
            value={values.pulseRetentionTimeWaveformValue.negativePulseValue}
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
            id="pulseRetentionTimeWaveformValue.intermediatePulseValue"
            name="pulseRetentionTimeWaveformValue.intermediatePulseValue"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            helperText="read voltage (0.00 - 3.00)"
            placeholder="provide number"
            value={
              values.pulseRetentionTimeWaveformValue.intermediatePulseValue
            }
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
            id="pulseRetentionTimeWaveformValue.positivePulseValue"
            name="pulseRetentionTimeWaveformValue.positivePulseValue"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            helperText="positive voltage (0.00 - 3.00)"
            placeholder="provide number"
            value={values.pulseRetentionTimeWaveformValue.positivePulseValue}
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
            id="pulseRetentionTimeWaveformValue.negativePulseDuration"
            name="pulseRetentionTimeWaveformValue.negativePulseDuration"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            helperText="the width of negative voltage pulse"
            placeholder="provide number"
            value={values.pulseRetentionTimeWaveformValue.negativePulseDuration}
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
            id="pulseRetentionTimeWaveformValue.positivePulseDuration"
            name="pulseRetentionTimeWaveformValue.positivePulseDuration"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            helperText="the width of positive voltage pulse"
            placeholder="provide number"
            value={values.pulseRetentionTimeWaveformValue.positivePulseDuration}
            onChange={handleChange}
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
            id="pulseRetentionTimeWaveformValue.intermediatePulseDuration"
            name="pulseRetentionTimeWaveformValue.intermediatePulseDuration"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            helperText="How long to measure in a single pulse"
            placeholder="provide number"
            value={
              values.pulseRetentionTimeWaveformValue.intermediatePulseDuration
            }
            onChange={handleChange}
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
            id="pulseRetentionTimeWaveformValue.distanceBetweenPulse"
            name="pulseRetentionTimeWaveformValue.distanceBetweenPulse"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            helperText="The time wait for measuring pulse retention time"
            placeholder="provide number"
            value={values.pulseRetentionTimeWaveformValue.distanceBetweenPulse}
            onChange={handleChange}
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
            id="pulseRetentionTimeWaveformValue.cycleIntermediatePulse"
            name="pulseRetentionTimeWaveformValue.cycleIntermediatePulse"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            helperText="Number of pulse cycle in retention time"
            placeholder="provide number"
            value={
              values.pulseRetentionTimeWaveformValue.cycleIntermediatePulse
            }
            onChange={handleChange}
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
            id="pulseRetentionTimeWaveformValue.cycles"
            name="pulseRetentionTimeWaveformValue.cycles"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            helperText="How many retention time testing"
            placeholder="provide number"
            value={values.pulseRetentionTimeWaveformValue.cycles}
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
