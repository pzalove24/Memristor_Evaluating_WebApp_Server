import * as React from "react";
import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TDialogInputCRUD } from "@/types/Dialog/DialogType";
import {
  BenchmarkInputSetupWithUnit,
  BenchmarkInputWithInputSetup,
  listBenchmarkInputSetups,
} from "@/services/benchmark/benchmarkSetup.service";
import TextFieldInputSetupCRUD from "../TextField/TextFieldInputSetupCRUD";
import { useQuery } from "@tanstack/react-query";

const DialogInputCRUD = ({
  open,
  handleClose,
  setUpData,
}: TDialogInputCRUD<BenchmarkInputWithInputSetup>) => {
  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);


  const {
    data: listBenchmarkInputSetup,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["listBenchmarkInputSetup"],
    queryFn: async () => {
      const [response, _] = await listBenchmarkInputSetups(setUpData.id);
      const res = await response;
      return res;
    },
  });

  if (isLoading) {
    return <>Loading</>;
  }

  

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
            {listBenchmarkInputSetup && <TextFieldInputSetupCRUD dataList={listBenchmarkInputSetup} />}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="inherit" onClick={handleClose}>Cancel</Button>
          <Button variant="contained" color="info" onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default DialogInputCRUD;
