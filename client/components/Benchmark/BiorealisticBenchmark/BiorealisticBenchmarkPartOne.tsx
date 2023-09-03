import React from "react";
import { Box, Grid, Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import { CurrentUnderDifferentPulseNumberWidth } from "@/components/Chart/CurrentUnderDifferentPulseNumberWidth";
import { ReconfigurableLogic } from "@/components/Chart/ReconfigurableLogic";
import { MultiBit } from "@/components/Chart/MultiBit";
import { NeuroSim } from "@/components/Chart/NeuroSim";

export const BiorealisticBenchmarkPartOne = () => {
  return (
    <>
      <Grid item xs={12}>
        <Divider textAlign="left" variant="middle">
          <Typography color="secondary" display="block" variant="h5">
            Biorealistic Benchmark
          </Typography>
        </Divider>
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
    </>
  );
};
