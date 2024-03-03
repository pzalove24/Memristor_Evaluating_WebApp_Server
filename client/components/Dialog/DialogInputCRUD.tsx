import * as React from "react";
import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TDialogInputCRUD } from "@/types/Dialog/DialogType";
import { BenchmarkInputWithInputSetup } from "@/services/apis/benchmark/benchmarkSetup.api";
import { useGetBenchmarkInputSetups } from "@/services/queries/benchmark/benchmarkSetup/benchmarkSetup.query";
import TableInputCRUD from "../Table/TableInputCRUD";
import { useSnackbar } from "notistack";
import { useFormik } from "formik";
import { useUpsertBenchmarkBenchmarkInputInputSetups } from "@/services/queries/benchmark/benchmarkSetup/benchmarkSetup.mutate";
import { LoadingApi } from "../Loading/LoadingApi";
import CancelConfirm from "./Confirm/CancelConfirm";

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

  const { mutateAsync: mutateListBenchmarkInputSetup } =
  useUpsertBenchmarkBenchmarkInputInputSetups();

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
    initialValues: listBenchmarkInputSetup
      ? { data: listBenchmarkInputSetup }
      : { data: [] },
    onSubmit: async (values) => {
      console.log("valuesubmit", values);
      await mutateListBenchmarkInputSetup({
        benchmarkInputSetupList: values.data,
      });
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
    tableBenchmarkInputSetupFormik.values.data
  );

  React.useEffect(() => {
    if (listBenchmarkInputSetup) {
      tableBenchmarkInputSetupFormik.setValues({
        data: listBenchmarkInputSetup,
      });
    }

    // Update the ref with the current values
    prevBenchmarkInputSetups.current =
      tableBenchmarkInputSetupFormik.values.data;
  }, [listBenchmarkInputSetup]);

  // const createEmptyRow = () => {
  //   const emptyRow: { [key: string]: any } = {};
  //   Object.keys(fields).forEach((key) => {
  //     emptyRow[key] = ""; // Initialize each field with an empty string
  //   });
  //   return emptyRow;
  // };

  console.log("listBenchmarkInputSetup", listBenchmarkInputSetup);

  const handleDelete = (id: string) => {
    const newData = tableBenchmarkInputSetupFormik.values.data.filter(
      (row) => row.id !== id
    );
    tableBenchmarkInputSetupFormik.setValues({ data: newData });
  };

  // const handleSave = (id: string, updatedValues: any) => {
  //   const newData = tableBenchmarkInputSetupFormik.values.data.map((row) => {
  //     if (row.id === id) {
  //       return { ...row, ...updatedValues };
  //     }
  //     return row;
  //   });
  //   tableBenchmarkInputSetupFormik.setValues({ data: newData });
  // };

  const handleAlertClose = () => {
    if (
      prevBenchmarkInputSetups.current !==
      tableBenchmarkInputSetupFormik.values.data
    ) {
      enqueueSnackbar("Cancel InputSetups Change.", {
        autoHideDuration: 1000,
        transitionDuration: { enter: 225, exit: 225 },
        variant: "info",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
      });
      // alert(JSON.stringify("are you sure to cancel edit Data", null, 2));
    }

    handleClose();
  };

  return (
    <>
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
              {!isLoading ? (
                <TableInputCRUD
                  data={tableBenchmarkInputSetupFormik as any} //TODO
                  onDelete={handleDelete}
                  // onSave={handleSave}
                />
              ) : (
                <LoadingApi />
              )}

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
    </>
  );
};

export default DialogInputCRUD;
