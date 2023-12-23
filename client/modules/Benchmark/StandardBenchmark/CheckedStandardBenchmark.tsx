import * as React from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import {
  DefaultBenchmarkChartType,
  DefaultBenchmarkLabel,
} from "@/types/chartType";
import { FormikProps } from "formik";
import { TStandardBenchmarkType } from "./StandardBenchmarkPartOne";

type TCheckedStandardBenchmark = {
  BenchmarkChartFormik: FormikProps<TStandardBenchmarkType>;
};

const CheckedStandardBenchmark = ({
  BenchmarkChartFormik,
}: TCheckedStandardBenchmark) => {
  const { values, handleChange, setFieldValue } = BenchmarkChartFormik;

  //standardBenchmarkPulse handle checkbox
  const handleCheckboxChangeStandardBenchmarkPulse = (index: number) => {
    const checkboxes = [...values.standardBenchmarkPulse];
    checkboxes[index].chartTag = !checkboxes[index].chartTag;
    setFieldValue("standardBenchmarkPulse", checkboxes);
  };

  const areAllCheckedStandardBenchmarkPulse =
    values.standardBenchmarkPulse.every((checkbox) => checkbox.chartTag);
  const areSomeCheckedStandardBenchmarkPulse =
    values.standardBenchmarkPulse.some((checkbox) => checkbox.chartTag);
  const indeterminateStandardBenchmarkPulse =
    !areAllCheckedStandardBenchmarkPulse &&
    areSomeCheckedStandardBenchmarkPulse;

  //standardBenchmarkSweep handle checkbox

  const handleCheckboxChangeStandardBenchmarkSweep = (index: number) => {
    const checkboxes = [...values.standardBenchmarkSweep];
    checkboxes[index].chartTag = !checkboxes[index].chartTag;
    setFieldValue("standardBenchmarkSweep", checkboxes);
  };

  const areAllCheckedStandardBenchmarkSweep =
    values.standardBenchmarkSweep.every((checkbox) => checkbox.chartTag);
  const areSomeCheckedStandardBenchmarkSweep =
    values.standardBenchmarkSweep.some((checkbox) => checkbox.chartTag);
  const indeterminateStandardBenchmarkSweep =
    !areAllCheckedStandardBenchmarkSweep &&
    areSomeCheckedStandardBenchmarkSweep;

  // render checkbox
  const PulseVoltageChildren = (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
      {values.standardBenchmarkPulse.map(
        (chart: DefaultBenchmarkChartType, index: number) => (
          <FormControlLabel
            key={index}
            label={chart.title}
            control={
              <Checkbox
                name={chart.title}
                checked={chart.chartTag}
                onChange={() =>
                  handleCheckboxChangeStandardBenchmarkPulse(index)
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
      {values.standardBenchmarkSweep.map(
        (chart: DefaultBenchmarkChartType, index: number) => (
          <FormControlLabel
            key={index}
            label={chart.title}
            control={
              <Checkbox
                name={chart.title}
                checked={chart.chartTag}
                onChange={() =>
                  handleCheckboxChangeStandardBenchmarkSweep(index)
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
                label={DefaultBenchmarkLabel.StandardBenchmarkPulseChart}
                control={
                  <Checkbox
                    checked={areAllCheckedStandardBenchmarkPulse}
                    indeterminate={indeterminateStandardBenchmarkPulse}
                    onChange={() => {
                      setFieldValue(
                        "standardBenchmarkPulse",
                        values.standardBenchmarkPulse.map((checkbox) => ({
                          ...checkbox,
                          chartTag: !areAllCheckedStandardBenchmarkPulse,
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
                label={DefaultBenchmarkLabel.StandardBenchmarkSweepChart}
                control={
                  <Checkbox
                    checked={areAllCheckedStandardBenchmarkSweep}
                    indeterminate={indeterminateStandardBenchmarkSweep}
                    onChange={() => {
                      setFieldValue(
                        "standardBenchmarkSweep",
                        values.standardBenchmarkSweep.map((checkbox) => ({
                          ...checkbox,
                          chartTag: !areAllCheckedStandardBenchmarkSweep,
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

export default CheckedStandardBenchmark;
