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
import { useFormik } from "formik";

// interface MyTableProps {
//   data: { [key: string]: any }[];
//   fields: {
//     [key: string]: {
//       label: string;
//       editable: boolean;
//       type: string;
//       options?: { value: any; label: string }[];
//     };
//   };
//   onDelete: (id: number) => void;
//   onSave: (id: number, updatedValues: { [key: string]: any }) => void;
//   onAdd: () => void;
// }

const TableInputCRUD = ({ data, onDelete, onSave, onAdd }) => {
  const [editableRow, setEditableRow] = useState<number | null>(null);
  const [addRow, setAddRow] = useState(false);
  const [editedName, setEditedName] = useState("");
  const [editedEmail, setEditedEmail] = useState("");

  const handleEdit = (id: number, name, email) => {
    setAddRow(false);
    setEditableRow(id);
    setEditedName(name);
    setEditedEmail(email);
    console.log("addRowAfter", addRow);
  };

  const handleSave = () => {
    onSave(editableRow, { name: editedName, email: editedEmail });
    setEditableRow(null);
  };

  const handleCancel = () => {
    setEditableRow(null);
    // Reset edited values to the original values
    setEditedName("");
    setEditedEmail("");
  };

  const handleAddOnTable = () => {
    console.log("addRowBefore", addRow);
    onAdd();
  };

  // useEffect(() => {
  //   const newData = data[data.length - 1];
  //   console.log("newdata", data); // Logging newData instead of data
  //   handleEdit(newData.id, newData.name, newData.email);
  // }, [data]);

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            {/* Render table rows */}
            {data.map((row, index) => (
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
                    options={data}
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
                      disabled={data.length === 1}
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
      <Button
        fullWidth
        onClick={handleAddOnTable}
        variant="contained"
        color="primary"
      >
        Add Input Setup
      </Button>
    </>
  );
};

export default TableInputCRUD;
