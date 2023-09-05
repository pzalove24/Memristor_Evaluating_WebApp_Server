import React from "react";
import { Box, Grid, Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import { IVchart } from "@/components/Chart/IVchart";
import { ResistanceTimeChart } from "@/components/Chart/ConductancePulseTimeChart";
import { RetentionTime } from "@/components/Chart/RetentionTime";
import { EnduranceCycle } from "@/components/Chart/EnduranceCycle";

export const StandardBenchmarkPartOne = () => {
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
            Standard Benchmark
          </Typography>
        </Divider>
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <Grid item sm={6} md={3} lg={3} xl={3} xs>
            <Box
              sx={gridStyle}
            >
              <IVchart />
            </Box>
          </Grid>
          <Grid item sm={6} md={3} lg={3} xl={3} xs>
            <Box
              sx={gridStyle}
            >
              <ResistanceTimeChart />
            </Box>
          </Grid>
          <Grid item sm={6} md={3} lg={3} xl={3} xs>
            <Box
              sx={gridStyle}
            >
              <RetentionTime />
            </Box>
          </Grid>
          <Grid item sm={6} md={3} lg={3} xl={3} xs>
            <Box
              sx={gridStyle}
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
              sx={gridStyle}
            >
              <IVchart />
            </Box>
          </Grid>
          <Grid item sm={6} md={3} lg={3} xl={3} xs>
            <Box
              sx={gridStyle}
            >
              <ResistanceTimeChart />
            </Box>
          </Grid>
          <Grid item sm={6} md={3} lg={3} xl={3} xs>
            <Box
              sx={gridStyle}
            >
              <RetentionTime />
            </Box>
          </Grid>
          <Grid item sm={6} md={3} lg={3} xl={3} xs>
            <Box
              sx={gridStyle}
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
              sx={gridStyle}
            >
              <IVchart />
            </Box>
          </Grid>
          <Grid item sm={6} md={3} lg={3} xl={3} xs>
            <Box
              sx={gridStyle}
            >
              <ResistanceTimeChart />
            </Box>
          </Grid>
          <Grid item sm={6} md={3} lg={3} xl={3} xs>
            <Box
              sx={gridStyle}
            >
              <RetentionTime />
            </Box>
          </Grid>
          <Grid item sm={6} md={3} lg={3} xl={3} xs>
            <Box
              sx={gridStyle}
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
              sx={gridStyle}
            >
              <IVchart />
            </Box>
          </Grid>
          <Grid item sm={6} md={3} lg={3} xl={3} xs>
            <Box
              sx={gridStyle}
            >
              <ResistanceTimeChart />
            </Box>
          </Grid>
          <Grid item sm={6} md={3} lg={3} xl={3} xs>
            <Box
              sx={gridStyle}
            >
              <RetentionTime />
            </Box>
          </Grid>
          <Grid item sm={6} md={3} lg={3} xl={3} xs>
            <Box
              sx={gridStyle}
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
              sx={gridStyle}
            >
              <IVchart />
            </Box>
          </Grid>
          <Grid item sm={6} md={3} lg={3} xl={3} xs>
            <Box
              sx={gridStyle}
            >
              <ResistanceTimeChart />
            </Box>
          </Grid>
          <Grid item sm={6} md={3} lg={3} xl={3} xs>
            <Box
              sx={gridStyle}
            >
              <RetentionTime />
            </Box>
          </Grid>
          <Grid item sm={6} md={3} lg={3} xl={3} xs>
            <Box
              sx={gridStyle}
            >
              <EnduranceCycle />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
