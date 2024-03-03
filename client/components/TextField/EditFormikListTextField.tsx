import { BenchmarkInputSetupWithUnit } from "@/services/apis/benchmark/benchmarkSetup.api";
import {
  TEditFormikListTextField,
  TEditTextField,
} from "@/types/TextField/EditTextField";
import { TextField } from "@mui/material";
import React from "react";

const EditFormikListTextField = ({
  editableRow,
  id,
  type,
  name,
  value,
  //   index,
  editRowId,
  handleChange,
}: TEditFormikListTextField<BenchmarkInputSetupWithUnit[]>) => {
  console.log("value", value);

  return (
    <>
      {editableRow === editRowId ? (
        <TextField
          id={id}
          type={type ? type : undefined}
          name={name}
          value={value}
          onChange={handleChange}
        />
      ) : (
        value
      )}
    </>
  );
};

export default EditFormikListTextField;
