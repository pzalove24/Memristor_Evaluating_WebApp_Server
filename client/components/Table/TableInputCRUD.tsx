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
  LinearProgress,
  TableHead,
} from "@mui/material";
import EditSelect from "../Select/EditSelect";
import EditTextField from "../TextField/EditTextField";
import { FormikProps } from "formik";
import EditFormikListTextField from "../TextField/EditFormikListTextField";
import { BenchmarkInputSetupWithUnit } from "@/services/apis/benchmark/benchmarkSetup.api";
import { TDialogInputCRUDFormik } from "@/types/Dialog/DialogType";
import EditFormikListSelect from "../Select/EditFormikListSelect";
import { columnDialogInput } from "@/types/benchmarkSetupType/benchmarkSetupTabsType";
import { usePostCreateBenchmarkInputBenchmarkInputSetup } from "@/services/queries/benchmark/benchmarkSetup/benchmarkSetup.mutate";

interface MyTableProps {
  data: FormikProps<TDialogInputCRUDFormik>;
  onDelete: (id: string) => void;
  columns: columnDialogInput[];
  onAdd: () => void;
  // onSave: (id: string, updatedValues: { [key: string]: any }) => void;
}

const TableInputCRUD = ({ data, onDelete, columns,onAdd }: MyTableProps) => {
  const {
    initialValues,
    values,
    setValues,
    handleChange,
    setFieldValue,
    handleBlur,
    isValid,
    touched,
    errors,
  } = data;
  const [editableRow, setEditableRow] = useState<string | null>(null);



  // const createEmptyInputSetup = (obj: any) => {
  //   console.log("obj", obj);
  //   const newObj: any = {};
  //   for (const key in obj) {
  //     if (key === "id") {
  //       newObj[key] = `New Setup ${Math.random()}`;
  //     } else if (typeof obj[key] === "string") {
  //       newObj[key] = "";
  //     } else if (typeof obj[key] === "number") {
  //       newObj[key] = null;
  //     } else if (typeof obj[key] === "object") {
  //       if (key === "id") {
  //         newObj[key] = `New Setup ${Math.random()}`;
  //       } else if (typeof obj[key] === "string") {
  //         newObj[key] = "test";
  //       } else if (typeof obj[key] === "number") {
  //         newObj[key] = null;
  //       }
  //     }
  //   }
  //   console.log("newobj", newObj);
  //   return newObj;
  // };

  const handleEdit = (id: string) => {
    setEditableRow(id);
  };

  const handleSave = () => {
    if (editableRow) {
      // onSave(editableRow, { name: editedName, benchmarkInputSetupName: editedEmail });
      setEditableRow(null);
    }
    // prevBenchmarkInputSetups.current = values;
  };

  const handleCancel = (index: number) => {
    // const newData = [...values.data];
    // newData[index] = prevBenchmarkInputSetups.current.data[index];
    setEditableRow(null);
    // console.log('newData',newData)
    // console.log('initialValues',initialValues)
    // setFieldValue("data", newData);
  };

  const handleSelectDataTypeChange = (
    event: React.ChangeEvent<{ value: unknown }>,
    index: number
  ) => {
    const selectedValue = event.target.value;
    const selectedOption = values.dataType?.find(
      (option) => option.name === selectedValue
    );
    setFieldValue(`data[${index}].dataType`, selectedOption);
    setFieldValue(`data[${index}].dataTypeId`, selectedOption?.id);
  };

  const handleSelectUnitChange = (
    event: React.ChangeEvent<{ value: unknown }>,
    index: number
  ) => {
    const selectedValue = event.target.value;
    const selectedOption = values.benchmarkUnit?.find(
      (option) => option.unitName === selectedValue
    );
    setFieldValue(`data[${index}].benchmarkUnit`, selectedOption);
    setFieldValue(`data[${index}].benchmarkUnitId`, selectedOption?.id);
  };

  // console.log("touched", touched);
  // console.log("errors", errors.data);
  // // console.log("prevBenchmarkInputSetups", prevBenchmarkInputSetups);
  // console.log("values", values);

  // touched.data[index].benchmarkInputSetupName &&
  // Boolean(errors.data[index].b)

  return (
    <>
      <TableContainer component={Paper}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Render table rows */}
            {values.data.map(
              (row: BenchmarkInputSetupWithUnit, index: number) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.voltageType.name}</TableCell>
                  <TableCell>
                    <EditFormikListTextField
                      editableRow={editableRow}
                      id={`id[${index}].benchmarkInputSetupName`}
                      name={`data[${index}].benchmarkInputSetupName`}
                      value={values.data[index].benchmarkInputSetupName}
                      editRowId={values.data[index].id}
                      handleChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        errors.data
                          ? Boolean(
                              (errors.data[index] as any)
                                ?.benchmarkInputSetupName
                            )
                          : undefined
                      }
                      helperText={
                        errors.data
                          ? (errors.data[index] as any)?.benchmarkInputSetupName
                          : undefined
                      }
                      // error={
                      //   touched.data && errors.data
                      //     ? touched.data[index]?.benchmarkInputSetupName &&
                      //       Boolean(
                      //         (errors.data[index] as any)
                      //           ?.benchmarkInputSetupName
                      //       )
                      //     : undefined
                      // }
                      // helperText={
                      //   touched.data && errors.data
                      //     ? touched.data[index]?.benchmarkInputSetupName &&
                      //       (errors.data[index] as any)?.benchmarkInputSetupName
                      //     : undefined
                      // }
                    />
                  </TableCell>
                  <TableCell>
                    <EditFormikListSelect
                      editableRow={editableRow}
                      options={values.benchmarkUnit ? values.benchmarkUnit : []}
                      fieldOption="unitName"
                      id={`id[${index}].benchmarkUnit`}
                      name={`data[${index}].benchmarkUnit`}
                      value={values.data[index].benchmarkUnit.unitName}
                      editRowId={values.data[index].id}
                      handleChange={(event) =>
                        handleSelectUnitChange(event, index)
                      }
                    />
                  </TableCell>
                  {/* <TableCell>
                    <EditFormikListTextField
                      editableRow={editableRow}
                      id={`id[${index}].benchmarkUnit.unitName`}
                      name={`data[${index}].benchmarkUnit.unitName`}
                      value={values.data[index].benchmarkUnit.unitName}
                      editRowId={values.data[index].id}
                      handleChange={handleChange}
                    />
                  </TableCell> */}
                  <TableCell>
                    <EditFormikListSelect
                      editableRow={editableRow}
                      options={values.dataType ? values.dataType : []}
                      fieldOption="name"
                      id={`id[${index}].dataType`}
                      name={`data[${index}].dataType`}
                      value={values.data[index].dataType.name}
                      editRowId={values.data[index].id}
                      handleChange={(event) =>
                        handleSelectDataTypeChange(event, index)
                      }
                    />
                  </TableCell>
                  {/* <TableCell>
                    <EditFormikListTextField
                      editableRow={editableRow}
                      id={`id[${index}].dataType.name`}
                      name={`data[${index}].dataType.name`}
                      value={values.data[index].dataType.name}
                      editRowId={values.data[index].id}
                      handleChange={handleChange}
                    />
                  </TableCell> */}
                  <TableCell>
                    <EditFormikListTextField
                      editableRow={editableRow}
                      id={`id[${index}].decimalNumber`}
                      type="number"
                      name={`data[${index}].decimalNumber`}
                      value={values.data[index].decimalNumber}
                      editRowId={values.data[index].id}
                      handleChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        errors.data
                          ? Boolean((errors.data[index] as any)?.decimalNumber)
                          : undefined
                      }
                      helperText={
                        errors.data
                          ? (errors.data[index] as any)?.decimalNumber
                          : undefined
                      }
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
                      onBlur={handleBlur}
                      error={
                        errors.data
                          ? Boolean((errors.data[index] as any)?.exampleData)
                          : undefined
                      }
                      helperText={
                        errors.data
                          ? (errors.data[index] as any)?.exampleData
                          : undefined
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <EditFormikListTextField
                      editableRow={editableRow}
                      id={`id[${index}].lowerLimit`}
                      type="number"
                      name={`data[${index}].lowerLimit`}
                      value={values.data[index].lowerLimit}
                      editRowId={values.data[index].id}
                      handleChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        errors.data
                          ? Boolean((errors.data[index] as any)?.lowerLimit)
                          : undefined
                      }
                      helperText={
                        errors.data
                          ? (errors.data[index] as any)?.lowerLimit
                          : undefined
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <EditFormikListTextField
                      editableRow={editableRow}
                      id={`id[${index}].upperLimit`}
                      type="number"
                      name={`data[${index}].upperLimit`}
                      value={values.data[index].upperLimit}
                      editRowId={values.data[index].id}
                      handleChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        errors.data
                          ? Boolean((errors.data[index] as any)?.upperLimit)
                          : undefined
                      }
                      helperText={
                        errors.data
                          ? (errors.data[index] as any)?.upperLimit
                          : undefined
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <EditFormikListTextField
                      editableRow={editableRow}
                      id={`id[${index}].stepIncreasing`}
                      type="number"
                      name={`data[${index}].stepIncreasing`}
                      value={values.data[index].stepIncreasing}
                      editRowId={values.data[index].id}
                      handleChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        errors.data
                          ? Boolean((errors.data[index] as any)?.stepIncreasing)
                          : undefined
                      }
                      helperText={
                        errors.data
                          ? (errors.data[index] as any)?.stepIncreasing
                          : undefined
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={1}>
                      {editableRow === row.id ? (
                        <>
                          <Button
                            disabled={!isValid}
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
                        // disabled={values.data.length === 1}
                        variant="contained"
                        color="error"
                        onClick={() => onDelete(row.id)}
                      >
                        Delete
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Button fullWidth onClick={onAdd} variant="contained" color="primary">
        Add Input Setup
      </Button>
    </>
  );
};

export default TableInputCRUD;
