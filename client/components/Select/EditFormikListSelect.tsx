import { TEditFormikListSelect } from "@/types/Select/EditSelectType";
import { MenuItem, Select } from "@mui/material";
import React from "react";

const EditFormikListSelect = ({
  editableRow,
  options,
  fieldOption,
  id,
  name,
  value,
  // rowData,
  fieldValue,
  // subFieldData,
  editRowId,
  handleChange,
}: TEditFormikListSelect) => {
  // const handleDisplayRowData = () => {
  //   if (subFieldData) {
  //     const rowObject = rowData[fieldData];
  //     const rowDisplay = rowObject[subFieldData];
  //     return rowDisplay;
  //   }

  //   return rowData[fieldData];
  // };

  const handleValue = () => {
    if (fieldValue) {
      return value[fieldValue];
    }

    return value;
  };

  console.log("options", options);

  console.log("value", value);

  return (
    <>
      {editableRow === editRowId ? (
        <Select id={id} name={name} value={value} onChange={handleChange}>
          {options.map((item) => (
            <MenuItem key={item.id} value={item[fieldOption]}>
              {item[fieldOption]}
            </MenuItem>
          ))}
        </Select>
      ) : (
        value
      )}
    </>
  );
};

export default EditFormikListSelect;
