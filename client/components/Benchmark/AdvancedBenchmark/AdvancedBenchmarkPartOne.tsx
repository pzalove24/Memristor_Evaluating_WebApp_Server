"use client";

import React from "react";
import {
  Grid,
  Divider,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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

import {
  BenchmarkChart,
  DialogSelectedAdvancedBenchmarkReviewProps,
} from "@/types";
import CheckeAdvancedBenchmark from "./CheckeAdvancedBenchmark";

export const AdvancedBenchmarkPartOne = ({
  BenchmarkReviewData,
}: DialogSelectedAdvancedBenchmarkReviewProps) => {
  //Benchmark Selection handlestate

  const [
    checkedAdvancedBenchmarkSelections,
    setCheckedAdvancedBenchmarkSelections,
  ] = React.useState({
    MultiVoltageLevelSweep: [
      { MultiVoltageLevelSweepIVchart: false },
      { MultiVoltageLevelSweepLogLog: false },
      { SweepEndurance: false },
      { SweepRetention: false },
      { ResistanceOnOffSweep: false },
      { VoltageOnOffSweep: false },
    ],
    MultiVoltageLevelPulse: [
      { MultiVoltageLevelPulseIVchart: false },
      { MultiVoltageLevelPulseLogLog: false },
      { PulseEndurance: false },
      { PulseRentention: false },
      { ResistanceOnOffPulse: false },
      { VoltageOnOffPulse: false },
    ],
    MultiCurrentLevelSweep: [
      { MultiCurrentLevelSweepIVchart: false },
      { MultiCurrentLevelSweepLogLog: false },
      { SweepEndurance: false },
      { SweepRetention: false },
      { ResistanceOnOffSweep: false },
      { VoltageOnOffSweep: false },
    ],
    MultiCurrentLevelPulse: [
      { MultiCurrentLevelPulseIVchart: false },
      { MultiCurrentLevelPulseLogLog: false },
      { PulseEndurance: false },
      { PulseRentention: false },
      { ResistanceOnOffPulse: false },
      { VoltageOnOffPulse: false },
    ],
    AdditionalAdvancedBenchmark: [
      { MultiBitVersionOne: false },
      { NeuroSimV3: false },
      { ReconfigurableLogicVersionOne: false },
    ],
  });

  const handleChangeChildren = (
    event: React.ChangeEvent<HTMLInputElement>,
    groupChart: string,
    index: number
  ) => {
    const checkedChartName = event.target.name;
    const checkedChart = event.target.checked;

    setCheckedAdvancedBenchmarkSelections((prevChecked: any) => ({
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

    setCheckedAdvancedBenchmarkSelections((prevChecked: any) => ({
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

  const AdvancedBenchmarkChart: BenchmarkChart[] = [
    {
      chart1: <MultiVoltageLevelSweepIVchart />,
      chart2: <MultiVoltageLevelSweepLogLog />,
      chart3: <SweepEndurance />,
      chart4: <SweepRetention />,
      checkedChart1:
        checkedAdvancedBenchmarkSelections.MultiVoltageLevelSweep[0]
          .MultiVoltageLevelSweepIVchart,
      checkedChart2:
        checkedAdvancedBenchmarkSelections.MultiVoltageLevelSweep[1]
          .MultiVoltageLevelSweepLogLog,
      checkedChart3:
        checkedAdvancedBenchmarkSelections.MultiVoltageLevelSweep[2]
          .SweepEndurance,
      checkedChart4:
        checkedAdvancedBenchmarkSelections.MultiVoltageLevelSweep[3]
          .SweepRetention,
      index: 0,
    },
    {
      chart1: <ResistanceOnOffSweep />,
      chart2: <VoltageOnOffSweep />,
      checkedChart1:
        checkedAdvancedBenchmarkSelections.MultiVoltageLevelSweep[4]
          .ResistanceOnOffSweep,
      checkedChart2:
        checkedAdvancedBenchmarkSelections.MultiVoltageLevelSweep[5]
          .VoltageOnOffSweep,
      index: 1,
    },
    {
      chart1: <MultiVoltageLevelPulseIVchart />,
      chart2: <MultiVoltageLevelPulseLogLog />,
      chart3: <PulseEndurance />,
      chart4: <PulseRentention />,
      checkedChart1:
        checkedAdvancedBenchmarkSelections.MultiVoltageLevelPulse[0]
          .MultiVoltageLevelPulseIVchart,
      checkedChart2:
        checkedAdvancedBenchmarkSelections.MultiVoltageLevelPulse[1]
          .MultiVoltageLevelPulseLogLog,
      checkedChart3:
        checkedAdvancedBenchmarkSelections.MultiVoltageLevelPulse[2]
          .PulseEndurance,
      checkedChart4:
        checkedAdvancedBenchmarkSelections.MultiVoltageLevelPulse[3]
          .PulseRentention,
      index: 2,
    },
    {
      chart1: <ResistanceOnOffPulse />,
      chart2: <VoltageOnOffPulse />,
      checkedChart1:
        checkedAdvancedBenchmarkSelections.MultiVoltageLevelPulse[4]
          .ResistanceOnOffPulse,
      checkedChart2:
        checkedAdvancedBenchmarkSelections.MultiVoltageLevelPulse[5]
          .VoltageOnOffPulse,
      index: 3,
    },
    {
      chart1: <MultiCurrentLevelSweepIVchart />,
      chart2: <MultiCurrentLevelSweepLogLog />,
      chart3: <SweepEndurance />,
      chart4: <SweepRetention />,
      checkedChart1:
        checkedAdvancedBenchmarkSelections.MultiCurrentLevelSweep[0]
          .MultiCurrentLevelSweepIVchart,
      checkedChart2:
        checkedAdvancedBenchmarkSelections.MultiCurrentLevelSweep[1]
          .MultiCurrentLevelSweepLogLog,
      checkedChart3:
        checkedAdvancedBenchmarkSelections.MultiCurrentLevelSweep[2]
          .SweepEndurance,
      checkedChart4:
        checkedAdvancedBenchmarkSelections.MultiCurrentLevelSweep[3]
          .SweepRetention,
      index: 4,
    },
    {
      chart1: <ResistanceOnOffSweep />,
      chart2: <VoltageOnOffSweep />,
      checkedChart1:
        checkedAdvancedBenchmarkSelections.MultiCurrentLevelSweep[4]
          .ResistanceOnOffSweep,
      checkedChart2:
        checkedAdvancedBenchmarkSelections.MultiCurrentLevelSweep[5]
          .VoltageOnOffSweep,
      index: 5,
    },
    {
      chart1: <MultiCurrentLevelPulseIVchart />,
      chart2: <MultiCurrentLevelPulseLogLog />,
      chart3: <PulseEndurance />,
      chart4: <PulseRentention />,
      checkedChart1:
        checkedAdvancedBenchmarkSelections.MultiCurrentLevelPulse[0]
          .MultiCurrentLevelPulseIVchart,
      checkedChart2:
        checkedAdvancedBenchmarkSelections.MultiCurrentLevelPulse[1]
          .MultiCurrentLevelPulseLogLog,
      checkedChart3:
        checkedAdvancedBenchmarkSelections.MultiCurrentLevelPulse[2]
          .PulseEndurance,
      checkedChart4:
        checkedAdvancedBenchmarkSelections.MultiCurrentLevelPulse[3]
          .PulseRentention,
      index: 6,
    },
    {
      chart1: <ResistanceOnOffPulse />,
      chart2: <VoltageOnOffPulse />,
      checkedChart1:
        checkedAdvancedBenchmarkSelections.MultiCurrentLevelPulse[4]
          .ResistanceOnOffPulse,
      checkedChart2:
        checkedAdvancedBenchmarkSelections.MultiCurrentLevelPulse[5]
          .VoltageOnOffPulse,

      index: 7,
    },
    {
      chart1: <MultiBitVersionOne />,
      chart2: <NeuroSimV3 />,
      chart3: <ReconfigurableLogicVersionOne />,
      checkedChart1:
        checkedAdvancedBenchmarkSelections.AdditionalAdvancedBenchmark[0]
          .MultiBitVersionOne,
      checkedChart2:
        checkedAdvancedBenchmarkSelections.AdditionalAdvancedBenchmark[1]
          .NeuroSimV3,
      checkedChart3:
        checkedAdvancedBenchmarkSelections.AdditionalAdvancedBenchmark[2]
          .ReconfigurableLogicVersionOne,
      index: 8,
    },
  ];
  return (
    <>
      <Grid item xs={12}>
        <Accordion defaultExpanded={true}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography color="secondary" display="block" variant="h5">
              Advanced Benchmark{" "}
              {BenchmarkReviewData?.selectedAdvancedBenchmarkViewName &&
                ` for ${BenchmarkReviewData?.selectedAdvancedBenchmarkViewName}`}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CheckeAdvancedBenchmark
              BenchmarkSelections={checkedAdvancedBenchmarkSelections}
              handleChangeChildren={handleChangeChildren}
              handleChangeAllChildren={handleChangeAllChildren}
            />
            {AdvancedBenchmarkChart.map(
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
