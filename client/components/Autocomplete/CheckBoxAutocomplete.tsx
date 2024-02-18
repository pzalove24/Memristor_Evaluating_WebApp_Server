import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { TCheckBoxAutocompleteProps } from "@/types/Autocomplete/AutocompleteType";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export const CheckBoxAutocomplete = ({
  label,
  placeholder,
  options,
  fieldDisplay,
  subFieldDisplay,
  onChange,
  value,
}: TCheckBoxAutocompleteProps) => {
  const handleFieldDisplay = (option: any, fieldDisplay: string) => {
    if (subFieldDisplay) {
      const optionFieldDisplay = option[fieldDisplay];
      return optionFieldDisplay[subFieldDisplay];
    }

    return option[fieldDisplay];
  };

  return (
    <Autocomplete
      multiple
      limitTags={1}
      id="checkboxes-tags-demo"
      options={options}
      disableCloseOnSelect
      value={value}
      onChange={(event, newValue: string[] | null) => onChange(newValue)}
      getOptionLabel={(option) => handleFieldDisplay(option, fieldDisplay)}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {handleFieldDisplay(option, fieldDisplay)}
        </li>
      )}
      fullWidth
      renderInput={(params) => (
        <TextField {...params} label={label} placeholder={placeholder} />
      )}
    />
  );
};
