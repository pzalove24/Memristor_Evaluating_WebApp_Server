import { TEditTextField } from "@/types/TextField/EditTextField";
import { TextField } from "@mui/material";
import React from "react";

const EditTextField = ({
  editableRow,
  rowData,
  fieldData,
  subFieldData,
  editedData,
  handleSetEditedData,
}: TEditTextField) => {
  const handleDisplayRowData = () => {
    if (subFieldData) {
      const rowObject = rowData[fieldData];
      const rowDisplay = rowObject[subFieldData];
      return rowDisplay;
    }

    return rowData[fieldData];
  };
  return (
    <>
      {editableRow === rowData.id ? (
        <TextField
          value={editedData}
          onChange={(e) => handleSetEditedData(e.target.value)}
        />
      ) : (
        handleDisplayRowData()
      )}
    </>
  );
};

export default EditTextField;
