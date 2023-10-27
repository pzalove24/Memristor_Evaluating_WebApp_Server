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
import { StandardBenchmarkPartOne } from "@/modules/Benchmark/StandardBenchmark/StandardBenchmarkPartOne";
import { StabilityBenchmarkPartOne } from "@/modules/Benchmark/StabilityBenchmark/StabilityBenchmarkPartOne";
import { BiorealisticBenchmarkPartOne } from "@/modules/Benchmark/BiorealisticBenchmark/BiorealisticBenchmarkPartOne";
import { AdvancedBenchmarkPartOne } from "@/modules/Benchmark/AdvancedBenchmark/AdvancedBenchmarkPartOne";

const DialogAllBenchmarks = ({
  open,
  handleClose,
  selectedBenchmarkView,
}: DialogStandardBenchmarkProps) => {

  const BenchmarkReviewData = {
    selectedStandardBenchmarkViewName: selectedBenchmarkView?.Standard,
    selectedStabilityBenchmarkViewName: selectedBenchmarkView?.Stability,
    selectedBiorealisticBenchmarkViewName: selectedBenchmarkView?.Biorealistic,
    selectedAdvancedBenchmarkViewName: selectedBenchmarkView?.Advanced,
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
          <Typography>All Benchmark Results View</Typography>
          <IconButton onClick={handleClose} aria-label="cancel">
            <CancelIcon />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent dividers>
        <DialogContentText id="scroll-dialog-description">
          {selectedBenchmarkView?.Hardware}
          {selectedBenchmarkView?.Waveform}
          {selectedBenchmarkView?.CreatedAt}
          <StandardBenchmarkPartOne BenchmarkReviewData={BenchmarkReviewData} />
          <StabilityBenchmarkPartOne BenchmarkReviewData={BenchmarkReviewData} />
          <BiorealisticBenchmarkPartOne BenchmarkReviewData={BenchmarkReviewData} />
          <AdvancedBenchmarkPartOne BenchmarkReviewData={BenchmarkReviewData} />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <ExportBenchmarkReview />
      </DialogActions>
    </Dialog>
  );
};

export default DialogAllBenchmarks;
