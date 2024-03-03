import { TEditSelect } from "@/types/Select/EditSelectType";
import { MenuItem, Select } from "@mui/material";
import React from "react";

const EditFormikListSelect = ({
  editableRow,
  options,
  fieldOption,
  rowData,
  fieldData,
  subFieldData,
  editedData,
  handleSetEditedData,
}: TEditFormikListSelect) => {
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
        <Select
          value={editedData}
          onChange={(e) => handleSetEditedData(e.target.value)}
        >
          {options.map((item) => (
            <MenuItem key={item.id} value={item[fieldOption]}>
              {item[fieldOption]}
            </MenuItem>
          ))}
        </Select>
      ) : (
        handleDisplayRowData()
      )}
    </>
  );
};

export default EditFormikListSelect;
