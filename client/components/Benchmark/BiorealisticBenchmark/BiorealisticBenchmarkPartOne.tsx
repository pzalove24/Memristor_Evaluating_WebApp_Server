import React from "react";
import { Box, Grid, Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import {
  ChartIPSC_EPSC,
  PairPulse,
  ChartSTDP,
} from "@/components/Chart/Benchmark/BiorealisticBenchmarkChart/BiorealisticProps";
import { CurrentUnderDifferentPulseNumberWidth } from "@/components/Chart/Benchmark/BiorealisticBenchmarkChart/CurrentUnderDifferentPulseNumberWidth";
import { BenchmarkChart } from "@/types";

export const BiorealisticBenchmarkPartOne = () => {
  const gridStyle = {
    "& > :not(style)": { m: 1 },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 300,
    width: "auto",
    m: 1,
  };

  const BiorealisticBenchmarkChart: BenchmarkChart[] = [
    {
      chart1: <ChartSTDP />,
      chart2: <PairPulse />,
      chart3: <ChartIPSC_EPSC />,
      chart4: <CurrentUnderDifferentPulseNumberWidth />,
      index: 0,
    },
  ];

  return (
    <>
      <Grid item xs={12}>
        <Divider textAlign="left" variant="middle">
          <Typography color="secondary" display="block" variant="h5">
            Biorealistic Benchmark
          </Typography>
        </Divider>
      </Grid>
      {BiorealisticBenchmarkChart.map(
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
