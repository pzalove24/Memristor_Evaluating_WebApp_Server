"use client";

import React, { useEffect, useRef } from "react";
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
} from "@/modules/Chart/Benchmark/AdvancedBenchmarkChart/LogLogIVCurve";
import {
  MultiCurrentLevelPulseIVchart,
  MultiCurrentLevelSweepIVchart,
  MultiVoltageLevelPulseIVchart,
  MultiVoltageLevelSweepIVchart,
} from "@/modules/Chart/Benchmark/AdvancedBenchmarkChart/IVchart";

import { MultiBitVersionOne } from "@/modules/Chart/Benchmark/AdvancedBenchmarkChart/MultiBit";
import { NeuroSimV3 } from "@/modules/Chart/Benchmark/AdvancedBenchmarkChart/NeuroSim";
import { ReconfigurableLogicVersionOne } from "@/modules/Chart/Benchmark/AdvancedBenchmarkChart/ReconfigurableLogic";
import {
  SweepEndurance,
  PulseEndurance,
} from "@/modules/Chart/Benchmark/StabilityBenchmarkChart/EnduranceCycle";
import {
  SweepRetention,
  PulseRentention,
} from "@/modules/Chart/Benchmark/StabilityBenchmarkChart/RetentionTime";
import {
  ResistanceOnOffSweep,
  ResistanceOnOffPulse,
  VoltageOnOffPulse,
  VoltageOnOffSweep,
} from "@/modules/Chart/Benchmark/StandardBenchmark/OnOffRatio";

import {
  BenchmarkChart,
  DialogSelectedAdvancedBenchmarkReviewProps,
} from "@/types";
import CheckeAdvancedBenchmark from "./CheckeAdvancedBenchmark";
import { useFormik } from "formik";
import {
  AdvancedBenchmarkPulseType,
  AdvancedBenchmarkSweepType,
} from "@/types/commandType";
import {
  DefaultBenchmarkChartType,
  DefaultBenchmarkLabel,
} from "@/types/chartType";
import useBenchmarkStore from "@/shared/benchmarkStore";
import ScatterBenchmarkChart from "@/components/charts/ScatterBenchmarkChart";
import CheckedAdvancedBenchmark from "./CheckeAdvancedBenchmark";

export type TAdvancedBenchmarkType = {
  advancedBenchmarkPulse: DefaultBenchmarkChartType[];
  advancedBenchmarkSweep: DefaultBenchmarkChartType[];
};

const advancedBenchmarkPulseData: DefaultBenchmarkChartType[] = [
  {
    title: "MultiCurrentLevelPulseIVchart",
    xTitle: "voltage (V)",
    yTitle: "current (uA)",
    label: DefaultBenchmarkLabel.AdvancedBenchmarkPulseChart,
    chartTag: false,
    tag: AdvancedBenchmarkPulseType.MULTILEVEL_COMPLIANCE_IVCHARTPULSE_WEB,
  },
  {
    title: "MultiVoltageLevelPulseIVchart",
    xTitle: "voltage (V)",
    yTitle: "current (uA)",
    label: DefaultBenchmarkLabel.AdvancedBenchmarkPulseChart,
    chartTag: false,
    tag: AdvancedBenchmarkPulseType.MULTILEVEL_VOLTAGE_IVCHARTPULSE_WEB,
  },
];

const advancedBenchmarkSweepData: DefaultBenchmarkChartType[] = [
  {
    title: "MultiCurrentLevelSweepIVchart",
    xTitle: "voltage (V)",
    yTitle: "current (uA)",
    label: DefaultBenchmarkLabel.AdvancedBenchmarkSweepChart,
    chartTag: false,
    tag: AdvancedBenchmarkSweepType.MULTILEVEL_COMPLIANCE_IVCHARTSWEEP_WEB,
  },
  {
    title: "MultiVoltageLevelSweepIVchart",
    xTitle: "voltage (V)",
    yTitle: "current (uA)",
    label: DefaultBenchmarkLabel.AdvancedBenchmarkSweepChart,
    chartTag: false,
    tag: AdvancedBenchmarkSweepType.MULTILEVEL_VOLTAGE_IVCHARTSWEEP_WEB,
  },
];

export const AdvancedBenchmarkPartOne = ({
  BenchmarkReviewData,
}: DialogSelectedAdvancedBenchmarkReviewProps) => {
  //Benchmark Selection handlestate

  // const [
  //   checkedAdvancedBenchmarkSelections,
  //   setCheckedAdvancedBenchmarkSelections,
  // ] = React.useState({
  //   MultiVoltageLevelSweep: [
  //     { MultiVoltageLevelSweepIVchart: false },
  //     { MultiVoltageLevelSweepLogLog: false },
  //     { SweepEndurance: false },
  //     { SweepRetention: false },
  //     { ResistanceOnOffSweep: false },
  //     { VoltageOnOffSweep: false },
  //   ],
  //   MultiVoltageLevelPulse: [
  //     { MultiVoltageLevelPulseIVchart: false },
  //     { MultiVoltageLevelPulseLogLog: false },
  //     { PulseEndurance: false },
  //     { PulseRentention: false },
  //     { ResistanceOnOffPulse: false },
  //     { VoltageOnOffPulse: false },
  //   ],
  //   MultiCurrentLevelSweep: [
  //     { MultiCurrentLevelSweepIVchart: false },
  //     { MultiCurrentLevelSweepLogLog: false },
  //     { SweepEndurance: false },
  //     { SweepRetention: false },
  //     { ResistanceOnOffSweep: false },
  //     { VoltageOnOffSweep: false },
  //   ],
  //   MultiCurrentLevelPulse: [
  //     { MultiCurrentLevelPulseIVchart: false },
  //     { MultiCurrentLevelPulseLogLog: false },
  //     { PulseEndurance: false },
  //     { PulseRentention: false },
  //     { ResistanceOnOffPulse: false },
  //     { VoltageOnOffPulse: false },
  //   ],
  //   AdditionalAdvancedBenchmark: [
  //     { MultiBitVersionOne: false },
  //     { NeuroSimV3: false },
  //     { ReconfigurableLogicVersionOne: false },
  //   ],
  // });

  // const handleChangeChildren = (
  //   event: React.ChangeEvent<HTMLInputElement>,
  //   groupChart: string,
  //   index: number
  // ) => {
  //   const checkedChartName = event.target.name;
  //   const checkedChart = event.target.checked;

  //   setCheckedAdvancedBenchmarkSelections((prevChecked: any) => ({
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

  //   setCheckedAdvancedBenchmarkSelections((prevChecked: any) => ({
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
    m: 1,
  };

  // const AdvancedBenchmarkChart: BenchmarkChart[] = [
  //   {
  //     chart1: <MultiVoltageLevelSweepIVchart />,
  //     chart2: <MultiVoltageLevelSweepLogLog />,
  //     chart3: <SweepEndurance />,
  //     chart4: <SweepRetention />,
  //     checkedChart1:
  //       checkedAdvancedBenchmarkSelections.MultiVoltageLevelSweep[0]
  //         .MultiVoltageLevelSweepIVchart,
  //     checkedChart2:
  //       checkedAdvancedBenchmarkSelections.MultiVoltageLevelSweep[1]
  //         .MultiVoltageLevelSweepLogLog,
  //     checkedChart3:
  //       checkedAdvancedBenchmarkSelections.MultiVoltageLevelSweep[2]
  //         .SweepEndurance,
  //     checkedChart4:
  //       checkedAdvancedBenchmarkSelections.MultiVoltageLevelSweep[3]
  //         .SweepRetention,
  //     index: 0,
  //   },
  //   {
  //     chart1: <ResistanceOnOffSweep />,
  //     chart2: <VoltageOnOffSweep />,
  //     checkedChart1:
  //       checkedAdvancedBenchmarkSelections.MultiVoltageLevelSweep[4]
  //         .ResistanceOnOffSweep,
  //     checkedChart2:
  //       checkedAdvancedBenchmarkSelections.MultiVoltageLevelSweep[5]
  //         .VoltageOnOffSweep,
  //     index: 1,
  //   },
  //   {
  //     chart1: <MultiVoltageLevelPulseIVchart />,
  //     chart2: <MultiVoltageLevelPulseLogLog />,
  //     chart3: <PulseEndurance />,
  //     chart4: <PulseRentention />,
  //     checkedChart1:
  //       checkedAdvancedBenchmarkSelections.MultiVoltageLevelPulse[0]
  //         .MultiVoltageLevelPulseIVchart,
  //     checkedChart2:
  //       checkedAdvancedBenchmarkSelections.MultiVoltageLevelPulse[1]
  //         .MultiVoltageLevelPulseLogLog,
  //     checkedChart3:
  //       checkedAdvancedBenchmarkSelections.MultiVoltageLevelPulse[2]
  //         .PulseEndurance,
  //     checkedChart4:
  //       checkedAdvancedBenchmarkSelections.MultiVoltageLevelPulse[3]
  //         .PulseRentention,
  //     index: 2,
  //   },
  //   {
  //     chart1: <ResistanceOnOffPulse />,
  //     chart2: <VoltageOnOffPulse />,
  //     checkedChart1:
  //       checkedAdvancedBenchmarkSelections.MultiVoltageLevelPulse[4]
  //         .ResistanceOnOffPulse,
  //     checkedChart2:
  //       checkedAdvancedBenchmarkSelections.MultiVoltageLevelPulse[5]
  //         .VoltageOnOffPulse,
  //     index: 3,
  //   },
  //   {
  //     chart1: <MultiCurrentLevelSweepIVchart />,
  //     chart2: <MultiCurrentLevelSweepLogLog />,
  //     chart3: <SweepEndurance />,
  //     chart4: <SweepRetention />,
  //     checkedChart1:
  //       checkedAdvancedBenchmarkSelections.MultiCurrentLevelSweep[0]
  //         .MultiCurrentLevelSweepIVchart,
  //     checkedChart2:
  //       checkedAdvancedBenchmarkSelections.MultiCurrentLevelSweep[1]
  //         .MultiCurrentLevelSweepLogLog,
  //     checkedChart3:
  //       checkedAdvancedBenchmarkSelections.MultiCurrentLevelSweep[2]
  //         .SweepEndurance,
  //     checkedChart4:
  //       checkedAdvancedBenchmarkSelections.MultiCurrentLevelSweep[3]
  //         .SweepRetention,
  //     index: 4,
  //   },
  //   {
  //     chart1: <ResistanceOnOffSweep />,
  //     chart2: <VoltageOnOffSweep />,
  //     checkedChart1:
  //       checkedAdvancedBenchmarkSelections.MultiCurrentLevelSweep[4]
  //         .ResistanceOnOffSweep,
  //     checkedChart2:
  //       checkedAdvancedBenchmarkSelections.MultiCurrentLevelSweep[5]
  //         .VoltageOnOffSweep,
  //     index: 5,
  //   },
  //   {
  //     chart1: <MultiCurrentLevelPulseIVchart />,
  //     chart2: <MultiCurrentLevelPulseLogLog />,
  //     chart3: <PulseEndurance />,
  //     chart4: <PulseRentention />,
  //     checkedChart1:
  //       checkedAdvancedBenchmarkSelections.MultiCurrentLevelPulse[0]
  //         .MultiCurrentLevelPulseIVchart,
  //     checkedChart2:
  //       checkedAdvancedBenchmarkSelections.MultiCurrentLevelPulse[1]
  //         .MultiCurrentLevelPulseLogLog,
  //     checkedChart3:
  //       checkedAdvancedBenchmarkSelections.MultiCurrentLevelPulse[2]
  //         .PulseEndurance,
  //     checkedChart4:
  //       checkedAdvancedBenchmarkSelections.MultiCurrentLevelPulse[3]
  //         .PulseRentention,
  //     index: 6,
  //   },
  //   {
  //     chart1: <ResistanceOnOffPulse />,
  //     chart2: <VoltageOnOffPulse />,
  //     checkedChart1:
  //       checkedAdvancedBenchmarkSelections.MultiCurrentLevelPulse[4]
  //         .ResistanceOnOffPulse,
  //     checkedChart2:
  //       checkedAdvancedBenchmarkSelections.MultiCurrentLevelPulse[5]
  //         .VoltageOnOffPulse,

  //     index: 7,
  //   },
  //   {
  //     chart1: <MultiBitVersionOne />,
  //     chart2: <NeuroSimV3 />,
  //     chart3: <ReconfigurableLogicVersionOne />,
  //     checkedChart1:
  //       checkedAdvancedBenchmarkSelections.AdditionalAdvancedBenchmark[0]
  //         .MultiBitVersionOne,
  //     checkedChart2:
  //       checkedAdvancedBenchmarkSelections.AdditionalAdvancedBenchmark[1]
  //         .NeuroSimV3,
  //     checkedChart3:
  //       checkedAdvancedBenchmarkSelections.AdditionalAdvancedBenchmark[2]
  //         .ReconfigurableLogicVersionOne,
  //     index: 8,
  //   },
  // ];

  //**ADVANCED_BENCHMARK_FORMIK**\\

  const {
    addAdvancedBenchmarkPulse,
    addAdvancedBenchmarkSweep,
    advancedBenchmarkPulseSelection,
    advancedBenchmarkSweepSelection,
  } = useBenchmarkStore();

  console.log("a-pulse", advancedBenchmarkPulseSelection);
  console.log("a-sweep", advancedBenchmarkSweepSelection);

  const initialAdvancedBenchmarkChartValues: TAdvancedBenchmarkType = {
    advancedBenchmarkPulse: advancedBenchmarkPulseData,
    advancedBenchmarkSweep: advancedBenchmarkSweepData,
  };

  const advancedBenchmarkChartFormik = useFormik({
    initialValues: initialAdvancedBenchmarkChartValues,

    onSubmit: async (values) => {
      const selectedAdvancedBenchmarkPulse = values.advancedBenchmarkPulse
        .filter((selected) => selected.chartTag === true)
        .map((item) => item.tag);
      if (selectedAdvancedBenchmarkPulse) {
        addAdvancedBenchmarkPulse(
          selectedAdvancedBenchmarkPulse as AdvancedBenchmarkPulseType[]
        );
      }

      const selectedAdvancedBenchmarkSweep = values.advancedBenchmarkSweep
        .filter((selected) => selected.chartTag === true)
        .map((item) => item.tag);

      if (selectedAdvancedBenchmarkSweep) {
        addAdvancedBenchmarkSweep(
          selectedAdvancedBenchmarkSweep as AdvancedBenchmarkSweepType[]
        );
      }
    },
  });

  
  const prevValuesRef = useRef(advancedBenchmarkChartFormik.values);

  useEffect(() => {
    // Check if form values have changed
    if (prevValuesRef.current !== advancedBenchmarkChartFormik.values) {
      // Submit the form whenever values change
      advancedBenchmarkChartFormik.submitForm();
    }

    // Update the ref with the current values
    prevValuesRef.current = advancedBenchmarkChartFormik.values;
  }, [advancedBenchmarkChartFormik.values]);

  //**END **\\

  return (
    <>
      <Grid item xs={12}>
        <Accordion defaultExpanded={true}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="Advanced Benchmark-content"
            id="Advanced Benchmark-header"
          >
            <Typography color="secondary" display="block" variant="h5">
              Advanced Benchmark
              {BenchmarkReviewData?.selectedAdvancedBenchmarkViewName &&
                ` for ${BenchmarkReviewData?.selectedAdvancedBenchmarkViewName}`}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CheckedAdvancedBenchmark
              BenchmarkChartFormik={advancedBenchmarkChartFormik}
            />
            <Grid container>
              {advancedBenchmarkChartFormik.values.advancedBenchmarkPulse.map(
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
              {advancedBenchmarkChartFormik.values.advancedBenchmarkSweep.map(
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
          </AccordionDetails>
        </Accordion>
      </Grid>
    </>
  );
};
