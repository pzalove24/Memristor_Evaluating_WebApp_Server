import React from "react";
import { Grid, Divider, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import {
  MultiCurrentLevelPulseLogLog,
  MultiCurrentLevelSweepLogLog,
  MultiVoltageLevelPulseLogLog,
  MultiVoltageLevelSweepLogLog,
} from "@/components/Chart/Benchmark/AdvancedBenchmarkChart/LogLogIVCurve";
import {
  MultiCurrentLevelPulseIVchart,
  MultiCurrentLevelSweepIVchart,
  MultiVoltageLevelPulseIVchart,
  MultiVoltageLevelSweepIVchart,
} from "@/components/Chart/Benchmark/AdvancedBenchmarkChart/IVchart";

import { MultiBitVersionOne } from "@/components/Chart/Benchmark/AdvancedBenchmarkChart/MultiBit";
import { NeuroSimV3 } from "@/components/Chart/Benchmark/AdvancedBenchmarkChart/NeuroSim";
import { ReconfigurableLogicVersionOne } from "@/components/Chart/Benchmark/AdvancedBenchmarkChart/ReconfigurableLogic";
import {
  SweepEndurance,
  PulseEndurance,
} from "@/components/Chart/Benchmark/StabilityBenchmarkChart/EnduranceCycle";
import {
  SweepRetention,
  PulseRentention,
} from "@/components/Chart/Benchmark/StabilityBenchmarkChart/RetentionTime";
import {
  ResistanceOnOffSweep,
  ResistanceOnOffPulse,
  VoltageOnOffPulse,
  VoltageOnOffSweep,
} from "@/components/Chart/Benchmark/StandardBenchmark/OnOffRatio";

import { BenchmarkChart } from "@/types";

export const AdvancedBenchmarkPartOne = () => {
  const gridStyle = {
    "& > :not(style)": { m: 1 },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 300,
    width: "auto",
    m: 1,
  };

  const AdvancedBenchmarkChart: BenchmarkChart[] = [
    {
      chart1: <MultiVoltageLevelSweepIVchart />,
      chart2: <MultiVoltageLevelSweepLogLog />,
      chart3: <SweepEndurance />,
      chart4: <SweepRetention />,
      index: 0,
    },
    {
      chart1: <ResistanceOnOffSweep />,
      chart2: <VoltageOnOffSweep />,
      chart3: <></>,
      chart4: <></>,
      index: 1,
    },
    {
      chart1: <MultiVoltageLevelPulseIVchart />,
      chart2: <MultiVoltageLevelPulseLogLog />,
      chart3: <PulseEndurance />,
      chart4: <PulseRentention />,
      index: 2,
    },
    {
      chart1: <ResistanceOnOffPulse />,
      chart2: <VoltageOnOffPulse />,
      chart3: <></>,
      chart4: <></>,
      index: 3,
    },
    {
      chart1: <MultiCurrentLevelSweepIVchart />,
      chart2: <MultiCurrentLevelSweepLogLog />,
      chart3: <SweepEndurance />,
      chart4: <SweepRetention />,
      index: 4,
    },
    {
      chart1: <ResistanceOnOffSweep />,
      chart2: <VoltageOnOffSweep />,
      chart3: <></>,
      chart4: <></>,
      index: 5,
    },
    {
      chart1: <MultiCurrentLevelPulseIVchart />,
      chart2: <MultiCurrentLevelPulseLogLog />,
      chart3: <PulseEndurance />,
      chart4: <PulseRentention />,
      index: 6,
    },
    {
      chart1: <ResistanceOnOffPulse />,
      chart2: <VoltageOnOffPulse />,
      chart3: <></>,
      chart4: <></>,
      index: 7,
    },
    {
      chart1: <MultiBitVersionOne />,
      chart2: <NeuroSimV3 />,
      chart3: <ReconfigurableLogicVersionOne />,
      chart4: <></>,
      index: 8,
    },
  ];
  return (
    <>
      <Grid item xs={12}>
        <Divider textAlign="left" variant="middle">
          <Typography color="secondary" display="block" variant="h5">
            Advanced Benchmark
          </Typography>
        </Divider>
      </Grid>
      {AdvancedBenchmarkChart.map(
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
