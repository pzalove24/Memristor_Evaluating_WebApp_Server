import React from "react";
import { Box, Grid, Divider, Chip } from "@mui/material";
import Typography from "@mui/material/Typography";
import ErrorIcon from "@mui/icons-material/Error";
import { CumulativeProbabilityResistance } from "@/components/Chart/CumulativeProbabilityResistance";
import { DistributionSetResetVoltage } from "@/components/Chart/DistributionSetResetVoltage";
import { OnOffRatio } from "@/components/Chart/OnOffRatio";
import { LogLogIVCurve } from "@/components/Chart/LogLogIVCurve";

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
  return (
    <>
      <Grid item xs={12}>
        <Divider textAlign="left" variant="middle">
          <Typography color="secondary" display="block" variant="h5">
            Stability Benchmark
          </Typography>
          <Chip
            color="error"
            label="ATTENTION: DAMAGE DEVICE"
            icon={<ErrorIcon />}
          />
        </Divider>
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <Grid item sm={6} md={3} lg={3} xl={3} xs>
            <Box sx={gridStyle}>
              <CumulativeProbabilityResistance />
            </Box>
          </Grid>
          <Grid item sm={6} md={3} lg={3} xl={3} xs>
            <Box sx={gridStyle}>
              <DistributionSetResetVoltage />
            </Box>
          </Grid>
          <Grid item sm={6} md={3} lg={3} xl={3} xs>
            <Box sx={gridStyle}>
              <OnOffRatio />
            </Box>
          </Grid>
          <Grid item sm={6} md={3} lg={3} xl={3} xs>
            <Box sx={gridStyle}>
              <LogLogIVCurve />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
