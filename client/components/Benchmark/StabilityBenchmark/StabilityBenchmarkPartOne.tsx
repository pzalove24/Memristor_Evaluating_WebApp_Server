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

export const StabilityBenchmarkPartOne = () => {
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
            {StabilityBenchmarkChart.map(
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
          </AccordionDetails>
        </Accordion>
      </Grid>
    </>
  );
};
