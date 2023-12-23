"use client";

import React, { useEffect, useRef } from "react";
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
} from "@/modules/Chart/Benchmark/StabilityBenchmarkChart/RetentionTime";
import {
  SweepEndurance,
  PulseEndurance,
} from "@/modules/Chart/Benchmark/StabilityBenchmarkChart/EnduranceCycle";

import {
  BenchmarkChart,
  DialogSelectedStabilityBenchmarkReviewProps,
} from "@/types";
import CheckedStabilityBenchmark from "./CheckedStabilityBenchmark";
import { useFormik } from "formik";
import {
  StabilityBenchmarkPulseType,
  StabilityBenchmarkSweepType,
} from "@/types/commandType";
import {
  DefaultBenchmarkChartType,
  DefaultBenchmarkLabel,
} from "@/types/chartType";
import useBenchmarkStore from "@/shared/benchmarkStore";
import ScatterBenchmarkChart from "@/components/charts/ScatterBenchmarkChart";

export type TStabilityBenchmarkType = {
  stabilityBenchmarkPulse: DefaultBenchmarkChartType[];
  stabilityBenchmarkSweep: DefaultBenchmarkChartType[];
};

const stabilityBenchmarkPulseData: DefaultBenchmarkChartType[] = [
  {
    title: "PulseEndurance",
    xTitle: "voltage (V)",
    yTitle: "current (uA)",
    label: DefaultBenchmarkLabel.StabilityBenchmarkPulseChart,
    chartTag: false,
    tag: StabilityBenchmarkPulseType.ENDURANCEPULSE_WEB,
  },
  {
    title: "PulseRentention",
    xTitle: "voltage (V)",
    yTitle: "current (uA)",
    label: DefaultBenchmarkLabel.StabilityBenchmarkPulseChart,
    chartTag: false,
    tag: StabilityBenchmarkPulseType.RETENTIONPULSE_WEB,
  },
];

const stabilityBenchmarkSweepData: DefaultBenchmarkChartType[] = [
  {
    title: "SweepEndurance",
    xTitle: "voltage (V)",
    yTitle: "current (uA)",
    label: DefaultBenchmarkLabel.StabilityBenchmarkSweepChart,
    chartTag: false,
    tag: StabilityBenchmarkSweepType.ENDURANCESWEEP_WEB,
  },
  {
    title: "SweepRetention",
    xTitle: "voltage (V)",
    yTitle: "current (uA)",
    label: DefaultBenchmarkLabel.StabilityBenchmarkSweepChart,
    chartTag: false,
    tag: StabilityBenchmarkSweepType.RETENTIONSWEEP_WEB,
  },
];

export const StabilityBenchmarkPartOne = ({
  BenchmarkReviewData,
}: DialogSelectedStabilityBenchmarkReviewProps) => {
  const gridStyle = {
    "& > :not(style)": { m: 1 },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 300,
    width: "auto",
    m: 1,
  };

  //**STABILITY_BENCHMARK_FORMIK**\\

  const {
    addStabilityBenchmarkPulse,
    addStabilityBenchmarkSweep,
    stabilityBenchmarkPulseSelection,
    stabilityBenchmarkSweepSelection,
  } = useBenchmarkStore();

  console.log("st-pulse", stabilityBenchmarkPulseSelection);
  console.log("st-sweep", stabilityBenchmarkSweepSelection);

  const initialStabilityBenchmarkChartValues: TStabilityBenchmarkType = {
    stabilityBenchmarkPulse: stabilityBenchmarkPulseData,
    stabilityBenchmarkSweep: stabilityBenchmarkSweepData,
  };

  const stabilityBenchmarkChartFormik = useFormik({
    initialValues: initialStabilityBenchmarkChartValues,

    onSubmit: async (values) => {
      const selectedStabilityBenchmarkPulse = values.stabilityBenchmarkPulse
        .filter((selected) => selected.chartTag === true)
        .map((item) => item.tag);
      if (selectedStabilityBenchmarkPulse) {
        addStabilityBenchmarkPulse(
          selectedStabilityBenchmarkPulse as StabilityBenchmarkPulseType[]
        );
      }

      const selectedStabilityBenchmarkSweep = values.stabilityBenchmarkSweep
        .filter((selected) => selected.chartTag === true)
        .map((item) => item.tag);

      if (selectedStabilityBenchmarkSweep) {
        addStabilityBenchmarkSweep(
          selectedStabilityBenchmarkSweep as StabilityBenchmarkSweepType[]
        );
      }
    },
  });

  const prevValuesRef = useRef(stabilityBenchmarkChartFormik.values);

  useEffect(() => {
    // Check if form values have changed
    if (prevValuesRef.current !== stabilityBenchmarkChartFormik.values) {
      // Submit the form whenever values change
      stabilityBenchmarkChartFormik.submitForm();
    }

    // Update the ref with the current values
    prevValuesRef.current = stabilityBenchmarkChartFormik.values;
  }, [stabilityBenchmarkChartFormik.values]);

  //**END **\\

  return (
    <>
      <Grid item xs={12}>
        <Accordion defaultExpanded={true}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="Stability Benchmark-content"
            id="Stability Benchmark-header"
          >
            <Typography color="secondary" display="block" variant="h5">
              Stability Benchmark
              {BenchmarkReviewData?.selectedStabilityBenchmarkViewName &&
                ` for ${BenchmarkReviewData?.selectedStabilityBenchmarkViewName}`}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CheckedStabilityBenchmark
              BenchmarkChartFormik={stabilityBenchmarkChartFormik}
            />
            <Grid container>
              {stabilityBenchmarkChartFormik.values.stabilityBenchmarkPulse.map(
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
              {stabilityBenchmarkChartFormik.values.stabilityBenchmarkSweep.map(
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
