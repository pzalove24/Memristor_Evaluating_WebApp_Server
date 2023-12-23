import * as React from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { FormikProps } from "formik";
import { TBiorealisticBenchmarkType } from "./BiorealisticBenchmarkPartOne";
import { DefaultBenchmarkChartType, DefaultBenchmarkLabel } from "@/types/chartType";

type TCheckedBiorealisticBenchmark = {
  BenchmarkChartFormik: FormikProps<TBiorealisticBenchmarkType>;
};

const CheckedBiorealisticBenchmark = ({
  BenchmarkChartFormik,
}: TCheckedBiorealisticBenchmark) => {
  const { values, handleChange, setFieldValue } = BenchmarkChartFormik;

  //biorealisticBenchmarkBiologicalNeuron handle checkbox
  const handleCheckboxChangeBiorealisticBenchmarkBiologicalNeuron = (index: number) => {
    const checkboxes = [...values.biorealisticBenchmarkBiologicalNeuron];
    checkboxes[index].chartTag = !checkboxes[index].chartTag;
    setFieldValue("biorealisticBenchmarkBiologicalNeuron", checkboxes);
  };

  const areAllCheckedBiorealisticBenchmarkBiologicalNeuron =
    values.biorealisticBenchmarkBiologicalNeuron.every((checkbox) => checkbox.chartTag);
  const areSomeCheckedBiorealisticBenchmarkBiologicalNeuron =
    values.biorealisticBenchmarkBiologicalNeuron.some((checkbox) => checkbox.chartTag);
  const indeterminateBiorealisticBenchmarkBiologicalNeuron =
    !areAllCheckedBiorealisticBenchmarkBiologicalNeuron &&
    areSomeCheckedBiorealisticBenchmarkBiologicalNeuron;

  //biorealisticBenchmarkBiologicalSynapse handle checkbox

  const handleCheckboxChangeBiorealisticBenchmarkBiologicalSynapse = (index: number) => {
    const checkboxes = [...values.biorealisticBenchmarkBiologicalSynapse];
    checkboxes[index].chartTag = !checkboxes[index].chartTag;
    setFieldValue("biorealisticBenchmarkBiologicalSynapse", checkboxes);
  };

  const areAllCheckedBiorealisticBenchmarkBiologicalSynapse =
    values.biorealisticBenchmarkBiologicalSynapse.every((checkbox) => checkbox.chartTag);
  const areSomeCheckedBiorealisticBenchmarkBiologicalSynapse =
    values.biorealisticBenchmarkBiologicalSynapse.some((checkbox) => checkbox.chartTag);
  const indeterminateBiorealisticBenchmarkBiologicalSynapse =
    !areAllCheckedBiorealisticBenchmarkBiologicalSynapse &&
    areSomeCheckedBiorealisticBenchmarkBiologicalSynapse;

  // render checkbox
  const BiologicalNeuronVoltageChildren = (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
      {values.biorealisticBenchmarkBiologicalNeuron.map(
        (chart: DefaultBenchmarkChartType, index: number) => (
          <FormControlLabel
            key={index}
            label={chart.title}
            control={
              <Checkbox
                name={chart.title}
                checked={chart.chartTag}
                onChange={() =>
                  handleCheckboxChangeBiorealisticBenchmarkBiologicalNeuron(index)
                }
              />
            }
          />
        )
      )}
    </Box>
  );

  const BiologicalSynapseVoltageChildren = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        ml: 3,
      }}
    >
      {values.biorealisticBenchmarkBiologicalSynapse.map(
        (chart: DefaultBenchmarkChartType, index: number) => (
          <FormControlLabel
            key={index}
            label={chart.title}
            control={
              <Checkbox
                name={chart.title}
                checked={chart.chartTag}
                onChange={() =>
                  handleCheckboxChangeBiorealisticBenchmarkBiologicalSynapse(index)
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
                label={DefaultBenchmarkLabel.BiorealisticBenchmarkBiologicalNeuronChart}
                control={
                  <Checkbox
                    checked={areAllCheckedBiorealisticBenchmarkBiologicalNeuron}
                    indeterminate={indeterminateBiorealisticBenchmarkBiologicalNeuron}
                    onChange={() => {
                      setFieldValue(
                        "biorealisticBenchmarkBiologicalNeuron",
                        values.biorealisticBenchmarkBiologicalNeuron.map((checkbox) => ({
                          ...checkbox,
                          chartTag: !areAllCheckedBiorealisticBenchmarkBiologicalNeuron,
                        }))
                      );
                    }}
                  />
                }
              />
            </Box>
            {BiologicalNeuronVoltageChildren}
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
                label={DefaultBenchmarkLabel.BiorealisticBenchmarkBiologicalSynapseChart}
                control={
                  <Checkbox
                    checked={areAllCheckedBiorealisticBenchmarkBiologicalSynapse}
                    indeterminate={indeterminateBiorealisticBenchmarkBiologicalSynapse}
                    onChange={() => {
                      setFieldValue(
                        "biorealisticBenchmarkBiologicalSynapse",
                        values.biorealisticBenchmarkBiologicalSynapse.map((checkbox) => ({
                          ...checkbox,
                          chartTag: !areAllCheckedBiorealisticBenchmarkBiologicalSynapse,
                        }))
                      );
                    }}
                  />
                }
              />
            </Box>
            {BiologicalSynapseVoltageChildren}
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default CheckedBiorealisticBenchmark;
