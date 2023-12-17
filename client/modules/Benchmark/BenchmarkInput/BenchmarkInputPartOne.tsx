"use client";

import * as React from "react";
import {
  Box,
  Grid,
  Card,
  Typography,
  TextField,
  Stack,
  Button,
} from "@mui/material";
import { ParameterInputTabs } from "@/components/Input/BenchmarkInput";
import {
  HardwareSerialPort,
  VersionOne,
} from "@/components/Hardware/VersionOne";
import { SweepIVwaveform } from "@/modules/Chart/Waveform/SweepIVwaveform";
import { PulseIVwaveform } from "@/modules/Chart/Waveform/PulseIVwaveform";
import { ConductancePulseNumberWaveform } from "@/modules/Chart/Waveform/ConductancePulseNumberWaveform";
import { SweepRetentionTimeWaveform } from "@/modules/Chart/Waveform/SweepRetentionTimeWaveform";
import { PulseRetentionTimeWaveform } from "@/modules/Chart/Waveform/PulseRetentionTimeWaveform";
import { EnduranceCycleWaveform } from "@/modules/Chart/Waveform/EnduranceCycleWaveform";
import { BenchmarkStepper } from "@/components";
import { useFormik } from "formik";
import { WaveFunctionSweepIVwaveformProps } from "@/modules/Chart/Waveform/SweepIVwaveform/WaveFunctionSweepIVwaveform";
import { WaveFunctionPulseIVwaveformProps } from "@/modules/Chart/Waveform/PulseIVwaveform/WaveFunctionPulseIVwaveform";
import { WaveFunctionEnduranceCycleWaveformProps } from "@/modules/Chart/Waveform/EnduranceCycleWaveform/WaveFunctionEnduranceCycleWaveform";
import { WaveFunctionSweepRetentionTimeWaveformProps } from "@/modules/Chart/Waveform/SweepRetentionTimeWaveform/WaveFunctionSweepRetentionTimeWaveform";
import { WaveFunctionPulseRetentionTimeWaveformProps } from "@/modules/Chart/Waveform/PulseRetentionTimeWaveform/WaveFunctionPulseRetentionTimeWaveform";
import { WaveFunctionConductancePulseTimeProps } from "@/modules/Chart/Waveform/ConductancePulseNumberWaveform/WaveFunctionConductancePulseTime";

export type initialBenchmarkInputValuesProps = {
  sweepIVwaveformValue: WaveFunctionSweepIVwaveformProps;
  pulseIVwaveformValue: WaveFunctionPulseIVwaveformProps;
  enduranceCycleWaveformValue: WaveFunctionEnduranceCycleWaveformProps;
  sweepRetentionTimeWaveformValue: WaveFunctionSweepRetentionTimeWaveformProps;
  pulseRetentionTimeWaveformValue: WaveFunctionPulseRetentionTimeWaveformProps;
  conductancePulseNumberWaveformValue: WaveFunctionConductancePulseTimeProps;
};

export const BenchmarkInputPartOne = () => {
  const [openViewWaveform, setOpenViewWaveform] =
    React.useState<boolean>(false);

  const handleViewWaveform = () => {
    if (openViewWaveform) {
      setOpenViewWaveform(false);
    } else if (!openViewWaveform) {
      setOpenViewWaveform(true);
    }
  };

  const gridStyle = {
    "& > :not(style)": { m: 1 },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 300,
    width: "auto",
    m: 1,
  };

  //**BENCHMARK_INPUT_FORMIK**\\

  const initialBenchmarkInputValues: initialBenchmarkInputValuesProps = {
    sweepIVwaveformValue: {
      positivePulseValue: 0,
      negativePulseValue: 0,
      pulseDuration: 0,
      stepsPerSegment: 0,
      cycles: 1,
    },
    pulseIVwaveformValue: {
      positivePulseValue: 0,
      negativePulseValue: 0,
      pulseDuration: 0,
      distanceBetweenPulse: 0,
      stepsPerSegment: 0,
      cycles: 1,
    },
    enduranceCycleWaveformValue: {
      positivePulseValue: 0,
      intermediatePulseValue: 0,
      negativePulseValue: 0,
      positivePulseDuration: 0,
      intermediatePulseDuration: 0,
      negativePulseDuration: 0,
      distanceBetweenPulse: 0,
      cycles: 1,
    },
    sweepRetentionTimeWaveformValue: {
      positivePulseValue: 0,
      intermediatePulseValue: 0,
      negativePulseValue: 0,
      positivePulseDuration: 0,
      intermediatePulseDuration: 0,
      negativePulseDuration: 0,
      distanceBetweenPulse: 0,
      cycles: 1,
    },
    pulseRetentionTimeWaveformValue: {
      positivePulseValue: 0,
      intermediatePulseValue: 0,
      negativePulseValue: 0,
      positivePulseDuration: 0,
      intermediatePulseDuration: 0,
      negativePulseDuration: 0,
      distanceBetweenPulse: 0,
      cycleIntermediatePulse: 0,
      cycles: 1,
    },
    conductancePulseNumberWaveformValue: {
      positivePulseValue: 0,
      intermediatePulseValue: 0,
      negativePulseValue: 0,
      positivePulseDuration: 0,
      intermediatePulseDuration: 0,
      negativePulseDuration: 0,
      distanceBetweenPulse: 0,
      cycleReadingPulse: 0,
      cycles: 1,
    },
  };

  const benchmarkInputFormik = useFormik({
    initialValues: initialBenchmarkInputValues,
    onSubmit: async (values) => {
      console.log(values);
    },
  });
  //**END**\\

  console.log(benchmarkInputFormik.values);
  return (
    <>
      <Grid item xs={12} sx={{ mb: 1.5 }}>
        <Grid container>
          <Grid
            item
            sm
            md
            lg={3}
            xl={3}
            xs
            justifyContent="center"
            alignItems="flex-start"
            sx={{pt:5}}
          >
            <BenchmarkStepper />
          </Grid>
          <Grid item sm md lg={9} xl={9} xs>
            <Box sx={{ m: 1 }}>
              <Stack
                direction={"row"}
                spacing={3}
                justifyContent={"flex-start"}
                alignItems={"center"}
                sx={{ m: 3 }}
              >
                <Typography variant="h5">Benchmark Test Name :</Typography>
                <TextField
                  id="standard-number"
                  type="text"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                  helperText="Specify test name"
                  placeholder="provide name"
                  required
                  onChange={(e) => {}}
                />
              </Stack>
              <Card variant="outlined">
                <ParameterInputTabs
                  benchmarkInputFormik={benchmarkInputFormik}
                />
              </Card>
            </Box>
            <Stack
              justifyContent="center"
              alignItems="center"
              spacing={5}
              direction={"row"}
            >
              <Button variant="contained" onClick={handleViewWaveform}>
                {openViewWaveform ? "Close Waveform" : "View Waveform"}
              </Button>
              <Button
                variant="contained"
                onClick={() => benchmarkInputFormik.resetForm()}
              >
                Reset All Input
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
      {openViewWaveform && (
        <>
          <Grid item xs={12}>
            <Grid container>
              <Grid item sm md lg xl xs>
                <Box sx={gridStyle}>
                  <SweepIVwaveform
                    sweepIVwaveformValue={
                      benchmarkInputFormik.values.sweepIVwaveformValue
                    }
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid item sm={6} md={6} lg={6} xl={6} xs>
                <Box sx={gridStyle}>
                  <PulseIVwaveform
                    pulseIVwaveformValue={
                      benchmarkInputFormik.values.pulseIVwaveformValue
                    }
                  />
                </Box>
              </Grid>
              <Grid item sm={6} md={6} lg={6} xl={6} xs>
                <Box sx={gridStyle}>
                  <EnduranceCycleWaveform
                    enduranceCycleWaveformValue={
                      benchmarkInputFormik.values.enduranceCycleWaveformValue
                    }
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid item sm md lg xl xs>
                <Box sx={gridStyle}>
                  <ConductancePulseNumberWaveform
                    conductancePulseNumberWaveformValue={
                      benchmarkInputFormik.values
                        .conductancePulseNumberWaveformValue
                    }
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid item sm={6} md={6} lg={6} xl={6} xs>
                <Box sx={gridStyle}>
                  <SweepRetentionTimeWaveform
                    sweepRetentionTimeWaveformValue={
                      benchmarkInputFormik.values
                        .sweepRetentionTimeWaveformValue
                    }
                  />
                </Box>
              </Grid>
              <Grid item sm={6} md={6} lg={6} xl={6} xs>
                <Box sx={gridStyle}>
                  <PulseRetentionTimeWaveform
                    pulseRetentionTimeWaveformValue={
                      benchmarkInputFormik.values
                        .pulseRetentionTimeWaveformValue
                    }
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};
