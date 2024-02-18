import {
  BenchmarkInputSetupWithUnit,
  BenchmarkInputWithInputSetup,
} from "@/services/benchmark/benchmarkSetup.service";
import { TTextFieldCRUD } from "@/types/TextField/TextFieldType";
import { Grid, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { BenchmarkInputSetup } from "../../../server/shared/prismaTypes";

const TextFieldInputSetupCRUD = ({
  dataList,
}: TTextFieldCRUD<BenchmarkInputSetupWithUnit[]>) => {
  return (
    <React.Fragment>
      {dataList.map((data, index: number) => (
        <Grid
          container
          direction="row"
          m={3}
          pl={3}
          alignItems="center"
          rowSpacing={0.5}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          key={index}
        >
          <Grid item xs>
            <Typography>{data.benchmarkInputSetupName}</Typography>
          </Grid>
          <Grid item xs>
            <Typography>{data.BenchmarkUnit.unitName}</Typography>
          </Grid>
          <Grid item xs>
            <Typography>{data.dataType.name}</Typography>
          </Grid>
          <Grid item xs>
            <Typography>{data.decimalNumber}</Typography>
          </Grid>
          <Grid item xs>
            <Typography>{data.exampleData}</Typography>
          </Grid>
          <Grid item xs>
            <Typography>{data.upperLimit}</Typography>
          </Grid>
          <Grid item xs>
            <Typography>{data.lowerLimit}</Typography>
          </Grid>
          <Grid item xs>
            <Typography>{data.stepIncreasing}</Typography>
          </Grid>
          <Grid item xs>
            <TextField label={data.dataType.name} />
          </Grid>
        </Grid>
      ))}
    </React.Fragment>
  );
};

export default TextFieldInputSetupCRUD;
