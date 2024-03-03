import { TEditTextField } from "@/types/TextField/EditTextField";
import { TextField } from "@mui/material";
import React from "react";

const EditTextField = ({
  editableRow,
  rowData,
  fieldData,
  subFieldData,
  // editedData,
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

  console.log("handleDisplayRowData", handleDisplayRowData());
  return (
    <>
      {editableRow === rowData.id ? (
        <TextField
          id={handleDisplayRowData()}
          name={handleDisplayRowData()}
          value={handleDisplayRowData()}
          onChange={handleSetEditedData}
        />
      ) : (
        handleDisplayRowData()
      )}
    </>
  );
};

export default EditTextField;
