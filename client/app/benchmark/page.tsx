import React from "react";
import {
  Stack,
  Paper,
  Box,
  Grid,
  Card,
  CardActions,
  CardContent,
  Button,
  Divider,
  Chip,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import { Header, BenchmarkStepper } from "@/components";
import { ParameterInputTabs } from "@/components/Input/BenchmarkInput";
import { VersionOne } from "@/components/Hardware/VersionOne";
import { VoltagePulseChart } from "@/components/Chart/VoltagePulseChart";
import ErrorIcon from "@mui/icons-material/Error";
import { StandardBenchmarkPartOne } from "@/components/Benchmark/StandardBenchmark/StandardBenchmarkPartOne";
import { StabilityBenchmarkPartOne } from "@/components/Benchmark/StabilityBenchmark/StabilityBenchmarkPartOne";
import { BiorealisticBenchmarkPartOne } from "@/components/Benchmark/BiorealisticBenchmark/BiorealisticBenchmarkPartOne";
import { AdvancedBenchmarkPartOne } from "@/components/Benchmark/AdvancedBenchmark/AdvancedBenchmarkPartOne";
import { BenchmarkInputPartOne } from "@/components/Benchmark/BenchmarkInput/BenchmarkInputPartOne";
import { CumulativeProbabilityResistance } from "@/components/Chart/CumulativeProbabilityResistance";
import { DistributionSetResetVoltage } from "@/components/Chart/DistributionSetResetVoltage";
import { OnOffRatio } from "@/components/Chart/OnOffRatio";
import { LogLogIVCurve } from "@/components/Chart/LogLogIVCurve";
import { CurrentUnderDifferentPulseNumberWidth } from "@/components/Chart/CurrentUnderDifferentPulseNumberWidth";
import { ReconfigurableLogic } from "@/components/Chart/ReconfigurableLogic";
import { BioNeuralProps } from "@/components/Chart/BioNeuralProps";
import { MultiBit } from "@/components/Chart/MultiBit";
import { NeuroSim } from "@/components/Chart/NeuroSim";
import { SweepIVwaveform } from "@/components/Chart/Waveform/SweepIVwaveform";
import { PulseIVwaveform } from "@/components/Chart/Waveform/PulseIVwaveform";
import { ConductancePulseNumberWaveform } from "@/components/Chart/Waveform/ConductancePulseNumberWaveform";
import { SweepRetentionTimeWaveform } from "@/components/Chart/Waveform/SweepRetentionTimeWaveform";
import { PulseRetentionTimeWaveform } from "@/components/Chart/Waveform/PulseRetentionTimeWaveform";
import { EnduranceCycleWaveform } from "@/components/Chart/Waveform/EnduranceCycleWaveform";

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
