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
} from "@mui/material";
import Typography from "@mui/material/Typography";
import { Header, BenchmarkStepper } from "@/components";
import { ParameterInput } from "@/components/Input/BenchmarkInput";
import { VersionOne } from "@/components/Hardware/VersionOne";
import { VoltagePulseChart } from "@/components/Chart/VoltagePulseChart";
import { IVchart } from "@/components/Chart/IVchart";
import { ResistanceTimeChart } from "@/components/Chart/ResistanceTimeChart";
import { RetentionTime } from "@/components/Chart/RetentionTime";
import { EnduranceCycle } from "@/components/Chart/EnduranceCycle";
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
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          Benchmark
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="secondary" size="small">
          Learn More
        </Button>
      </CardActions>
    </React.Fragment>
  );

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
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={4}>
                  <VersionOne />
                </Grid>
                <Grid item xs={8}>
                  <Box sx={{ m: 1 }}>
                    <Card variant="outlined">
                      <ParameterInput />
                    </Card>
                    <Card variant="outlined">
                      <Box
                        sx={{
                          "& > :not(style)": { m: 1 },
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: 360,
                        }}
                      >
                        <SweepIVwaveform />
                      </Box>
                    </Card>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container>
                <Grid item sm={6} md={6} lg={6} xl={6} xs>
                  <Box
                    sx={{
                      "& > :not(style)": { m: 1 },
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 300,
                      width: "auto",
                      m: 1,
                    }}
                  >
                    <PulseIVwaveform />
                  </Box>
                </Grid>
                <Grid item sm={6} md={6} lg={6} xl={6} xs>
                  <Box
                    sx={{
                      "& > :not(style)": { m: 1 },
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 300,
                      width: "auto",
                      m: 1,
                    }}
                  >
                    <EnduranceCycleWaveform />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container>
                <Grid item sm md lg xl xs>
                  <Box
                    sx={{
                      "& > :not(style)": { m: 1 },
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 300,
                      width: "auto",
                      m: 1,
                    }}
                  >
                    <ConductancePulseNumberWaveform />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container>
                <Grid item sm={6} md={6} lg={6} xl={6} xs>
                  <Box
                    sx={{
                      "& > :not(style)": { m: 1 },
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 300,
                      width: "auto",
                      m: 1,
                    }}
                  >
                    <SweepRetentionTimeWaveform />
                  </Box>
                </Grid>
                <Grid item sm={6} md={6} lg={6} xl={6} xs>
                  <Box
                    sx={{
                      "& > :not(style)": { m: 1 },
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 300,
                      width: "auto",
                      m: 1,
                    }}
                  >
                    <PulseRetentionTimeWaveform />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
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
            <Grid item xs={12}>
              <Grid container>
                <Grid item sm={6} md={3} lg={3} xl={3} xs>
                  <Box
                    sx={{
                      "& > :not(style)": { m: 1 },
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 300,
                      width: "auto",
                      m: 1,
                    }}
                  >
                    <IVchart />
                  </Box>
                </Grid>
                <Grid item sm={6} md={3} lg={3} xl={3} xs>
                  <Box
                    sx={{
                      "& > :not(style)": { m: 1 },
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 300,
                      width: "auto",
                      m: 1,
                    }}
                  >
                    <ResistanceTimeChart />
                  </Box>
                </Grid>
                <Grid item sm={6} md={3} lg={3} xl={3} xs>
                  <Box
                    sx={{
                      "& > :not(style)": { m: 1 },
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 300,
                      width: "auto",
                      m: 1,
                    }}
                  >
                    <RetentionTime />
                  </Box>
                </Grid>
                <Grid item sm={6} md={3} lg={3} xl={3} xs>
                  <Box
                    sx={{
                      "& > :not(style)": { m: 1 },
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 300,
                      width: "auto",
                      m: 1,
                    }}
                  >
                    <EnduranceCycle />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container>
                <Grid item sm={6} md={3} lg={3} xl={3} xs>
                  <Box
                    sx={{
                      "& > :not(style)": { m: 1 },
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 300,
                      width: "auto",
                      m: 1,
                    }}
                  >
                    <CumulativeProbabilityResistance />
                  </Box>
                </Grid>
                <Grid item sm={6} md={3} lg={3} xl={3} xs>
                  <Box
                    sx={{
                      "& > :not(style)": { m: 1 },
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 300,
                      width: "auto",
                      m: 1,
                    }}
                  >
                    <DistributionSetResetVoltage />
                  </Box>
                </Grid>
                <Grid item sm={6} md={3} lg={3} xl={3} xs>
                  <Box
                    sx={{
                      "& > :not(style)": { m: 1 },
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 300,
                      width: "auto",
                      m: 1,
                    }}
                  >
                    <OnOffRatio />
                  </Box>
                </Grid>
                <Grid item sm={6} md={3} lg={3} xl={3} xs>
                  <Box
                    sx={{
                      "& > :not(style)": { m: 1 },
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 300,
                      width: "auto",
                      m: 1,
                    }}
                  >
                    <LogLogIVCurve />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sx={{ mb: 3 }}>
              <Grid container>
                <Grid item sm={6} md={3} lg={3} xl={3} xs>
                  <Box
                    sx={{
                      "& > :not(style)": { m: 1 },
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 300,
                      width: "auto",
                      m: 1,
                    }}
                  >
                    <CurrentUnderDifferentPulseNumberWidth />
                  </Box>
                </Grid>
                <Grid item sm={6} md={3} lg={3} xl={3} xs>
                  <Box
                    sx={{
                      "& > :not(style)": { m: 1 },
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 300,
                      width: "auto",
                      m: 1,
                    }}
                  >
                    <ReconfigurableLogic />
                  </Box>
                </Grid>
                <Grid item sm={6} md={3} lg={3} xl={3} xs>
                  <Box
                    sx={{
                      "& > :not(style)": { m: 1 },
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 300,
                      width: "auto",
                      m: 1,
                    }}
                  >
                    <MultiBit />
                  </Box>
                </Grid>
                <Grid item sm={6} md={3} lg={3} xl={3} xs>
                  <Box
                    sx={{
                      "& > :not(style)": { m: 1 },
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 300,
                      width: "auto",
                      m: 1,
                    }}
                  >
                    <NeuroSim />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Stack>
  );
};

export default benchmark;
