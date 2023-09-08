import * as React from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { CheckedBenchmarkProps } from "@/types";

const CheckedStandardBenchmark = ({
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

  const AdditionalBenchmarkChildren = (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
      {BenchmarkSelections.AdditionalBenchmark.map(
        (element: any, index: any) => (
          <FormControlLabel
            key={index}
            label={Object.keys(element)[0]}
            control={
              <Checkbox
                name={Object.keys(element)[0]}
                checked={Object.values(element)[0] as boolean}
                onChange={(e) =>
                  handleChangeChildren(e, "AdditionalBenchmark", index)
                }
              />
            }
          />
        )
      )}
    </Box>
  );

  return (
    <>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item sm={4} md={4} lg={4} xl={4} xs>
          <Paper sx={{ height: "100%" }} elevation={4}>
            <Box
              display={"flex"}
              justifyContent="center"
              alignItems="flex-start"
            >
              <FormControlLabel
                label="Standard Benchmark using Sweep Voltage Waveform"
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
        <Grid item sm={4} md={4} lg={4} xl={4} xs>
          <Paper sx={{ height: "100%" }} elevation={4}>
            <Box
              display={"flex"}
              justifyContent="center"
              alignItems="flex-start"
            >
              <FormControlLabel
                label="Standard Benchmark using Pulse Voltage Waveform"
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
        <Grid item sm={4} md={4} lg={4} xl={4} xs>
          <Paper sx={{ height: "100%" }} elevation={4}>
            <Box
              display={"flex"}
              justifyContent="center"
              alignItems="flex-start"
            >
              <FormControlLabel
                label="Addional Standard Benchmark"
                control={
                  <Checkbox
                    checked={BenchmarkSelections.AdditionalBenchmark.every(
                      (item: any) => item[Object.keys(item)[0]]
                    )}
                    indeterminate={
                      !BenchmarkSelections.AdditionalBenchmark.every(
                        (item: any) => item[Object.keys(item)[0]]
                      ) &&
                      !BenchmarkSelections.AdditionalBenchmark.every(
                        (item: any) => !item[Object.keys(item)[0]]
                      )
                    }
                    onChange={(e) =>
                      handleChangeAllChildren(e, "AdditionalBenchmark")
                    }
                  />
                }
              />
            </Box>
            {AdditionalBenchmarkChildren}
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default CheckedStandardBenchmark;
