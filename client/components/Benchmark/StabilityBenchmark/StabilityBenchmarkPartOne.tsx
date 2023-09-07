"use client";

import React from "react";
import {
  Box,
  Grid,
  Stack,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import ErrorIcon from "@mui/icons-material/Error";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  SweepRetention,
  PulseRentention,
} from "@/components/Chart/Benchmark/StabilityBenchmarkChart/RetentionTime";
import {
  SweepEndurance,
  PulseEndurance,
} from "@/components/Chart/Benchmark/StabilityBenchmarkChart/EnduranceCycle";

import { BenchmarkChart } from "@/types";
import CheckedStabilityBenchmark from "./CheckedStabilityBenchmark";

export const StabilityBenchmarkPartOne = () => {
  //Benchmark Selection handlestate
  const [
    checkedStabilityBenchmarkSelections,
    setCheckedStabilityBenchmarkSelections,
  ] = React.useState({
    SweepVoltage: [{ SweepRetention: false }, { SweepEndurance: false }],
    PulseVoltage: [{ PulseRentention: false }, { PulseEndurance: false }],
  });

  const handleChangeChildren = (
    event: React.ChangeEvent<HTMLInputElement>,
    groupChart: string,
    index: number
  ) => {
    const checkedChartName = event.target.name;
    const checkedChart = event.target.checked;

    setCheckedStabilityBenchmarkSelections((prevChecked: any) => ({
      ...prevChecked,
      [groupChart]: prevChecked[groupChart].map((item: any, i: any) =>
        i === index ? { ...item, [checkedChartName]: checkedChart } : item
      ),
    }));
  };

  const handleChangeAllChildren = (
    event: React.ChangeEvent<HTMLInputElement>,
    groupChart: string
  ) => {
    const checkedChart = event.target.checked;

    setCheckedStabilityBenchmarkSelections((prevChecked: any) => ({
      ...prevChecked,
      [groupChart]: prevChecked[groupChart].map((item: any) => ({
        ...item,
        [Object.keys(item)[0]]: checkedChart,
      })),
    }));
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

  const StabilityBenchmarkChart: BenchmarkChart[] = [
    {
      chart1: <SweepRetention />,
      chart2: <SweepEndurance />,
      chart3: <PulseRentention />,
      chart4: <PulseEndurance />,
      checkedChart1:
        checkedStabilityBenchmarkSelections.SweepVoltage[0].SweepRetention,
      checkedChart2:
        checkedStabilityBenchmarkSelections.SweepVoltage[1].SweepEndurance,
      checkedChart3:
        checkedStabilityBenchmarkSelections.PulseVoltage[0].PulseRentention,
      checkedChart4:
        checkedStabilityBenchmarkSelections.PulseVoltage[1].PulseEndurance,
      index: 0,
    },
  ];
  return (
    <>
      <Grid item xs={12}>
        <Accordion defaultExpanded={true}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="Stability Benchmark-content"
            id="Stability Benchmark-header"
          >
            <Stack direction={"row"} spacing={5} alignItems={"center"}>
              <Typography color="secondary" display="block" variant="h5">
                Stability Benchmark
              </Typography>
              <Chip
                color="error"
                label="ATTENTION: DAMAGE DEVICE"
                icon={<ErrorIcon />}
              />
            </Stack>
          </AccordionSummary>
          <AccordionDetails>
            <CheckedStabilityBenchmark
              BenchmarkSelections={checkedStabilityBenchmarkSelections}
              handleChangeChildren={handleChangeChildren}
              handleChangeAllChildren={handleChangeAllChildren}
            />
            {StabilityBenchmarkChart.map(
              ({
                chart1,
                chart2,
                chart3,
                chart4,
                checkedChart1,
                checkedChart2,
                checkedChart3,
                checkedChart4,
                index,
              }) => (
                <Grid key={index} container>
                  {checkedChart1 && (
                    <Grid item sm={6} md={3} lg={3} xl={3} xs>
                      <Box sx={gridStyle}>{chart1}</Box>
                    </Grid>
                  )}
                  {checkedChart2 && (
                    <Grid item sm={6} md={3} lg={3} xl={3} xs>
                      <Box sx={gridStyle}>{chart2}</Box>
                    </Grid>
                  )}
                  {checkedChart3 && (
                    <Grid item sm={6} md={3} lg={3} xl={3} xs>
                      <Box sx={gridStyle}>{chart3}</Box>
                    </Grid>
                  )}
                  {checkedChart4 && (
                    <Grid item sm={6} md={3} lg={3} xl={3} xs>
                      <Box sx={gridStyle}>{chart4}</Box>
                    </Grid>
                  )}
                </Grid>
              )
            )}
          </AccordionDetails>
        </Accordion>
      </Grid>
    </>
  );
};
