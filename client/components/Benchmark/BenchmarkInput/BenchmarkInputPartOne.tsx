"use client";

import * as React from "react";
import { Box, Grid, Card } from "@mui/material";
import { ParameterInputTabs } from "@/components/Input/BenchmarkInput";
import { VersionOne } from "@/components/Hardware/VersionOne";
import { SweepIVwaveform } from "@/components/Chart/Waveform/SweepIVwaveform";
import { PulseIVwaveform } from "@/components/Chart/Waveform/PulseIVwaveform";
import { ConductancePulseNumberWaveform } from "@/components/Chart/Waveform/ConductancePulseNumberWaveform";
import { SweepRetentionTimeWaveform } from "@/components/Chart/Waveform/SweepRetentionTimeWaveform";
import { PulseRetentionTimeWaveform } from "@/components/Chart/Waveform/PulseRetentionTimeWaveform";
import { EnduranceCycleWaveform } from "@/components/Chart/Waveform/EnduranceCycleWaveform";

export const BenchmarkInputPartOne = () => {
  //SweepIV handleState
  const [sweepIVwaveformValue, setSweepIVwaveformValue] = React.useState({
    positivePulseValue: 0,
    negativePulseValue: 0,
    pulseDuration: 0,
    stepsPerSegment: 0,
    cycles: 1,
  });

  const handleChangeSweepIVwaveformValue = (
    positivePulseValue: number,
    negativePulseValue: number,
    pulseDuration: number,
    stepsPerSegment: number,
    cycles: number
  ) => {
    setSweepIVwaveformValue({
      positivePulseValue: positivePulseValue,
      negativePulseValue: negativePulseValue,
      pulseDuration: pulseDuration,
      stepsPerSegment: stepsPerSegment,
      cycles: cycles,
    });
  };

  //PulseIV handleState
  const [pulseIVwaveformValue, setPulseIVwaveformValue] = React.useState({
    positivePulseValue: 0,
    negativePulseValue: 0,
    pulseDuration: 0,
    distanceBetweenPulse: 0,
    stepsPerSegment: 0,
    cycles: 1,
  });

  const handleChangePulseIVwaveformValue = (
    positivePulseValue: number,
    negativePulseValue: number,
    pulseDuration: number,
    distanceBetweenPulse: number,
    stepsPerSegment: number,
    cycles: number
  ) => {
    setPulseIVwaveformValue({
      positivePulseValue: positivePulseValue,
      negativePulseValue: negativePulseValue,
      pulseDuration: pulseDuration,
      distanceBetweenPulse: distanceBetweenPulse,
      stepsPerSegment: stepsPerSegment,
      cycles: cycles,
    });
  };

  //EnduranceCycleWaveform handleState
  const [enduranceCycleWaveformValue, setEnduranceCycleWaveformValue] =
    React.useState({
      positivePulseValue: 0,
      intermediatePulseValue: 0,
      negativePulseValue: 0,
      positivePulseDuration: 0,
      intermediatePulseDuration: 0,
      negativePulseDuration: 0,
      distanceBetweenPulse: 0,
      cycles: 1,
    });

  const handleChangeEnduranceCycleWaveformValue = (
    positivePulseValue: number,
    intermediatePulseValue: number,
    negativePulseValue: number,
    positivePulseDuration: number,
    intermediatePulseDuration: number,
    negativePulseDuration: number,
    distanceBetweenPulse: number,
    cycles: number
  ) => {
    setEnduranceCycleWaveformValue({
      positivePulseValue: positivePulseValue,
      intermediatePulseValue: intermediatePulseValue,
      negativePulseValue: negativePulseValue,
      positivePulseDuration: positivePulseDuration,
      intermediatePulseDuration: intermediatePulseDuration,
      negativePulseDuration: negativePulseDuration,
      distanceBetweenPulse: distanceBetweenPulse,
      cycles: cycles,
    });
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
  return (
    <>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={4}>
            <VersionOne />
          </Grid>
          <Grid item xs={8}>
            <Box sx={{ m: 1 }}>
              <Card variant="outlined">
                <ParameterInputTabs
                  handleChangeSweepIVwaveformValue={
                    handleChangeSweepIVwaveformValue
                  }
                  sweepIVwaveformValue={sweepIVwaveformValue}
                  handleChangePulseIVwaveformValue={
                    handleChangePulseIVwaveformValue
                  }
                  pulseIVwaveformValue={pulseIVwaveformValue}
                  handleChangeEnduranceCycleWaveformValue={
                    handleChangeEnduranceCycleWaveformValue
                  }
                  enduranceCycleWaveformValue={enduranceCycleWaveformValue}
                />
              </Card>
              <Card variant="outlined">
                <Box
                  sx={{
                    "& > :not(style)": { m: 1 },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 360,
                  }}
                >
                  <SweepIVwaveform
                    sweepIVwaveformValue={sweepIVwaveformValue}
                  />
                </Box>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <Grid item sm={6} md={6} lg={6} xl={6} xs>
            <Box sx={gridStyle}>
              <PulseIVwaveform pulseIVwaveformValue={pulseIVwaveformValue} />
            </Box>
          </Grid>
          <Grid item sm={6} md={6} lg={6} xl={6} xs>
            <Box sx={gridStyle}>
              <EnduranceCycleWaveform
                enduranceCycleWaveformValue={enduranceCycleWaveformValue}
              />
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <Grid item sm md lg xl xs>
            <Box sx={gridStyle}>
              <ConductancePulseNumberWaveform />
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <Grid item sm={6} md={6} lg={6} xl={6} xs>
            <Box sx={gridStyle}>
              <SweepRetentionTimeWaveform />
            </Box>
          </Grid>
          <Grid item sm={6} md={6} lg={6} xl={6} xs>
            <Box sx={gridStyle}>
              <PulseRetentionTimeWaveform />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
