import { TCancelConfirm } from "@/types/Dialog/Confirm/ConfirmType";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";

const CancelConfirm = ({
  open,
  handleCloseCancelDialog,
  handleConfirmCancelDialog,
}: TCancelConfirm) => {
  console.log("dialogcancel");
  return (
    <Dialog
      sx={{ zIndex: 1500 }}
      open={open}
      onClose={handleCloseCancelDialog}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Use Google's location service?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseCancelDialog}>Disagree</Button>
        <Button onClick={handleConfirmCancelDialog} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CancelConfirm;
