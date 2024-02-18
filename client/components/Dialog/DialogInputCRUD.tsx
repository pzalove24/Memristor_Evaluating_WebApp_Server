import * as React from "react";
import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TDialogInputCRUD } from "@/types/Dialog/DialogType";
import {
  BenchmarkInputWithInputSetup,
  getBenchmarkInputSetups,
} from "@/services/apis/benchmark/benchmarkSetup.api";
import TextFieldInputSetupCRUD from "../TextField/TextFieldInputSetupCRUD";
import { useQuery } from "@tanstack/react-query";
import { useGetBenchmarkInputSetups } from "@/services/queries/benchmark/benchmarkSetup/benchmarkSetup.query";
import TableCRUD from "../Table/TableCRUD";

const testData = [
  { id: 1, name: "John", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane", email: "jane@example.com", role: "User" },
  { id: 3, name: "Doe", email: "doe@example.com", role: "User" },
];

const DialogInputCRUD = ({
  open,
  handleClose,
  setUpData,
}: TDialogInputCRUD<BenchmarkInputWithInputSetup>) => {
  const { data: listBenchmarkInputSetup, isLoading } =
    useGetBenchmarkInputSetups(setUpData.id);

  console.log("listdata", listBenchmarkInputSetup);

  const [data, setData] = React.useState(testData);
  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  if (isLoading) {
    return <>Loading</>;
  }

  const handleAdd = () => {
    setData([...data, createEmptyRow()]);
  };

  const createEmptyRow = () => {
    const emptyRow: { [key: string]: any } = {};
    Object.keys(fields).forEach((key) => {
      emptyRow[key] = ""; // Initialize each field with an empty string
    });
    return emptyRow;
  };

  const handleDelete = (id: number) => {
    const newData = data.filter((row) => row.id !== id);
    console.log("id", id);
    console.log("newData", newData);
    setData(newData);
  };

  const handleSave = (id: number, updatedValues) => {
    // Update the data with the new values for the row with the specified ID
    const newData = data.map((row) => {
      if (row.id === id) {
        return { ...row, ...updatedValues };
      }
      return row;
    });
    setData(newData); // Assuming testData is your state variable storing the data
  };

  const fields = {
    id: { label: "New", editable: true, type: "textField" },
    name: { label: "Name", editable: true, type: "textField" },
    email: {
      label: "Email",
      editable: true,
      type: "select",
      options: [
        { value: "john@example.com", label: "john@example.com" },
        { value: "alice@example.com", label: "alice@example.com" },
        { value: "bob@example.com", label: "bob@example.com" },
        // Add more options as needed
      ],
    },
    role: {
      label: "Role",
      editable: true,
      type: "select",
      options: [
        { value: "Admin", label: "Admin" },
        { value: "User", label: "User" },
      ],
    },
    // Add more fields as needed
  };
  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth={"xl"}
        scroll={"paper"}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">{`Input Setup for ${setUpData.benchmarkInputName}`}</DialogTitle>
        <DialogContent dividers={true}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <TableCRUD
              data={data}
              fields={fields}
              onDelete={handleDelete}
              onSave={handleSave}
              onAdd={handleAdd}
            />
            {/* {listBenchmarkInputSetup && (
              <TextFieldInputSetupCRUD dataList={listBenchmarkInputSetup} />
            )} */}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="inherit" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" color="info" onClick={handleClose}>
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default DialogInputCRUD;
