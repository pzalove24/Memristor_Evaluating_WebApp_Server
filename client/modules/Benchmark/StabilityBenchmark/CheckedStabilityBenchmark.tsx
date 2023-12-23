import * as React from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { TStabilityBenchmarkType } from "./StabilityBenchmarkPartOne";
import { FormikProps } from "formik";
import { DefaultBenchmarkChartType, DefaultBenchmarkLabel } from "@/types/chartType";

type TCheckedStabilityBenchmark = {
  BenchmarkChartFormik: FormikProps<TStabilityBenchmarkType>;
};

const CheckedStabilityBenchmark = ({
  BenchmarkChartFormik,
}: TCheckedStabilityBenchmark) => {
  const { values, handleChange, setFieldValue } = BenchmarkChartFormik;

  //stabilityBenchmarkPulse handle checkbox
  const handleCheckboxChangeStabilityBenchmarkPulse = (index: number) => {
    const checkboxes = [...values.stabilityBenchmarkPulse];
    checkboxes[index].chartTag = !checkboxes[index].chartTag;
    setFieldValue("stabilityBenchmarkPulse", checkboxes);
  };

  const areAllCheckedStabilityBenchmarkPulse =
    values.stabilityBenchmarkPulse.every((checkbox) => checkbox.chartTag);
  const areSomeCheckedStabilityBenchmarkPulse =
    values.stabilityBenchmarkPulse.some((checkbox) => checkbox.chartTag);
  const indeterminateStabilityBenchmarkPulse =
    !areAllCheckedStabilityBenchmarkPulse &&
    areSomeCheckedStabilityBenchmarkPulse;

  //stabilityBenchmarkSweep handle checkbox

  const handleCheckboxChangeStabilityBenchmarkSweep = (index: number) => {
    const checkboxes = [...values.stabilityBenchmarkSweep];
    checkboxes[index].chartTag = !checkboxes[index].chartTag;
    setFieldValue("stabilityBenchmarkSweep", checkboxes);
  };

  const areAllCheckedStabilityBenchmarkSweep =
    values.stabilityBenchmarkSweep.every((checkbox) => checkbox.chartTag);
  const areSomeCheckedStabilityBenchmarkSweep =
    values.stabilityBenchmarkSweep.some((checkbox) => checkbox.chartTag);
  const indeterminateStabilityBenchmarkSweep =
    !areAllCheckedStabilityBenchmarkSweep &&
    areSomeCheckedStabilityBenchmarkSweep;

  // render checkbox
  const PulseVoltageChildren = (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
      {values.stabilityBenchmarkPulse.map(
        (chart: DefaultBenchmarkChartType, index: number) => (
          <FormControlLabel
            key={index}
            label={chart.title}
            control={
              <Checkbox
                name={chart.title}
                checked={chart.chartTag}
                onChange={() =>
                  handleCheckboxChangeStabilityBenchmarkPulse(index)
                }
              />
            }
          />
        )
      )}
    </Box>
  );

  const SweepVoltageChildren = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        ml: 3,
      }}
    >
      {values.stabilityBenchmarkSweep.map(
        (chart: DefaultBenchmarkChartType, index: number) => (
          <FormControlLabel
            key={index}
            label={chart.title}
            control={
              <Checkbox
                name={chart.title}
                checked={chart.chartTag}
                onChange={() =>
                  handleCheckboxChangeStabilityBenchmarkSweep(index)
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
                label={DefaultBenchmarkLabel.StabilityBenchmarkPulseChart}
                control={
                  <Checkbox
                    checked={areAllCheckedStabilityBenchmarkPulse}
                    indeterminate={indeterminateStabilityBenchmarkPulse}
                    onChange={() => {
                      setFieldValue(
                        "stabilityBenchmarkPulse",
                        values.stabilityBenchmarkPulse.map((checkbox) => ({
                          ...checkbox,
                          chartTag: !areAllCheckedStabilityBenchmarkPulse,
                        }))
                      );
                    }}
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
                label={DefaultBenchmarkLabel.StabilityBenchmarkSweepChart}
                control={
                  <Checkbox
                    checked={areAllCheckedStabilityBenchmarkSweep}
                    indeterminate={indeterminateStabilityBenchmarkSweep}
                    onChange={() => {
                      setFieldValue(
                        "stabilityBenchmarkSweep",
                        values.stabilityBenchmarkSweep.map((checkbox) => ({
                          ...checkbox,
                          chartTag: !areAllCheckedStabilityBenchmarkSweep,
                        }))
                      );
                    }}
                  />
                }
              />
            </Box>
            {SweepVoltageChildren}
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default CheckedStabilityBenchmark;
