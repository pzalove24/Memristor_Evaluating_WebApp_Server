"use client"

import React from "react";
import {
  Box,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  ChartIPSC_EPSC,
  PairPulse,
  ChartSTDP,
} from "@/components/Chart/Benchmark/BiorealisticBenchmarkChart/BiorealisticProps";
import { CurrentUnderDifferentPulseNumberWidth } from "@/components/Chart/Benchmark/BiorealisticBenchmarkChart/CurrentUnderDifferentPulseNumberWidth";
import { BenchmarkChart } from "@/types";
import CheckedBiorealisticBenchmark from "./CheckedBiorealisticBenchmark";

export const BiorealisticBenchmarkPartOne = () => {
  //Benchmark Selection handlestate

  const [
    checkedBiorealisticBenchmarkSelections,
    setCheckedBiorealisticBenchmarkSelections,
  ] = React.useState({
    BiologicalNeuron: [
      { ChartSTDP: false },
      { PairPulse: false },
      { ChartIPSC_EPSC: false },
    ],
    BiologicalSynapse: [{ CurrentUnderDifferentPulseNumberWidth: false }],
  });

  const handleChangeChildren = (
    event: React.ChangeEvent<HTMLInputElement>,
    groupChart: string,
    index: number
  ) => {
    const checkedChartName = event.target.name;
    const checkedChart = event.target.checked;

    setCheckedBiorealisticBenchmarkSelections((prevChecked: any) => ({
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

    setCheckedBiorealisticBenchmarkSelections((prevChecked: any) => ({
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

  const BiorealisticBenchmarkChart: BenchmarkChart[] = [
    {
      chart1: <ChartSTDP />,
      chart2: <PairPulse />,
      chart3: <ChartIPSC_EPSC />,
      chart4: <CurrentUnderDifferentPulseNumberWidth />,
      checkedChart1:
        checkedBiorealisticBenchmarkSelections.BiologicalNeuron[0].ChartSTDP,
      checkedChart2:
        checkedBiorealisticBenchmarkSelections.BiologicalNeuron[1].PairPulse,
      checkedChart3:
        checkedBiorealisticBenchmarkSelections.BiologicalNeuron[2]
          .ChartIPSC_EPSC,
      checkedChart4:
        checkedBiorealisticBenchmarkSelections.BiologicalSynapse[0]
          .CurrentUnderDifferentPulseNumberWidth,
    },
  ];

  return (
    <>
      <Grid item xs={12}>
        <Accordion defaultExpanded={true}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="Biorealistic Benchmark-content"
            id="Biorealistic Benchmark-header"
          >
            <Typography color="secondary" display="block" variant="h5">
              Biorealistic Benchmark
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CheckedBiorealisticBenchmark
              BenchmarkSelections={checkedBiorealisticBenchmarkSelections}
              handleChangeChildren={handleChangeChildren}
              handleChangeAllChildren={handleChangeAllChildren}
            />
            {BiorealisticBenchmarkChart.map(
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
