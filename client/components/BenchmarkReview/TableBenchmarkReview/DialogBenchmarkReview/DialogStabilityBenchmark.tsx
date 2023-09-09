import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { DialogStandardBenchmarkProps } from "@/types";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CancelIcon from "@mui/icons-material/Cancel";
import ExportBenchmarkReview from "../SpeedDialExportBenchmark/ExportBenchmarkReview";
import { StabilityBenchmarkPartOne } from "@/components/Benchmark/StabilityBenchmark/StabilityBenchmarkPartOne";

const DialogStabilityBenchmark = ({
  open,
  handleClose,
  selectedBenchmarkView,
}: DialogStandardBenchmarkProps) => {
  const BenchmarkReviewData = {
    selectedStabilityBenchmarkViewName: selectedBenchmarkView?.Stability,
  };

  return (
    <Dialog
      open={open ? open : true}
      onClose={handleClose}
      fullWidth
      maxWidth={"xl"}
      scroll={"paper"}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <DialogTitle id="scroll-dialog-title">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography>{selectedBenchmarkView?.Stability}</Typography>
          <IconButton onClick={handleClose} aria-label="cancel">
            <CancelIcon />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent dividers>
        <DialogContentText id="scroll-dialog-description">
          <StabilityBenchmarkPartOne
            BenchmarkReviewData={BenchmarkReviewData}
          />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <ExportBenchmarkReview />
      </DialogActions>
    </Dialog>
  );
};

export default DialogStabilityBenchmark;
