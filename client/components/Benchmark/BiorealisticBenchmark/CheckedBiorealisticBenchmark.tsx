import * as React from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { CheckedBenchmarkProps } from "@/types";

const CheckedBiorealisticBenchmark = ({
  BenchmarkSelections,
  handleChangeChildren,
  handleChangeAllChildren,
}: CheckedBenchmarkProps) => {
  const BiologicalNeuronChildren = (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
      {BenchmarkSelections.BiologicalNeuron.map((element: any, index: any) => (
        <FormControlLabel
          key={index}
          label={Object.keys(element)[0]}
          control={
            <Checkbox
              name={Object.keys(element)[0]}
              checked={Object.values(element)[0] as boolean}
              onChange={(e) =>
                handleChangeChildren(e, "BiologicalNeuron", index)
              }
            />
          }
        />
      ))}
    </Box>
  );

  const BiologicalSynapseChildren = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        ml: 3,
      }}
    >
      {BenchmarkSelections.BiologicalSynapse.map((element: any, index: any) => (
        <FormControlLabel
          key={index}
          label={Object.keys(element)[0]}
          control={
            <Checkbox
              name={Object.keys(element)[0]}
              checked={Object.values(element)[0] as boolean}
              onChange={(e) =>
                handleChangeChildren(e, "BiologicalSynapse", index)
              }
            />
          }
        />
      ))}
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
                label="Biorealistic Benchmark for neuron"
                control={
                  <Checkbox
                    checked={BenchmarkSelections.BiologicalNeuron.every(
                      (item: any) => item[Object.keys(item)[0]]
                    )}
                    indeterminate={
                      !BenchmarkSelections.BiologicalNeuron.every(
                        (item: any) => item[Object.keys(item)[0]]
                      ) &&
                      !BenchmarkSelections.BiologicalNeuron.every(
                        (item: any) => !item[Object.keys(item)[0]]
                      )
                    }
                    onChange={(e) => handleChangeAllChildren(e, "BiologicalNeuron")}
                  />
                }
              />
            </Box>
            {BiologicalNeuronChildren}
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
                label="Biorealistic Benchmark for synapse"
                control={
                  <Checkbox
                    checked={BenchmarkSelections.BiologicalSynapse.every(
                      (item: any) => item[Object.keys(item)[0]]
                    )}
                    indeterminate={
                      !BenchmarkSelections.BiologicalSynapse.every(
                        (item: any) => item[Object.keys(item)[0]]
                      ) &&
                      !BenchmarkSelections.BiologicalSynapse.every(
                        (item: any) => !item[Object.keys(item)[0]]
                      )
                    }
                    onChange={(e) => handleChangeAllChildren(e, "BiologicalSynapse")}
                  />
                }
              />
            </Box>
            {BiologicalSynapseChildren}
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default CheckedBiorealisticBenchmark;
