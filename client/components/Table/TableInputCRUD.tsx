import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Button,
  Paper,
  Stack,
} from "@mui/material";
import EditSelect from "../Select/EditSelect";
import EditTextField from "../TextField/EditTextField";
import { FormikProps } from "formik";
import EditFormikListTextField from "../TextField/EditFormikListTextField";
import { BenchmarkInputSetupWithUnit } from "@/services/apis/benchmark/benchmarkSetup.api";

interface MyTableProps {
  data: FormikProps<{ data: BenchmarkInputSetupWithUnit[] }>;
  onDelete: (id: string) => void;
  // onSave: (id: string, updatedValues: { [key: string]: any }) => void;
  isLoading: boolean;
}

const TableInputCRUD = ({ data, onDelete, isLoading }: MyTableProps) => {
  const { initialValues, values, setValues, handleChange, resetForm } = data;
  const [editableRow, setEditableRow] = useState<string | null>(null);
  // const prevBenchmarkInputSetups = React.useRef(values);

  const handleAdd = () => {
    setValues({
      data: [...values.data, createEmptyInputSetup(values.data[0])],
    });
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

  const handleEdit = (id: string) => {
    setEditableRow(id);
  };

  const handleSave = () => {
    if (editableRow) {
      // onSave(editableRow, { name: editedName, benchmarkInputSetupName: editedEmail });
      setEditableRow(null);
    }
  };

  const handleCancel = (index: number) => {
    const newData = [...values.data];
    newData[index] = initialValues.data[index];
    setEditableRow(null);
    setValues({ data: newData });
  };

  if (isLoading) {
    return <>Loading</>;
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            {/* Render table rows */}
            {values.data.map((row: any, index: number) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                {/* <TableCell>
                  <EditSelect
                    editableRow={editableRow}
                    options={values}
                    fieldOption="name"
                    rowData={row}
                    fieldData="name"
                    editedData={editedName}
                    handleSetEditedData={setEditedName}
                  />
                </TableCell> */}
                <TableCell>
                  <EditFormikListTextField
                    editableRow={editableRow}
                    id={`id[${index}].voltageType.name`}
                    name={`data[${index}].voltageType.name`}
                    value={values.data[index].voltageType.name}
                    editRowId={values.data[index].id}
                    handleChange={handleChange}
                  />
                </TableCell>
                <TableCell>
                  <EditFormikListTextField
                    editableRow={editableRow}
                    id={`id[${index}].benchmarkInputSetupName`}
                    name={`data[${index}].benchmarkInputSetupName`}
                    value={values.data[index].benchmarkInputSetupName}
                    editRowId={values.data[index].id}
                    handleChange={handleChange}
                  />
                </TableCell>
                <TableCell>
                  <EditFormikListTextField
                    editableRow={editableRow}
                    id={`id[${index}].BenchmarkUnit.unitName`}
                    name={`data[${index}].BenchmarkUnit.unitName`}
                    value={values.data[index].BenchmarkUnit.unitName}
                    editRowId={values.data[index].id}
                    handleChange={handleChange}
                  />
                </TableCell>
                <TableCell>
                  <EditFormikListTextField
                    editableRow={editableRow}
                    id={`id[${index}].dataType.name`}
                    name={`data[${index}].dataType.name`}
                    value={values.data[index].dataType.name}
                    editRowId={values.data[index].id}
                    handleChange={handleChange}
                  />
                </TableCell>
                <TableCell>
                  <EditFormikListTextField
                    editableRow={editableRow}
                    id={`id[${index}].decimalNumber`}
                    name={`data[${index}].decimalNumber`}
                    value={values.data[index].decimalNumber}
                    editRowId={values.data[index].id}
                    handleChange={handleChange}
                  />
                </TableCell>
                <TableCell>
                  <EditFormikListTextField
                    editableRow={editableRow}
                    id={`id[${index}].exampleData`}
                    name={`data[${index}].exampleData`}
                    value={values.data[index].exampleData}
                    editRowId={values.data[index].id}
                    handleChange={handleChange}
                  />
                </TableCell>
                <TableCell>
                  <EditFormikListTextField
                    editableRow={editableRow}
                    id={`id[${index}].lowerLimit`}
                    name={`data[${index}].lowerLimit`}
                    value={values.data[index].lowerLimit}
                    editRowId={values.data[index].id}
                    handleChange={handleChange}
                  />
                </TableCell>
                <TableCell>
                  <EditFormikListTextField
                    editableRow={editableRow}
                    id={`id[${index}].upperLimit`}
                    name={`data[${index}].upperLimit`}
                    value={values.data[index].upperLimit}
                    editRowId={values.data[index].id}
                    handleChange={handleChange}
                  />
                </TableCell>
                <TableCell>
                  <EditFormikListTextField
                    editableRow={editableRow}
                    id={`id[${index}].stepIncreasing`}
                    name={`data[${index}].stepIncreasing`}
                    value={values.data[index].stepIncreasing}
                    editRowId={values.data[index].id}
                    handleChange={handleChange}
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
                          onClick={() => handleCancel(index)}
                        >
                          Cancel
                        </Button>
                      </>
                    ) : (
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleEdit(row.id)}
                      >
                        Edit
                      </Button>
                    )}
                    <Button
                      disabled={values.data.length === 1}
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
