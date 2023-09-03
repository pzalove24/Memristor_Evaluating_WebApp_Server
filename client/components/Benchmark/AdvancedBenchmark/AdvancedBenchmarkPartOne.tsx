import React from "react";
import { Grid, Divider } from "@mui/material";
import Typography from "@mui/material/Typography";

export const AdvancedBenchmarkPartOne = () => {
  return (
    <>
      <Grid item xs={12}>
        <Divider textAlign="left" variant="middle">
          <Typography color="secondary" display="block" variant="h5">
            Advanced Benchmark
          </Typography>
        </Divider>
      </Grid>
    </>
  );
};
