"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import { Button, Grid, TextField, Typography, Stack } from "@mui/material";
import { WaveFunctionSweepRetentionTimeWaveformProps } from "@/modules/Chart/Waveform/SweepRetentionTimeWaveform/WaveFunctionSweepRetentionTimeWaveform";
import { FormikProps } from "formik";
import { initialBenchmarkInputValuesProps } from "@/modules/Benchmark/BenchmarkInput/BenchmarkInputPartOne";

type SweepRetentionTimeInputProps = {
  benchmarkInputFormik: FormikProps<initialBenchmarkInputValuesProps>;
};

export default function SweepRetentionTimeInput({
  benchmarkInputFormik,
}: SweepRetentionTimeInputProps) {
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
              Sweep Retention Time Input
            </Typography>
            <Button
              variant="contained"
              onClick={() =>
                setFieldValue(
                  "sweepRetentionTimeWaveformValue",
                  initialValues.sweepRetentionTimeWaveformValue
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
            id="sweepRetentionTimeWaveformValue.negativePulseValue"
            name="sweepRetentionTimeWaveformValue.negativePulseValue"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            helperText="negative voltage (-3.00 - 0.00)"
            placeholder="provide number"
            value={values.sweepRetentionTimeWaveformValue.negativePulseValue}
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
            id="sweepRetentionTimeWaveformValue.intermediatePulseValue"
            name="sweepRetentionTimeWaveformValue.intermediatePulseValue"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            helperText="read voltage (0.00 - 3.00)"
            placeholder="provide number"
            value={
              values.sweepRetentionTimeWaveformValue.intermediatePulseValue
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
            id="sweepRetentionTimeWaveformValue.positivePulseValue"
            name="sweepRetentionTimeWaveformValue.positivePulseValue"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            helperText="positive voltage (0.00 - 3.00)"
            placeholder="provide number"
            value={values.sweepRetentionTimeWaveformValue.positivePulseValue}
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
            id="sweepRetentionTimeWaveformValue.negativePulseDuration"
            name="sweepRetentionTimeWaveformValue.negativePulseDuration"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            helperText="the width of negative voltage pulse"
            placeholder="provide number"
            value={values.sweepRetentionTimeWaveformValue.negativePulseDuration}
            onChange={handleChange}
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
            id="sweepRetentionTimeWaveformValue.intermediatePulseDuration"
            name="sweepRetentionTimeWaveformValue.intermediatePulseDuration"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            helperText="How long to measure retention time"
            placeholder="provide number"
            value={
              values.sweepRetentionTimeWaveformValue.intermediatePulseDuration
            }
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
            id="sweepRetentionTimeWaveformValue.positivePulseDuration"
            name="sweepRetentionTimeWaveformValue.positivePulseDuration"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            helperText="the width of positive voltage pulse"
            placeholder="provide number"
            value={values.sweepRetentionTimeWaveformValue.positivePulseDuration}
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
            id="sweepRetentionTimeWaveformValue.distanceBetweenPulse"
            name="sweepRetentionTimeWaveformValue.distanceBetweenPulse"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            helperText="Interpulse interval between each voltage"
            placeholder="provide number"
            value={values.sweepRetentionTimeWaveformValue.distanceBetweenPulse}
            onChange={handleChange}
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
            id="sweepRetentionTimeWaveformValue.cycles"
            name="sweepRetentionTimeWaveformValue.cycles"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            helperText="How many retention time testing"
            placeholder="provide number"
            value={values.sweepRetentionTimeWaveformValue.cycles}
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
