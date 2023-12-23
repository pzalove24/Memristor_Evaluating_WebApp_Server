"use client";

import React, { useState, useEffect } from "react";
import {
  Stack,
  Paper,
  Box,
  Grid,
  Divider,
  Button,
  ButtonGroup,
  Grow,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { Header } from "@/components";
import { StandardBenchmarkPartOne } from "@/modules/Benchmark/StandardBenchmark/StandardBenchmarkPartOne";
import { StabilityBenchmarkPartOne } from "@/modules/Benchmark/StabilityBenchmark/StabilityBenchmarkPartOne";
import { BiorealisticBenchmarkPartOne } from "@/modules/Benchmark/BiorealisticBenchmark/BiorealisticBenchmarkPartOne";
import { AdvancedBenchmarkPartOne } from "@/modules/Benchmark/AdvancedBenchmark/AdvancedBenchmarkPartOne";
import { BenchmarkInputPartOne } from "@/modules/Benchmark/BenchmarkInput/BenchmarkInputPartOne";
import ManualOperationPartOne from "@/modules/Benchmark/ManualOperation/ManualOperationPartOne";
import useComPortStore from "@/shared/comPortStore";
import useBenchmarkStore from "@/shared/benchmarkStore";

const Benchmark = () => {
  const [openBenchmark, setOpenBenchmark] = useState(false);

  const { comPortReady } = useComPortStore();
  const { benchmarkStatus, resetBenchmark } = useBenchmarkStore();

  // useEffect(() => {
  //   if (comPortReady === false) {
  //     setOpenBenchmark(false);
  //   }
  // }, [comPortReady]);

  return (
    <Stack direction={"column"}>
      <Header
        title="Benchmark"
        subtitle="Electrical Measurement for Memristor"
      />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            mt: 2,
            width: "100%",
            height: "auto",
          },
        }}
      >
        <Paper elevation={4}>
          <Grid rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12}>
              <ManualOperationPartOne />
            </Grid>
            <Grid item xs={12}>
              <Divider sx={{ mt: 1 }} />
              <ButtonGroup fullWidth>
                <Button
                  onClick={() => setOpenBenchmark(true)}
                  disabled={openBenchmark || !comPortReady}
                  //{openBenchmark && comPortReady && (
                  // disabled={openBenchmark}
                  variant="contained"
                >
                  Benchmark Setup
                </Button>
                <Button
                  onClick={() => setOpenBenchmark(false)}
                  disabled={!openBenchmark || !comPortReady}
                  variant="contained"
                >
                  Close Setup
                </Button>
              </ButtonGroup>
            </Grid>
            {openBenchmark && comPortReady && (
              <>
                <Grid item xs={12}>
                  <Typography
                    sx={{ mt: 2, ml: 2 }}
                    color="secondary"
                    display="block"
                    variant="h3"
                    fontWeight="bold"
                  >
                    Benchmark Input
                  </Typography>
                </Grid>
                <BenchmarkInputPartOne />
                {benchmarkStatus !== "TESTNAME" &&
                  benchmarkStatus !== "TESTHARDWARE" && (
                    <>
                      <Grid item xs={12}>
                        <Divider />{" "}
                        <Stack
                          direction={"row"}
                          spacing={3}
                          justifyContent={"flex-start"}
                          alignItems={"center"}
                          sx={{ mt: 2, ml: 2 }}
                        >
                          <Typography
                            color="secondary"
                            display="block"
                            variant="h3"
                            fontWeight="bold"
                          >
                            Benchmark Result
                          </Typography>
                          <Grow
                            in={benchmarkStatus === "BENCHMARKSELECTION"}
                            style={{ transformOrigin: "0 0 0" }}
                            {...(benchmarkStatus === "BENCHMARKSELECTION"
                              ? { timeout: 500 }
                              : {})}
                          >
                            <ArrowCircleLeftIcon fontSize="large" />
                          </Grow>
                        </Stack>
                      </Grid>
                      <StandardBenchmarkPartOne />
                      <StabilityBenchmarkPartOne />
                      <BiorealisticBenchmarkPartOne />
                      <AdvancedBenchmarkPartOne />
                    </>
                  )}
              </>
            )}
          </Grid>
        </Paper>
      </Box>
    </Stack>
  );
};

export default Benchmark;
