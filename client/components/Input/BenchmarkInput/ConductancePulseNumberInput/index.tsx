"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import { Button, Grid, TextField, Typography, Stack } from "@mui/material";
import { WaveFunctionConductancePulseTimeProps } from "@/modules/Chart/Waveform/ConductancePulseNumberWaveform/WaveFunctionConductancePulseTime";
import { FormikProps } from "formik";
import { initialBenchmarkInputValuesProps } from "@/modules/Benchmark/BenchmarkInput/BenchmarkInputPartOne";

type ConductancePulseNumberInputProps = {
  benchmarkInputFormik: FormikProps<initialBenchmarkInputValuesProps>;
};

export default function ConductancePulseNumberInput({
  benchmarkInputFormik,
}: ConductancePulseNumberInputProps) {
  const { values, setFieldValue, handleChange, initialValues } =
    benchmarkInputFormik;
  const [deviceChannel, setDeviceChannel] = React.useState<number>(1);

  // const totalMeasureTime =
  //   programmingPulse *
  //   (positiveVoltageWidth + waitTime + measureTime + waitTime);

  const totalMeasureTime =
    values.conductancePulseNumberWaveformValue.cycleReadingPulse *
    (values.conductancePulseNumberWaveformValue.positivePulseDuration +
      values.conductancePulseNumberWaveformValue.distanceBetweenPulse +
      values.conductancePulseNumberWaveformValue.intermediatePulseDuration +
      values.conductancePulseNumberWaveformValue.distanceBetweenPulse);

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
              Conductance vs PulseNumber Input
            </Typography>
            <Button
              variant="contained"
              onClick={() =>
                setFieldValue(
                  "conductancePulseNumberWaveformValue",
                  initialValues.conductancePulseNumberWaveformValue
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
            id="conductancePulseNumberWaveformValue.negativePulseValue"
            name="conductancePulseNumberWaveformValue.negativePulseValue"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            helperText="negative voltage (-3.00 - 0.00)"
            placeholder="provide number"
            value={
              values.conductancePulseNumberWaveformValue.negativePulseValue
            }
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
            id="conductancePulseNumberWaveformValue.intermediatePulseValue"
            name="conductancePulseNumberWaveformValue.intermediatePulseValue"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            helperText="read voltage (0.00 - 3.00)"
            placeholder="provide number"
            value={
              values.conductancePulseNumberWaveformValue.intermediatePulseValue
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
            id="conductancePulseNumberWaveformValue.positivePulseValue"
            name="conductancePulseNumberWaveformValue.positivePulseValue"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            helperText="positive voltage (0.00 - 3.00)"
            placeholder="provide number"
            value={
              values.conductancePulseNumberWaveformValue.positivePulseValue
            }
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
            id="conductancePulseNumberWaveformValue.negativePulseDuration"
            name="conductancePulseNumberWaveformValue.negativePulseDuration"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            helperText="the width of negative voltage pulse"
            placeholder="provide number"
            value={
              values.conductancePulseNumberWaveformValue.negativePulseDuration
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
            id="conductancePulseNumberWaveformValue.positivePulseDuration"
            name="conductancePulseNumberWaveformValue.positivePulseDuration"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            helperText="the width of positive voltage pulse"
            placeholder="provide number"
            value={
              values.conductancePulseNumberWaveformValue.positivePulseDuration
            }
            onChange={handleChange}
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
            id="conductancePulseNumberWaveformValue.intermediatePulseDuration"
            name="conductancePulseNumberWaveformValue.intermediatePulseDuration"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            helperText="How long to test in a single pulse"
            placeholder="provide number"
            value={
              values.conductancePulseNumberWaveformValue
                .intermediatePulseDuration
            }
            onChange={handleChange}
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
            id="conductancePulseNumberWaveformValue.distanceBetweenPulse"
            name="conductancePulseNumberWaveformValue.distanceBetweenPulse"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            helperText="The time wait for testsing pulse retention time"
            placeholder="provide number"
            value={
              values.conductancePulseNumberWaveformValue.distanceBetweenPulse
            }
            onChange={handleChange}
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
            id="conductancePulseNumberWaveformValue.cycleReadingPulse"
            name="conductancePulseNumberWaveformValue.cycleReadingPulse"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            helperText="the number of applied voltage pulse"
            placeholder="provide number"
            value={values.conductancePulseNumberWaveformValue.cycleReadingPulse}
            onChange={handleChange}
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
            id="conductancePulseNumberWaveformValue.cycles"
            name="conductancePulseNumberWaveformValue.cycles"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            helperText="How many programming cycle testing"
            placeholder="provide number"
            value={values.conductancePulseNumberWaveformValue.cycles}
            onChange={handleChange}
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
      </Grid>
    </Box>
  );
}
