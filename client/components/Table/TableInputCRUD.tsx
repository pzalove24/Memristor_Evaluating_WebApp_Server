import React, { useEffect, useState } from "react";
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
  Paper,
  TableFooter,
  Stack,
} from "@mui/material";
import EditSelect from "../Select/EditSelect";
import EditTextField from "../TextField/EditTextField";
import { FormikProps } from "formik";

interface MyTableProps {
  data: FormikProps<any>;
  onDelete: (id: number) => void;
  onSave: (id: number, updatedValues: { [key: string]: any }) => void;
}

const TableInputCRUD = ({ data, onDelete, onSave }: MyTableProps) => {
  const { values, setValues } = data;
  const [editableRow, setEditableRow] = useState<number | null>(null);
  const [addRow, setAddRow] = useState(false);
  const [editedName, setEditedName] = useState("");
  const [editedEmail, setEditedEmail] = useState("");
  // const prevBenchmarkInputSetups = React.useRef(values);

  const handleAdd = () => {
    setValues([...values, createEmptyInputSetup(values[0])]);
  };

  const createEmptyInputSetup = (obj: any) => {
    const newObj: any = {};
    for (const key in obj) {
      if (key === "id") {
        newObj[key] = `New Setup ${Math.random()}`;
      } else if (typeof obj[key] === "string") {
        newObj[key] = "";
      } else if (typeof obj[key] === "number") {
        newObj[key] = null;
      }
    }
    return newObj;
  };

  const handleEdit = (id: number, name: any, email: any) => {
    setEditableRow(id);
    setEditedName(name);
    setEditedEmail(email);
  };

  const handleSave = () => {
    if (editableRow) {
      onSave(editableRow, { name: editedName, email: editedEmail });
      setEditableRow(null);
    }
  };

  console.log("editableRow", editableRow);
  console.log("editedName", editedEmail);
  console.log("editableRow", editableRow);

  const handleCancel = () => {
    setEditableRow(null);
    setEditedName("");
    setEditedEmail("");
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            {/* Render table rows */}
            {values.map((row: any, index: number) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                {/* <TableCell>
                  <EditTextField
                    editableRow={editableRow}
                    rowData={row}
                    fieldData="email"
                    editedData={editedEmail}
                    handleSetEditedData={setEditedEmail}
                  />
                </TableCell> */}
                <TableCell>
                  <EditSelect
                    editableRow={editableRow}
                    options={values}
                    fieldOption="name"
                    rowData={row}
                    fieldData="name"
                    editedData={editedName}
                    handleSetEditedData={setEditedName}
                  />
                </TableCell>
                <TableCell>
                  <EditTextField
                    editableRow={editableRow}
                    rowData={row}
                    fieldData="email"
                    editedData={editedEmail}
                    handleSetEditedData={setEditedEmail}
                  />
                </TableCell>
                <TableCell>
                  <Stack direction="row" spacing={1}>
                    {editableRow === row.id ? (
                      <>
                        <Button
                          variant="contained"
                          color="info"
                          onClick={handleSave}
                        >
                          Save
                        </Button>
                        <Button
                          variant="contained"
                          color="inherit"
                          onClick={handleCancel}
                        >
                          Cancel
                        </Button>
                      </>
                    ) : (
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleEdit(row.id, row.name, row.email)}
                      >
                        Edit
                      </Button>
                    )}
                    <Button
                      disabled={values.length === 1}
                      variant="contained"
                      color="error"
                      onClick={() => onDelete(row.id)}
                    >
                      Delete
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button fullWidth onClick={handleAdd} variant="contained" color="primary">
        Add Input Setup
      </Button>
    </>
  );
};

export default TableInputCRUD;
