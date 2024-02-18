import React, { useState } from "react";
import { Formik, Form, Field, FieldArray, useFormik } from "formik";
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
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import RowCRUD from "./Row/RowCRUD";

// interface MyTableProps {
//   data: { [key: string]: any }[];
//   onDelete: (index: number) => void;
//   onSave: (index: number, updatedValues: { [key: string]: any }) => void;
//   fields: {
//     [key: string]: {
//       label: string;
//       editable: boolean;
//       type: string;
//       options?: { value: any; label: string }[];
//     };
//   };
// }

interface MyTableProps {
  data: { [key: string]: any }[];
  fields: {
    [key: string]: {
      label: string;
      editable: boolean;
      type: string;
      options?: { value: any; label: string }[];
    };
  };
  onDelete: (id: number) => void;
  onSave: (id: number, updatedValues: { [key: string]: any }) => void;
  onAdd: () => void;
}

const TableCRUD = ({ data, fields, onDelete, onSave, onAdd }: MyTableProps) => {
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  const handleCloseSnackbar = () => {
    setIsSnackbarOpen(false);
  };

  const handleSave = (id: number, updatedValues: { [key: string]: any }) => {
    onSave(id, updatedValues);
    setIsSnackbarOpen(true);
  };

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {data[0] ? (
                Object.keys(data[0]).map((key) => (
                  <TableCell key={key}>{key}</TableCell>
                ))
              ) : (
                <TableCell>No Data</TableCell>
              )}
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <RowCRUD
                key={row.id}
                row={row}
                onDelete={onDelete}
                onSave={handleSave}
                fields={fields}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button onClick={onAdd} variant="contained" color="primary">Add</Button>
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
      >
        <MuiAlert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          Edit saved successfully!
        </MuiAlert>
      </Snackbar>
    </>
  );
};

export default TableCRUD;
