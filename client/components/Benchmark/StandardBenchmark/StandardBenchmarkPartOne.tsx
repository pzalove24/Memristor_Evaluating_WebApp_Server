import React from "react";
import { Box, Grid, Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import {
  PulseIVchart,
  SweepIVchart,
} from "@/components/Chart/Benchmark/StandardBenchmark/IVchart";
import {
  PulseLogLog,
  SweepLogLog,
} from "@/components/Chart/Benchmark/StandardBenchmark/LogLogIVCurve";
import {
  CumuResistancePulseType,
  CumuResistanceSweepType,
  CumuVoltagePulseType,
  CumuVoltageSweepType,
} from "@/components/Chart/Benchmark/StandardBenchmark/CumulativeProbability";
import {
  DistributeResistancePulseType,
  DistributeResistanceSweepType,
  DistributeVoltagePulseType,
  DistributeVoltageSweepType,
} from "@/components/Chart/Benchmark/StandardBenchmark/DistributionSetReset";
import {
  ResistanceOnOffPulse,
  ResistanceOnOffSweep,
  VoltageOnOffPulse,
  VoltageOnOffSweep,
} from "@/components/Chart/Benchmark/StandardBenchmark/OnOffRatio";

import { BenchmarkChart } from "@/types";

export const StandardBenchmarkPartOne = () => {
  const gridStyle = {
    "& > :not(style)": { m: 1 },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 300,
    width: "auto",
    m: 1,
  };

  const StandardBenchmarkChart: BenchmarkChart[] = [
    {
      chart1: <SweepIVchart />,
      chart2: <SweepLogLog />,
      chart3: <CumuResistanceSweepType />,
      chart4: <DistributeResistanceSweepType />,
      index: 0,
    },
    {
      chart1: <CumuVoltageSweepType />,
      chart2: <DistributeVoltageSweepType />,
      chart3: <ResistanceOnOffSweep />,
      chart4: <VoltageOnOffSweep />,
      index: 1,
    },
    {
      chart1: <PulseIVchart />,
      chart2: <PulseLogLog />,
      chart3: <CumuResistancePulseType />,
      chart4: <DistributeResistancePulseType />,
      index: 2,
    },
    {
      chart1: <CumuVoltagePulseType />,
      chart2: <DistributeVoltagePulseType />,
      chart3: <ResistanceOnOffPulse />,
      chart4: <VoltageOnOffPulse />,
      index: 3,
    },
  ];

  return (
    <>
      <Grid item xs={12}>
        <Divider textAlign="left" variant="middle">
          <Typography color="secondary" display="block" variant="h5">
            Standard Benchmark
          </Typography>
        </Divider>
      </Grid>
      {StandardBenchmarkChart.map(
        ({ chart1, chart2, chart3, chart4, index }) => (
          <Grid key={index} item xs={12}>
            <Grid container>
              <Grid item sm={6} md={3} lg={3} xl={3} xs>
                <Box sx={gridStyle}>{chart1}</Box>
              </Grid>
              <Grid item sm={6} md={3} lg={3} xl={3} xs>
                <Box sx={gridStyle}>{chart2}</Box>
              </Grid>
              <Grid item sm={6} md={3} lg={3} xl={3} xs>
                <Box sx={gridStyle}>{chart3}</Box>
              </Grid>
              <Grid item sm={6} md={3} lg={3} xl={3} xs>
                <Box sx={gridStyle}>{chart4}</Box>
              </Grid>
            </Grid>
          </Grid>
        )
      )}
    </>
  );
};
