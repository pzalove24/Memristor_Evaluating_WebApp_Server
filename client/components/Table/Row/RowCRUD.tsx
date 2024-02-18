import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Select,
  TextField,
  MenuItem,
  Snackbar,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";

interface RowProps {
  row: { [key: string]: any };
  onDelete: (index: number) => void;
  onSave: (index: number, updatedValues: { [key: string]: any }) => void;
  fields: {
    [key: string]: {
      label: string;
      editable: boolean;
      type: string;
      options?: { value: any; label: string }[];
    };
  };
}

const RowCRUD = ({ row, onDelete, onSave, fields }: RowProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedValues, setEditedValues] = useState<{ [key: string]: any }>({
    ...row,
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  console.log('row', row)

  const handleSave = () => {
    onSave(row.id, editedValues);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedValues({ ...row });
  };

  const handleChange = (key: string, value: any) => {
    setEditedValues((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  const renderField = (key: string) => {
    const field = fields[key];
    const fieldValue = editedValues[key];

    if (!field?.editable) {
      return fieldValue;
    }

    if (isEditing) {
      if (field.type === "select") {
        return (
          <Select
            value={fieldValue}
            onChange={(e) => handleChange(key, e.target.value)}
          >
            {field.options?.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        );
      } else {
        return (
          <TextField
            value={fieldValue}
            onChange={(e) => handleChange(key, e.target.value)}
          />
        );
      }
    } else {
      return fieldValue;
    }
  };

  return (
    <TableRow>
      {Object.keys(row) ? (
        Object.keys(row).map((key) => (
          <TableCell key={key}>{renderField(key)}</TableCell>
        ))
      ) : (
        <>
          <TableCell>No Row</TableCell>
        </>
      )}
      <TableCell>
        {isEditing ? (
          <>
            <Button onClick={handleSave}>Save</Button>
            <Button onClick={handleCancel}>Cancel</Button>
          </>
        ) : (
          <>
            <Button onClick={handleEdit}>Edit</Button>
            <Button onClick={() => onDelete(row.id)}>Delete</Button>
          </>
        )}
      </TableCell>
    </TableRow>
  );
};

export default RowCRUD;
