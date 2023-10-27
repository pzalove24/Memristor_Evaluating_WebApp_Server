import React from "react";
import { Stack, Paper, Box, Grid, Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Header, BenchmarkStepper } from "@/components";
import { StandardBenchmarkPartOne } from "@/modules/Benchmark/StandardBenchmark/StandardBenchmarkPartOne";
import { StabilityBenchmarkPartOne } from "@/modules/Benchmark/StabilityBenchmark/StabilityBenchmarkPartOne";
import { BiorealisticBenchmarkPartOne } from "@/modules/Benchmark/BiorealisticBenchmark/BiorealisticBenchmarkPartOne";
import { AdvancedBenchmarkPartOne } from "@/modules/Benchmark/AdvancedBenchmark/AdvancedBenchmarkPartOne";
import { BenchmarkInputPartOne } from "@/modules/Benchmark/BenchmarkInput/BenchmarkInputPartOne";

const benchmark = () => {
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
              <BenchmarkStepper />
            </Grid>
            <Grid item xs={12}>
              <Divider sx={{ mt: 1 }} />
            </Grid>
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
            <Grid item xs={12}>
              <Divider />
              <Typography
                sx={{ mt: 2, ml: 2 }}
                color="secondary"
                display="block"
                variant="h3"
                fontWeight="bold"
              >
                Benchmark Result
              </Typography>
            </Grid>
            <StandardBenchmarkPartOne />
            <StabilityBenchmarkPartOne />
            <BiorealisticBenchmarkPartOne />
            <AdvancedBenchmarkPartOne />
          </Grid>
        </Paper>
      </Box>
    </Stack>
  );
};

export default benchmark;
