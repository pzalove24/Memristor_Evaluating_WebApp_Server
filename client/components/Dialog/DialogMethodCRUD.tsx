import * as React from "react";
import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TDialogMethodCRUD } from "@/types/Dialog/DialogType";
import { BenchmarkMethodWithInput } from "@/services/apis/benchmark/benchmarkSetup.api";
import { enqueueSnackbar } from "notistack";
import { useFormik } from "formik";
import { Stack, Divider, Typography, Chip, Box, Grid } from "@mui/material";
import SelectImage from "../Select/SelectImage";

const DialogMethodCRUD = ({
  open,
  handleClose,
  setUpData,
}: TDialogMethodCRUD<BenchmarkMethodWithInput>) => {
  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const tableBenchmarkMethodSetupFormik = useFormik({
    initialValues: {},
    onSubmit: async (values) => {
      console.log("valuesubmit", values);
      enqueueSnackbar("Success Save Method Setup.", {
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

  const handleAlertClose = () => {
    enqueueSnackbar("Cancel Method Change.", {
      autoHideDuration: 2000,
      transitionDuration: { enter: 225, exit: 225 },
      variant: "info",
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
    });
    // if (tableBenchmarkInputSetupFormik.values.delete) {
    //   mutateCancelListBenchmarkInputSetup({
    //     benchmarkInputSetupList: tableBenchmarkInputSetupFormik.values.create
    //       ? [
    //           ...tableBenchmarkInputSetupFormik.values.create,
    //           ...tableBenchmarkInputSetupFormik.values.delete,
    //         ]
    //       : tableBenchmarkInputSetupFormik.values.delete,
    //   });
    // }

    handleClose();
  };

  console.log("setupdata", setUpData);

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleAlertClose}
        fullWidth
        maxWidth={"xl"}
        scroll={"paper"}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <form onSubmit={tableBenchmarkMethodSetupFormik.handleSubmit}>
          <DialogTitle id="scroll-dialog-title">{`Method Setup for ${setUpData.benchmarkMethodName}`}</DialogTitle>
          <DialogContent dividers={true}>
            <DialogContentText
              id="scroll-dialog-description"
              ref={descriptionElementRef}
              tabIndex={-1}
            >
              <Box sx={{ flexGrow: 1 }}>
                <Grid
                  container
                  spacing={2}
                  justifyContent="space-evenly"
                  alignItems="flex-start"
                >
                  <Grid item xs={12}>
                    <Grid item xs={4}>
                      <SelectImage />
                    </Grid>
                    {/* <Chip label={"first"} /> */}
                  </Grid>
                  <Grid item xs={12}>
                    <Divider sx={{ mb: 2 }} orientation="horizontal" flexItem />
                    <Chip label={"second"} />
                  </Grid>
                </Grid>
              </Box>
              {/* <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
                divider={<Divider orientation="vertical" flexItem />}
                justifyContent="center"
                alignItems="center"
              >
                <Chip label={"first"} />
                <Chip label={"second"} />
                <Chip label={"third"} />
              </Stack> */}
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
            <Button
              disabled={
                tableBenchmarkMethodSetupFormik.isSubmitting ||
                !tableBenchmarkMethodSetupFormik.isValid
              }
              type="submit"
              variant="contained"
              color="info"
            >
              Save Method
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </React.Fragment>
  );
};

export default DialogMethodCRUD;
