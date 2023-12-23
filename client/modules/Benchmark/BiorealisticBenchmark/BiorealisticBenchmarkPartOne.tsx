"use client";

import React, { useEffect, useRef } from "react";
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
} from "@/modules/Chart/Benchmark/BiorealisticBenchmarkChart/BiorealisticProps";
import { CurrentUnderDifferentPulseNumberWidth } from "@/modules/Chart/Benchmark/BiorealisticBenchmarkChart/CurrentUnderDifferentPulseNumberWidth";
import {
  BenchmarkChart,
  DialogSelectedBiorealisticBenchmarkReviewProps,
} from "@/types";
import CheckedBiorealisticBenchmark from "./CheckedBiorealisticBenchmark";
import { useFormik } from "formik";
import {
  BiorealisticBenchmarkBiologicalNeuronType,
  BiorealisticBenchmarkBiologicalSynapseType,
} from "@/types/commandType";
import {
  DefaultBenchmarkChartType,
  DefaultBenchmarkLabel,
} from "@/types/chartType";
import useBenchmarkStore from "@/shared/benchmarkStore";
import ScatterBenchmarkChart from "@/components/charts/ScatterBenchmarkChart";

export type TBiorealisticBenchmarkType = {
  biorealisticBenchmarkBiologicalNeuron: DefaultBenchmarkChartType[];
  biorealisticBenchmarkBiologicalSynapse: DefaultBenchmarkChartType[];
};

const biorealisticBenchmarkBiologicalNeuronData: DefaultBenchmarkChartType[] = [
  {
    title: "ChartSTDP",
    xTitle: "voltage (V)",
    yTitle: "current (uA)",
    label: DefaultBenchmarkLabel.BiorealisticBenchmarkBiologicalNeuronChart,
    chartTag: false,
    tag: BiorealisticBenchmarkBiologicalNeuronType.CHART_STDP_WEB,
  },
  {
    title: "PairPulse",
    xTitle: "voltage (V)",
    yTitle: "current (uA)",
    label: DefaultBenchmarkLabel.BiorealisticBenchmarkBiologicalNeuronChart,
    chartTag: false,
    tag: BiorealisticBenchmarkBiologicalNeuronType.PAIRPULSE_WEB,
  },
  {
    title: "ChartIPSC_EPSC",
    xTitle: "voltage (V)",
    yTitle: "current (uA)",
    label: DefaultBenchmarkLabel.BiorealisticBenchmarkBiologicalNeuronChart,
    chartTag: false,
    tag: BiorealisticBenchmarkBiologicalNeuronType.CHART_IPSC_EPSC_WEB,
  },
];

const biorealisticBenchmarkBiologicalSynapseData: DefaultBenchmarkChartType[] =
  [
    {
      title: "CurrentUnderDifferentPulseNumberWidth",
      xTitle: "voltage (V)",
      yTitle: "current (uA)",
      label: DefaultBenchmarkLabel.BiorealisticBenchmarkBiologicalSynapseChart,
      chartTag: false,
      tag: BiorealisticBenchmarkBiologicalSynapseType.CURRENT_UNDER_DIFFERENT_PULSENUMBER_WDITH_WEB,
    },
  ];

export const BiorealisticBenchmarkPartOne = ({
  BenchmarkReviewData,
}: DialogSelectedBiorealisticBenchmarkReviewProps) => {
  const gridStyle = {
    "& > :not(style)": { m: 1 },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 300,
    width: "auto",
    m: 1,
  };

  //**BIOREALISTIC_BENCHMARK_FORMIK**\\

  const { addBiorealisticBenchmark, biorealisticBenchmarkSelection } =
    useBenchmarkStore();

  // console.log("bio", biorealisticBenchmarkSelection);

  const initialBiorealisticBenchmarkChartValues: TBiorealisticBenchmarkType = {
    biorealisticBenchmarkBiologicalNeuron:
      biorealisticBenchmarkBiologicalNeuronData,
    biorealisticBenchmarkBiologicalSynapse:
      biorealisticBenchmarkBiologicalSynapseData,
  };

  const biorealisticBenchmarkChartFormik = useFormik({
    initialValues: initialBiorealisticBenchmarkChartValues,

    onSubmit: async (values) => {
      const selectedBiorealisticBenchmarkBiologicalNeuron =
        values.biorealisticBenchmarkBiologicalNeuron
          .filter((selected) => selected.chartTag === true)
          .map(
            (item) => item.tag
          ) as BiorealisticBenchmarkBiologicalNeuronType[];

      const selectedBiorealisticBenchmarkBiologicalSynapse =
        values.biorealisticBenchmarkBiologicalSynapse
          .filter((selected) => selected.chartTag === true)
          .map(
            (item) => item.tag
          ) as BiorealisticBenchmarkBiologicalSynapseType[];

      const allBiorealisticBenchmarkSelection = [
        ...selectedBiorealisticBenchmarkBiologicalNeuron,
        ...selectedBiorealisticBenchmarkBiologicalSynapse,
      ];

      addBiorealisticBenchmark(allBiorealisticBenchmarkSelection);
    },
  });

  const prevValuesRef = useRef(biorealisticBenchmarkChartFormik.values);

  useEffect(() => {
    // Check if form values have changed
    if (prevValuesRef.current !== biorealisticBenchmarkChartFormik.values) {
      // Submit the form whenever values change
      biorealisticBenchmarkChartFormik.submitForm();
    }

    // Update the ref with the current values
    prevValuesRef.current = biorealisticBenchmarkChartFormik.values;
  }, [biorealisticBenchmarkChartFormik.values]);

  //**END **\\

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
              {BenchmarkReviewData?.selectedBiorealisticBenchmarkViewName &&
                ` for ${BenchmarkReviewData?.selectedBiorealisticBenchmarkViewName}`}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CheckedBiorealisticBenchmark
              BenchmarkChartFormik={biorealisticBenchmarkChartFormik}
            />
            <Grid container>
              {biorealisticBenchmarkChartFormik.values.biorealisticBenchmarkBiologicalNeuron.map(
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
              {biorealisticBenchmarkChartFormik.values.biorealisticBenchmarkBiologicalSynapse.map(
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
