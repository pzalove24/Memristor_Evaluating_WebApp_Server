import React, { useRef, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Button,
  Paper,
  Stack,
  TableHead,
} from "@mui/material";
import { FormikProps } from "formik";
import EditFormikListTextField from "../TextField/EditFormikListTextField";
import { BenchmarkInputSetupWithUnit } from "@/services/apis/benchmark/benchmarkSetup.api";
import { TDialogInputCRUDFormik } from "@/types/Dialog/DialogType";
import EditFormikListSelect from "../Select/EditFormikListSelect";
import { columnDialogInput } from "@/types/benchmarkSetupType/benchmarkSetupTabsType";
import {
  DragDropContext,
  Draggable,
  DraggableProvided,
  DropResult,
  Droppable,
  DroppableProvided,
  ResponderProvided,
} from "react-beautiful-dnd";
import ReorderIcon from "@mui/icons-material/Reorder";

interface MyTableProps {
  data: FormikProps<TDialogInputCRUDFormik>;
  onDelete: (id: string) => void;
  columns: columnDialogInput[];
  onAdd: () => void;
  // onSave: (id: string, updatedValues: { [key: string]: any }) => void;
}

const TableInputCRUD = ({ data, onDelete, columns, onAdd }: MyTableProps) => {
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

  //store default data of edited row
  const previousEditRow = useRef<BenchmarkInputSetupWithUnit>();

  // cache the items provided via props in state for purposes of this demo
  // const [localItems, setLocalItems] = useState<any>(
  //   tableData.map((item: any) => ({ ...item, id: generateid() }))
  // );

  // normally one would commit/save any order changes via an api call here...
  const handleDragEnd = (result: DropResult, provided?: ResponderProvided) => {
    if (!result.destination) {
      return;
    }
    if (result.destination.index === result.source.index) {
      return;
    }

    const temp = [...values.data];
    const d = temp[result.destination!.index];
    temp[result.destination!.index] = temp[result.source.index];
    temp[result.source.index] = d;

    setFieldValue("data", temp);

    // setLocalItems((prev: any) => {
    //   const temp = [...prev];
    //   const d = temp[result.destination!.index];
    //   temp[result.destination!.index] = temp[result.source.index];
    //   temp[result.source.index] = d;
    //   return temp;
    // });
  };

  const handleEdit = (id: string, row: BenchmarkInputSetupWithUnit) => {
    setEditableRow(id);
    previousEditRow.current = row;
  };

  const handleSave = () => {
    if (editableRow) {
      setEditableRow(null);
    }
  };

  const handleCancel = (index: number) => {
    if (previousEditRow.current) {
      setFieldValue(`data[${index}]`, previousEditRow.current);
    }
    setEditableRow(null);
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

  return (
    <>
      <TableContainer component={Paper}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell align="left">&nbsp;</TableCell>
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
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="ROOT" type="group">
              {(provided: DroppableProvided) => (
                <TableBody ref={provided.innerRef} {...provided.droppableProps}>
                  {/* Render table rows */}
                  {values.data.map(
                    (row: BenchmarkInputSetupWithUnit, index: number) => (
                      <Draggable
                        key={row.id}
                        draggableId={row.id}
                        index={index}
                      >
                        {(provided: DraggableProvided, snapshot) => (
                          <TableRow
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            style={{
                              ...provided.draggableProps.style,
                              background: snapshot.isDragging
                                ? "rgba(245,245,245, 0.75)"
                                : "none",
                            }}
                            // key={row.id}
                          >
                            <TableCell align="left">
                              <div {...provided.dragHandleProps}>
                                <ReorderIcon />
                              </div>
                            </TableCell>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.voltageType.name}</TableCell>
                            <TableCell>
                              <EditFormikListTextField
                                editableRow={editableRow}
                                id={`id[${index}].benchmarkInputSetupName`}
                                name={`data[${index}].benchmarkInputSetupName`}
                                value={
                                  values.data[index].benchmarkInputSetupName
                                }
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
                                    ? (errors.data[index] as any)
                                        ?.benchmarkInputSetupName
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
                                options={
                                  values.benchmarkUnit
                                    ? values.benchmarkUnit
                                    : []
                                }
                                fieldOption="unitName"
                                id={`id[${index}].benchmarkUnit`}
                                name={`data[${index}].benchmarkUnit`}
                                value={
                                  values.data[index].benchmarkUnit.unitName
                                }
                                editRowId={values.data[index].id}
                                handleChange={(event) =>
                                  handleSelectUnitChange(event, index)
                                }
                              />
                            </TableCell>
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
                                    ? Boolean(
                                        (errors.data[index] as any)
                                          ?.decimalNumber
                                      )
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
                                    ? Boolean(
                                        (errors.data[index] as any)?.exampleData
                                      )
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
                                    ? Boolean(
                                        (errors.data[index] as any)?.lowerLimit
                                      )
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
                                    ? Boolean(
                                        (errors.data[index] as any)?.upperLimit
                                      )
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
                                    ? Boolean(
                                        (errors.data[index] as any)
                                          ?.stepIncreasing
                                      )
                                    : undefined
                                }
                                helperText={
                                  errors.data
                                    ? (errors.data[index] as any)
                                        ?.stepIncreasing
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
                                    onClick={() => handleEdit(row.id, row)}
                                  >
                                    Edit
                                  </Button>
                                )}
                                <Button
                                  variant="contained"
                                  color="error"
                                  onClick={() => onDelete(row.id)}
                                >
                                  Delete
                                </Button>
                              </Stack>
                            </TableCell>
                          </TableRow>
                        )}
                      </Draggable>
                    )
                  )}
                  {provided.placeholder}
                </TableBody>
              )}
            </Droppable>
          </DragDropContext>
        </Table>
      </TableContainer>
      <Button fullWidth onClick={onAdd} variant="contained" color="primary">
        Add Input Setup
      </Button>
    </>
  );
};

export default TableInputCRUD;
