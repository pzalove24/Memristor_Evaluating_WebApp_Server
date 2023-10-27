import * as React from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { CheckedBenchmarkProps } from "@/types";

const CheckedStabilityBenchmark = ({
  BenchmarkSelections,
  handleChangeChildren,
  handleChangeAllChildren,
}: CheckedBenchmarkProps) => {
  const SweepVoltageChildren = (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
      {BenchmarkSelections.SweepVoltage.map((element: any, index: any) => (
        <FormControlLabel
          key={index}
          label={Object.keys(element)[0]}
          control={
            <Checkbox
              name={Object.keys(element)[0]}
              checked={Object.values(element)[0] as boolean}
              onChange={(e) => handleChangeChildren(e, "SweepVoltage", index)}
            />
          }
        />
      ))}
    </Box>
  );

  const PulseVoltageChildren = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        ml: 3,
      }}
    >
      {BenchmarkSelections.PulseVoltage.map((element: any, index: any) => (
        <FormControlLabel
          key={index}
          label={Object.keys(element)[0]}
          control={
            <Checkbox
              name={Object.keys(element)[0]}
              checked={Object.values(element)[0] as boolean}
              onChange={(e) => handleChangeChildren(e, "PulseVoltage", index)}
            />
          }
        />
      ))}
    </Box>
  );

  return (
    <>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item sm={6} md={6} lg={6} xl={6} xs>
          <Paper sx={{ height: "100%" }} elevation={4}>
            <Box
              display={"flex"}
              justifyContent="center"
              alignItems="flex-start"
            >
              <FormControlLabel
                label="Stability Benchmark using Sweep Voltage Waveform"
                control={
                  <Checkbox
                    checked={BenchmarkSelections.SweepVoltage.every(
                      (item: any) => item[Object.keys(item)[0]]
                    )}
                    indeterminate={
                      !BenchmarkSelections.SweepVoltage.every(
                        (item: any) => item[Object.keys(item)[0]]
                      ) &&
                      !BenchmarkSelections.SweepVoltage.every(
                        (item: any) => !item[Object.keys(item)[0]]
                      )
                    }
                    onChange={(e) => handleChangeAllChildren(e, "SweepVoltage")}
                  />
                }
              />
            </Box>
            {SweepVoltageChildren}
          </Paper>
        </Grid>
        <Grid item sm={6} md={6} lg={6} xl={6} xs>
          <Paper sx={{ height: "100%" }} elevation={4}>
            <Box
              display={"flex"}
              justifyContent="center"
              alignItems="flex-start"
            >
              <FormControlLabel
                label="Stability Benchmark using Pulse Voltage Waveform"
                control={
                  <Checkbox
                    checked={BenchmarkSelections.PulseVoltage.every(
                      (item: any) => item[Object.keys(item)[0]]
                    )}
                    indeterminate={
                      !BenchmarkSelections.PulseVoltage.every(
                        (item: any) => item[Object.keys(item)[0]]
                      ) &&
                      !BenchmarkSelections.PulseVoltage.every(
                        (item: any) => !item[Object.keys(item)[0]]
                      )
                    }
                    onChange={(e) => handleChangeAllChildren(e, "PulseVoltage")}
                  />
                }
              />
            </Box>
            {PulseVoltageChildren}
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default CheckedStabilityBenchmark;
