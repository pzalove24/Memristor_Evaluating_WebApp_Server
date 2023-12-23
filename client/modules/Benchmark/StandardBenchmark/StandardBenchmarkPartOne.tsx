"use client";

import React, { useEffect, useRef } from "react";
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
import useBenchmarkStore from "@/shared/benchmarkStore";

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
  {
    title: "ConductancePulseTime",
    xTitle: "",
    yTitle: "",
    label: DefaultBenchmarkLabel.StandardBenchmarkPulseChart,
    chartTag: false,
    tag: StandardBenchmarkPulseType.CONDUCTANCEPULSE_WEB,
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
  const gridStyle = {
    "& > :not(style)": { m: 1 },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 300,
    width: "auto",
  };

  //**STANDARD_BENCHMARK_FORMIK**\\

  const {
    addStandardBenchmarkPulse,
    addStandardBenchmarkSweep,
    standardBenchmarkPulseSelection,
    standardBenchmarkSweepSelection,
  } = useBenchmarkStore();
  // console.log("s-pulse", standardBenchmarkPulseSelection);
  // console.log("s-sweep", standardBenchmarkSweepSelection);

  const initialStandardBenchmarkChartValues: TStandardBenchmarkType = {
    standardBenchmarkPulse: standardBenchmarkPulseData,
    standardBenchmarkSweep: standardBenchmarkSweepData,
  };

  const standardBenchmarkChartFormik = useFormik({
    initialValues: initialStandardBenchmarkChartValues,

    onSubmit: async (values) => {
      const selectedStandardBenchmarkPulse = values.standardBenchmarkPulse
        .filter((selected) => selected.chartTag === true)
        .map((item) => item.tag);
      if (selectedStandardBenchmarkPulse) {
        addStandardBenchmarkPulse(
          selectedStandardBenchmarkPulse as StandardBenchmarkPulseType[]
        );
      }

      const selectedStandardBenchmarkSweep = values.standardBenchmarkSweep
        .filter((selected) => selected.chartTag === true)
        .map((item) => item.tag);

      if (selectedStandardBenchmarkSweep) {
        addStandardBenchmarkSweep(
          selectedStandardBenchmarkSweep as StandardBenchmarkSweepType[]
        );
      }
    },
  });

  const prevValuesRef = useRef(standardBenchmarkChartFormik.values);

  useEffect(() => {
    // Check if form values have changed
    if (prevValuesRef.current !== standardBenchmarkChartFormik.values) {
      // Submit the form whenever values change
      standardBenchmarkChartFormik.submitForm();
    }

    // Update the ref with the current values
    prevValuesRef.current = standardBenchmarkChartFormik.values;
  }, [standardBenchmarkChartFormik.values]);

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
          </AccordionDetails>
        </Accordion>
      </Grid>
    </>
  );
};
