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
import TableInputCRUD from "../Table/TableInputCRUD";
import { useSnackbar } from "notistack";
import { useFormik } from "formik";

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
  const { enqueueSnackbar } = useSnackbar();

  const { data: listBenchmarkInputSetup, isLoading } =
    useGetBenchmarkInputSetups(setUpData.id);

  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const tableBenchmarkInputSetupFormik = useFormik({
    initialValues: testData,
    onSubmit: async (values) => {
      console.log("valuesubmit", values);
      enqueueSnackbar("Success Save InputSetups.", {
        autoHideDuration: 1000,
        transitionDuration: { enter: 225, exit: 225 },
        variant: "success",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
      });
      handleClose();
    },
  });

  const prevBenchmarkInputSetups = React.useRef(
    tableBenchmarkInputSetupFormik.values
  );

  // const createEmptyRow = () => {
  //   const emptyRow: { [key: string]: any } = {};
  //   Object.keys(fields).forEach((key) => {
  //     emptyRow[key] = ""; // Initialize each field with an empty string
  //   });
  //   return emptyRow;
  // };

  const handleDelete = (id: number) => {
    const newData = tableBenchmarkInputSetupFormik.values.filter(
      (row) => row.id !== id
    );
    tableBenchmarkInputSetupFormik.setValues(newData);
  };

  const handleSave = (id: number, updatedValues: any) => {
    const newData = tableBenchmarkInputSetupFormik.values.map((row) => {
      if (row.id === id) {
        return { ...row, ...updatedValues };
      }
      return row;
    });
    tableBenchmarkInputSetupFormik.setValues(newData);
  };

  const handleAlertClose = () => {
    if (
      prevBenchmarkInputSetups.current !== tableBenchmarkInputSetupFormik.values
    ) {
      alert(JSON.stringify("are you sure to cancel edit Data", null, 2));
    }

    handleClose();
  };

  if (isLoading) {
    return <>Loading</>;
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth={"xl"}
      scroll={"paper"}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <form onSubmit={tableBenchmarkInputSetupFormik.handleSubmit}>
        <DialogTitle id="scroll-dialog-title">{`Input Setup for ${setUpData.benchmarkInputName}`}</DialogTitle>
        <DialogContent dividers={true}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <TableInputCRUD
              data={tableBenchmarkInputSetupFormik as any} //TODO
              onDelete={handleDelete}
              onSave={handleSave}
            />
            {/* {listBenchmarkInputSetup && (
              <TextFieldInputSetupCRUD dataList={listBenchmarkInputSetup} />
            )} */}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="inherit"
            onClick={handleAlertClose}
          >
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="info">
            Save Input Setup
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default DialogInputCRUD;
