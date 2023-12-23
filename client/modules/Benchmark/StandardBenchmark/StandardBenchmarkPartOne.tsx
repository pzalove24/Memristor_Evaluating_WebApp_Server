"use client";

import React from "react";
import {
  Box,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import {
  PulseIVchart,
  SweepIVchart,
} from "@/modules/Chart/Benchmark/StandardBenchmark/IVchart";
import {
  PulseLogLog,
  SweepLogLog,
} from "@/modules/Chart/Benchmark/StandardBenchmark/LogLogIVCurve";
import {
  CumuResistancePulseType,
  CumuResistanceSweepType,
  CumuVoltagePulseType,
  CumuVoltageSweepType,
} from "@/modules/Chart/Benchmark/StandardBenchmark/CumulativeProbability";
import {
  DistributeResistancePulseType,
  DistributeResistanceSweepType,
  DistributeVoltagePulseType,
  DistributeVoltageSweepType,
} from "@/modules/Chart/Benchmark/StandardBenchmark/DistributionSetReset";
import {
  ResistanceOnOffPulse,
  ResistanceOnOffSweep,
  VoltageOnOffPulse,
  VoltageOnOffSweep,
} from "@/modules/Chart/Benchmark/StandardBenchmark/OnOffRatio";
import { ConductancePulseTime } from "@/modules/Chart/Benchmark/StandardBenchmark/ConductancePulseTimeChart";
import {
  BenchmarkChart,
  DialogSelectedStandardBenchmarkReviewProps,
} from "@/types";
import ScatterBenchmarkChart from "@/components/charts/ScatterBenchmarkChart";
import { useFormik } from "formik";
import {
  DefaultBenchmarkChartType,
  DefaultBenchmarkLabel,
} from "@/types/chartType";
import {
  StandardBenchmarkPulseType,
  StandardBenchmarkSweepType,
} from "@/types/commandType";
import CheckedStandardBenchmark from "./CheckedStandardBenchmark";

export type TStandardBenchmarkType = {
  standardBenchmarkPulse: DefaultBenchmarkChartType[];
  standardBenchmarkSweep: DefaultBenchmarkChartType[];
};

const standardBenchmarkPulseData: DefaultBenchmarkChartType[] = [
  {
    title: "PulseIVchart",
    xTitle: "voltage (V)",
    yTitle: "current (uA)",
    label: DefaultBenchmarkLabel.StandardBenchmarkPulseChart,
    chartTag: false,
    tag: StandardBenchmarkPulseType.IVCHARTPULSE_WEB,
  },
  {
    title: "PulseLogLog",
    xTitle: "",
    yTitle: "",
    label: DefaultBenchmarkLabel.StandardBenchmarkPulseChart,
    chartTag: false,
    tag: StandardBenchmarkPulseType.LOGLOGPULSE_WEB,
  },
  {
    title: "CumuResistancePulseType",
    xTitle: "",
    yTitle: "",
    label: DefaultBenchmarkLabel.StandardBenchmarkPulseChart,
    chartTag: false,
    tag: StandardBenchmarkPulseType.CUMULATIVEPULSE_R_WEB,
  },
  {
    title: "DistributeResistancePulseType",
    xTitle: "",
    yTitle: "",
    label: DefaultBenchmarkLabel.StandardBenchmarkPulseChart,
    chartTag: false,
    tag: StandardBenchmarkPulseType.DISTRIBUTIONPULSE_R_WEB,
  },
  {
    title: "CumuVoltagePulseType",
    xTitle: "",
    yTitle: "",
    label: DefaultBenchmarkLabel.StandardBenchmarkPulseChart,
    chartTag: false,
    tag: StandardBenchmarkPulseType.CUMULATIVEPULSE_V_WEB,
  },
  {
    title: "DistributeVoltagePulseType",
    xTitle: "",
    yTitle: "",
    label: DefaultBenchmarkLabel.StandardBenchmarkPulseChart,
    chartTag: false,
    tag: StandardBenchmarkPulseType.DISTRIBUTIONPULSE_V_WEB,
  },
  {
    title: "ResistanceOnOffPulse",
    xTitle: "",
    yTitle: "",
    label: DefaultBenchmarkLabel.StandardBenchmarkPulseChart,
    chartTag: false,
    tag: StandardBenchmarkPulseType.ONOFFPULSE_R_WEB,
  },
  {
    title: "VoltageOnOffPulse",
    xTitle: "",
    yTitle: "",
    label: DefaultBenchmarkLabel.StandardBenchmarkPulseChart,
    chartTag: false,
    tag: StandardBenchmarkPulseType.ONOFFPULSE_V_WEB,
  },
];

const standardBenchmarkSweepData: DefaultBenchmarkChartType[] = [
  {
    title: "SweepIVchart",
    xTitle: "voltage (V)",
    yTitle: "current (uA)",
    label: DefaultBenchmarkLabel.StandardBenchmarkSweepChart,
    chartTag: false,
    tag: StandardBenchmarkSweepType.IVCHARTSWEEP_WEB,
  },
  {
    title: "SweepLogLog",
    xTitle: "",
    yTitle: "",
    label: DefaultBenchmarkLabel.StandardBenchmarkSweepChart,
    chartTag: false,
    tag: StandardBenchmarkSweepType.LOGLOGSWEEP_WEB,
  },
  {
    title: "CumuResistanceSweepType",
    xTitle: "",
    yTitle: "",
    label: DefaultBenchmarkLabel.StandardBenchmarkSweepChart,
    chartTag: false,
    tag: StandardBenchmarkSweepType.CUMULATIVESWEEP_R_WEB,
  },
  {
    title: "DistributeResistanceSweepType",
    xTitle: "",
    yTitle: "",
    label: DefaultBenchmarkLabel.StandardBenchmarkSweepChart,
    chartTag: false,
    tag: StandardBenchmarkSweepType.DISTRIBUTIONSWEEP_R_WEB,
  },
  {
    title: "CumuVoltageSweepType",
    xTitle: "",
    yTitle: "",
    label: DefaultBenchmarkLabel.StandardBenchmarkSweepChart,
    chartTag: false,
    tag: StandardBenchmarkSweepType.CUMULATIVESWEEP_V_WEB,
  },
  {
    title: "DistributeVoltageSweepType",
    xTitle: "",
    yTitle: "",
    label: DefaultBenchmarkLabel.StandardBenchmarkSweepChart,
    chartTag: false,
    tag: StandardBenchmarkSweepType.DISTRIBUTIONSWEEP_V_WEB,
  },
  {
    title: "ResistanceOnOffSweep",
    xTitle: "",
    yTitle: "",
    label: DefaultBenchmarkLabel.StandardBenchmarkSweepChart,
    chartTag: false,
    tag: StandardBenchmarkSweepType.ONOFFSWEEP_R_WEB,
  },
  {
    title: "VoltageOnOffSweep",
    xTitle: "",
    yTitle: "",
    label: DefaultBenchmarkLabel.StandardBenchmarkSweepChart,
    chartTag: false,
    tag: StandardBenchmarkSweepType.ONOFFSWEEP_V_WEB,
  },
];

export const StandardBenchmarkPartOne = ({
  BenchmarkReviewData,
}: DialogSelectedStandardBenchmarkReviewProps) => {
  //Benchmark Selection handlestate
  // const [
  //   checkedStandardBenchmarkSelections,
  //   setCheckedStandardBenchmarkSelections,
  // ] = React.useState({
  //   SweepVoltage: [
  //     { SweepIVchart: false },
  //     { SweepLogLog: false },
  //     { CumuResistanceSweepType: false },
  //     { DistributeResistanceSweepType: false },
  //     { CumuVoltageSweepType: false },
  //     { DistributeVoltageSweepType: false },
  //     { ResistanceOnOffSweep: false },
  //     { VoltageOnOffSweep: false },
  //   ],
  //   PulseVoltage: [
  //     { PulseIVchart: false },
  //     { PulseLogLog: false },
  //     { CumuResistancePulseType: false },
  //     { DistributeResistancePulseType: false },
  //     { CumuVoltagePulseType: false },
  //     { DistributeVoltagePulseType: false },
  //     { ResistanceOnOffPulse: false },
  //     { VoltageOnOffPulse: false },
  //   ],
  //   AdditionalBenchmark: [{ ConductancePulseTime: false }],
  // });

  // const handleChangeChildren = (
  //   event: React.ChangeEvent<HTMLInputElement>,
  //   groupChart: string,
  //   index: number
  // ) => {
  //   const checkedChartName = event.target.name;
  //   const checkedChart = event.target.checked;

  //   setCheckedStandardBenchmarkSelections((prevChecked: any) => ({
  //     ...prevChecked,
  //     [groupChart]: prevChecked[groupChart].map((item: any, i: any) =>
  //       i === index ? { ...item, [checkedChartName]: checkedChart } : item
  //     ),
  //   }));
  // };

  // const handleChangeAllChildren = (
  //   event: React.ChangeEvent<HTMLInputElement>,
  //   groupChart: string
  // ) => {
  //   const checkedChart = event.target.checked;

  //   setCheckedStandardBenchmarkSelections((prevChecked: any) => ({
  //     ...prevChecked,
  //     [groupChart]: prevChecked[groupChart].map((item: any) => ({
  //       ...item,
  //       [Object.keys(item)[0]]: checkedChart,
  //     })),
  //   }));
  // };

  const gridStyle = {
    "& > :not(style)": { m: 1 },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 300,
    width: "auto",
  };

  // const StandardBenchmarkChart: BenchmarkChart[] = [
  //   {
  //     // chart1: <SweepIVchart />,
  //     chart1: (
  //       <ScatterBenchmarkChart
  //         title="SweepIVchart"
  //         xTitle="voltage (V)"
  //         yTitle="current (uA)"
  //       />
  //     ),
  //     chart2: <SweepLogLog />,
  //     chart3: <CumuResistanceSweepType />,
  //     chart4: <DistributeResistanceSweepType />,
  //     checkedChart1:
  //       checkedStandardBenchmarkSelections.SweepVoltage[0].SweepIVchart,
  //     checkedChart2:
  //       checkedStandardBenchmarkSelections.SweepVoltage[1].SweepLogLog,
  //     checkedChart3:
  //       checkedStandardBenchmarkSelections.SweepVoltage[2]
  //         .CumuResistanceSweepType,
  //     checkedChart4:
  //       checkedStandardBenchmarkSelections.SweepVoltage[3]
  //         .DistributeResistanceSweepType,
  //     index: 0,
  //   },
  //   {
  //     chart1: <CumuVoltageSweepType />,
  //     chart2: <DistributeVoltageSweepType />,
  //     chart3: <ResistanceOnOffSweep />,
  //     chart4: <VoltageOnOffSweep />,
  //     checkedChart1:
  //       checkedStandardBenchmarkSelections.SweepVoltage[4].CumuVoltageSweepType,
  //     checkedChart2:
  //       checkedStandardBenchmarkSelections.SweepVoltage[5]
  //         .DistributeVoltageSweepType,
  //     checkedChart3:
  //       checkedStandardBenchmarkSelections.SweepVoltage[6].ResistanceOnOffSweep,
  //     checkedChart4:
  //       checkedStandardBenchmarkSelections.SweepVoltage[7].VoltageOnOffSweep,
  //     index: 1,
  //   },
  //   {
  //     chart1: <PulseIVchart />,
  //     chart2: <PulseLogLog />,
  //     chart3: <CumuResistancePulseType />,
  //     chart4: <DistributeResistancePulseType />,
  //     checkedChart1:
  //       checkedStandardBenchmarkSelections.PulseVoltage[0].PulseIVchart,
  //     checkedChart2:
  //       checkedStandardBenchmarkSelections.PulseVoltage[1].PulseLogLog,
  //     checkedChart3:
  //       checkedStandardBenchmarkSelections.PulseVoltage[2]
  //         .CumuResistancePulseType,
  //     checkedChart4:
  //       checkedStandardBenchmarkSelections.PulseVoltage[3]
  //         .DistributeResistancePulseType,
  //     index: 2,
  //   },
  //   {
  //     chart1: <CumuVoltagePulseType />,
  //     chart2: <DistributeVoltagePulseType />,
  //     chart3: <ResistanceOnOffPulse />,
  //     chart4: <VoltageOnOffPulse />,
  //     checkedChart1:
  //       checkedStandardBenchmarkSelections.PulseVoltage[4].CumuVoltagePulseType,
  //     checkedChart2:
  //       checkedStandardBenchmarkSelections.PulseVoltage[5]
  //         .DistributeVoltagePulseType,
  //     checkedChart3:
  //       checkedStandardBenchmarkSelections.PulseVoltage[6].ResistanceOnOffPulse,
  //     checkedChart4:
  //       checkedStandardBenchmarkSelections.PulseVoltage[7].VoltageOnOffPulse,
  //     index: 3,
  //   },
  //   {
  //     chart1: <ConductancePulseTime />,
  //     checkedChart1:
  //       checkedStandardBenchmarkSelections.AdditionalBenchmark[0]
  //         .ConductancePulseTime,
  //     index: 4,
  //   },
  // ];

  //**STANDARD_BENCHMARK_FORMIK**\\

  const initialStandardBenchmarkChartValues: TStandardBenchmarkType = {
    standardBenchmarkPulse: standardBenchmarkPulseData,
    standardBenchmarkSweep: standardBenchmarkSweepData,
  };

  const standardBenchmarkChartFormik = useFormik({
    initialValues: initialStandardBenchmarkChartValues,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  //**END**\\

  return (
    <>
      <Grid item xs={12}>
        <Accordion defaultExpanded={true}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="Standard Benchmark-content"
            id="Standard Benchmark-header"
          >
            <Typography color="secondary" display="block" variant="h5">
              Standard Benchmark
              {BenchmarkReviewData?.selectedStandardBenchmarkViewName &&
                ` for ${BenchmarkReviewData?.selectedStandardBenchmarkViewName}`}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CheckedStandardBenchmark
              BenchmarkChartFormik={standardBenchmarkChartFormik}
            />
            <Grid container>
              {standardBenchmarkChartFormik.values.standardBenchmarkPulse.map(
                (chart: DefaultBenchmarkChartType, index: number) =>
                  chart.chartTag ? (
                    <Grid key={index} item sm={6} md={3} lg={3} xl={3} xs={3}>
                      {chart.chartTag && (
                        <Box sx={gridStyle}>
                          <ScatterBenchmarkChart
                            title={chart.title}
                            xTitle={chart.xTitle}
                            yTitle={chart.yTitle}
                          />
                        </Box>
                      )}
                    </Grid>
                  ) : (
                    <></>
                  )
              )}
              {standardBenchmarkChartFormik.values.standardBenchmarkSweep.map(
                (chart: DefaultBenchmarkChartType, index: number) =>
                  chart.chartTag ? (
                    <Grid key={index} item sm={6} md={3} lg={3} xl={3} xs={3}>
                      {chart.chartTag && (
                        <Box sx={gridStyle}>
                          <ScatterBenchmarkChart
                            title={chart.title}
                            xTitle={chart.xTitle}
                            yTitle={chart.yTitle}
                          />
                        </Box>
                      )}
                    </Grid>
                  ) : (
                    <></>
                  )
              )}
            </Grid>
            {/* {StandardBenchmarkChart.map(
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
            )} */}
          </AccordionDetails>
        </Accordion>
      </Grid>
    </>
  );
};
