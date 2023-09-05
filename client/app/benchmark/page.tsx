import React from "react";
import { Stack, Paper, Box, Grid, Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Header, BenchmarkStepper } from "@/components";
import { StandardBenchmarkPartOne } from "@/components/Benchmark/StandardBenchmark/StandardBenchmarkPartOne";
import { StabilityBenchmarkPartOne } from "@/components/Benchmark/StabilityBenchmark/StabilityBenchmarkPartOne";
import { BiorealisticBenchmarkPartOne } from "@/components/Benchmark/BiorealisticBenchmark/BiorealisticBenchmarkPartOne";
import { AdvancedBenchmarkPartOne } from "@/components/Benchmark/AdvancedBenchmark/AdvancedBenchmarkPartOne";
import { BenchmarkInputPartOne } from "@/components/Benchmark/BenchmarkInput/BenchmarkInputPartOne";

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
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12}>
              <BenchmarkStepper />
            </Grid>
            <Grid item xs={12}>
              <Divider />
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
