"use client";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
import { DialogProps } from "@mui/material/Dialog";
import DialogStandardBenchmark from "./DialogBenchmarkReview/DialogStandardBenchmark";
import { BenchmarkTableViewProps } from "@/types";
import DialogStabilityBenchmark from "./DialogBenchmarkReview/DialogStabilityBenchmark";
import DialogBiorealisticBenchmark from "./DialogBenchmarkReview/DialogBiorealisticBenchmark";
import DialogWaveform from "./DialogBenchmarkReview/DialogWaveform";
import DialogAdvancedBenchmark from "./DialogBenchmarkReview/DialogAdvancedBenchmark";
import DialogAllBenchmarks from "./DialogBenchmarkReview/DialogAllBenchmarks";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData1(
  id: string,
  BenchmarkTestName: string,
  Hardware: string,
  Waveform: string,
  Standard: string,
  Stability: string,
  Biorealistic: string,
  Advanced: string,
  CreatedAt: number
) {
  return {
    id,
    BenchmarkTestName,
    Hardware,
    Waveform,
    Standard,
    Stability,
    Biorealistic,
    Advanced,
    CreatedAt,
  };
}

const rows = [
  createData1(
    "Test1",
    "TestName1",
    "Hardware1",
    "waveform1",
    "standard1",
    "stability1",
    "biorealistic1",
    "advanced1",
    123456
  ),
  createData1(
    "Test2",
    "TestName2",
    "Hardware2",
    "waveform2",
    "standard2",
    "stability2",
    "biorealistic2",
    "advanced2",
    1234562
  ),
  createData1(
    "Test3",
    "TestName3",
    "Hardware3",
    "waveform3",
    "standard3",
    "stability3",
    "biorealistic3",
    "advanced3",
    1234563
  ),
  createData1(
    "Test4",
    "TestName4",
    "Hardware4",
    "waveform4",
    "standard4",
    "stability4",
    "biorealistic4",
    "advanced4",
    1234564
  ),
  createData1(
    "Test5",
    "TestName5",
    "Hardware5",
    "waveform5",
    "standard5",
    "stability5",
    "biorealistic5",
    "advanced5",
    1234565
  ),
  createData1(
    "Test6",
    "TestName6",
    "Hardware6",
    "waveform6",
    "standard6",
    "stability6",
    "biorealistic6",
    "advanced6",
    1234566
  ),
  createData1(
    "Test7",
    "TestName7",
    "Hardware7",
    "waveform7",
    "standard7",
    "stability7",
    "biorealistic7",
    "advanced7",
    1234567
  ),
  createData1(
    "Test8",
    "TestName8",
    "Hardware8",
    "waveform8",
    "standard8",
    "stability8",
    "biorealistic8",
    "advanced8",
    1234568
  ),
  createData1(
    "Test9",
    "TestName9",
    "Hardware9",
    "waveform9",
    "standard9",
    "stability9",
    "biorealistic9",
    "advanced9",
    1234569
  ),
  createData1(
    "Test10",
    "TestName10",
    "Hardware10",
    "waveform10",
    "standard10",
    "stability10",
    "biorealistic10",
    "advanced1",
    12345610
  ),
];

const TableBenchmarkReview = () => {
  const [openDialogWaveform, setOpenDialogWaveform] = React.useState(false);
  const [openDialogStandardBenchmark, setOpenDialogStandardBenchmark] =
    React.useState(false);
  const [openDialogStabilityBenchmark, setOpenDialogStabilityBenchmark] =
    React.useState(false);
  const [openDialogBiorealisticBenchmark, setOpenDialogBiorealisticBenchmark] =
    React.useState(false);
  const [openDialogAdvancedBenchmark, setOpenDialogAdvancedBenchmark] =
    React.useState(false);
  const [openDialogAllStandardBenchmark, setOpenDialogAllStandardBenchmark] =
    React.useState(false);

  const [selectedBenchmarkView, setSelectedBenchmarkView] =
    React.useState<BenchmarkTableViewProps | null>(null);

  const handleClickOpenDialog = (
    event: React.MouseEvent<HTMLElement>,
    data: BenchmarkTableViewProps
  ) => {
    // if (event && event.stopPropagation) {
    //   event.stopPropagation();
    // }
    switch (event.currentTarget.id) {
      case "WaveformButton": //WaveformButton
        setOpenDialogWaveform(true);
        break;
      case "StandardBenchmarkButton": //StandardBenchmarkButton
        setOpenDialogStandardBenchmark(true);
        break;
      case "StabilityBenchmarkButton": //StabilityBenchmarkButton
        setOpenDialogStabilityBenchmark(true);
        break;
      case "BiorealisticBenchmarkButton": //BiorealisticBenchmarkButton
        setOpenDialogBiorealisticBenchmark(true);
        break;
      case "AdvancedBenchmarkButton": //AdvancedBenchmarkButton
        setOpenDialogAdvancedBenchmark(true);
        break;
      case "AllBenchmarkButton": //AllBenchmarkButton
        setOpenDialogAllStandardBenchmark(true);
        break;
    }
    setSelectedBenchmarkView(data);
  };

  return (
    <>
      {openDialogWaveform && (
        <DialogWaveform
          selectedBenchmarkView={selectedBenchmarkView}
          handleClose={() => setOpenDialogWaveform(false)}
        />
      )}
      {openDialogStandardBenchmark && (
        <DialogStandardBenchmark
          selectedBenchmarkView={selectedBenchmarkView}
          handleClose={() => setOpenDialogStandardBenchmark(false)}
        />
      )}
      {openDialogStabilityBenchmark && (
        <DialogStabilityBenchmark
          selectedBenchmarkView={selectedBenchmarkView}
          handleClose={() => setOpenDialogStabilityBenchmark(false)}
        />
      )}
      {openDialogBiorealisticBenchmark && (
        <DialogBiorealisticBenchmark
          selectedBenchmarkView={selectedBenchmarkView}
          handleClose={() => setOpenDialogBiorealisticBenchmark(false)}
        />
      )}

      {openDialogAdvancedBenchmark && (
        <DialogAdvancedBenchmark
          selectedBenchmarkView={selectedBenchmarkView}
          handleClose={() => setOpenDialogAdvancedBenchmark(false)}
        />
      )}
      {openDialogAllStandardBenchmark && (
        <DialogAllBenchmarks
          selectedBenchmarkView={selectedBenchmarkView}
          handleClose={() => setOpenDialogAllStandardBenchmark(false)}
        />
      )}
      <TableContainer sx={{ maxHeight: 577 }}>
        <Table
          stickyHeader
          sx={{ minWidth: 700 }}
          aria-label="benchmark review table"
        >
          <caption>A Benchmark Review table for memristor</caption>
          <TableHead>
            <TableRow>
              <StyledTableCell>Benchmark Test Name</StyledTableCell>
              <StyledTableCell align="right">Hardware</StyledTableCell>
              <StyledTableCell align="right">View Waveform</StyledTableCell>
              <StyledTableCell align="right">
                View Standard Benchmark
              </StyledTableCell>
              <StyledTableCell align="right">
                View Stability Benchmark
              </StyledTableCell>
              <StyledTableCell align="right">
                View Biorealistic Benchmark
              </StyledTableCell>
              <StyledTableCell align="right">
                View Advanced Benchmark
              </StyledTableCell>
              <StyledTableCell align="right">
                View All Benchmarks
              </StyledTableCell>
              <StyledTableCell align="right">Benchmark Date</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.BenchmarkTestName}
                </StyledTableCell>
                <StyledTableCell align="right">{row.Hardware}</StyledTableCell>

                <StyledTableCell>
                  <Button
                    id="WaveformButton"
                    variant="contained"
                    fullWidth
                    onClick={(e) => {
                      handleClickOpenDialog(e, row);
                    }}
                  >
                    WAVEFORM
                  </Button>
                </StyledTableCell>
                <StyledTableCell>
                  <Button
                    id="StandardBenchmarkButton"
                    variant="contained"
                    fullWidth
                    onClick={(e) => {
                      handleClickOpenDialog(e, row);
                    }}
                  >
                    STANDARD
                  </Button>
                </StyledTableCell>
                <StyledTableCell>
                  <Button
                    id="StabilityBenchmarkButton"
                    variant="contained"
                    fullWidth
                    onClick={(e) => {
                      handleClickOpenDialog(e, row);
                    }}
                  >
                    STABILITY
                  </Button>
                </StyledTableCell>
                <StyledTableCell>
                  <Button
                    id="BiorealisticBenchmarkButton"
                    variant="contained"
                    fullWidth
                    onClick={(e) => {
                      handleClickOpenDialog(e, row);
                    }}
                  >
                    BIOREALISTIC
                  </Button>
                </StyledTableCell>
                <StyledTableCell>
                  <Button
                    id="AdvancedBenchmarkButton"
                    variant="contained"
                    fullWidth
                    onClick={(e) => {
                      handleClickOpenDialog(e, row);
                    }}
                  >
                    ADVANCED
                  </Button>
                </StyledTableCell>
                <StyledTableCell>
                  <Button
                    id="AllBenchmarkButton"
                    variant="contained"
                    fullWidth
                    onClick={(e) => {
                      handleClickOpenDialog(e, row);
                    }}
                  >
                    ALL
                  </Button>
                </StyledTableCell>
                <StyledTableCell align="right">{row.CreatedAt}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TableBenchmarkReview;
