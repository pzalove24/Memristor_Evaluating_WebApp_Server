import { CheckBoxAutocomplete } from "@/components/Autocomplete/CheckBoxAutocomplete";
import {
  CustomTablePagination,
  TTableDisplayType,
} from "@/components/Table/TablePagination";
import {
  TBenchmarkSetupPanelProps,
  TBenchmarkSetupTabPanelProps,
  columnInput,
} from "@/types/benchmarkSetupType/benchmarkSetupTabsType";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const columns: columnInput[] = [
  { id: "active", label: "Active", minWidth: 100, DisplayType: "Switch" },
  {
    id: "beforeBenchmark",
    label: "BeforeBenchmark",
    minWidth: 100,
    DisplayType: "Switch",
  },
  {
    id: "inSoftware",
    label: "InSoftware",
    minWidth: 100,
    DisplayType: "Switch",
  },
  {
    id: "benchmarkMethodName",
    label: "BenchmarkMethodName",
    minWidth: 170,
    DisplayType: "Typography",
  },
  {
    id: "voltageType",
    label: "VoltageType",
    minWidth: 170,
    DisplayType: "Typography",
  },
  {
    id: "methodType",
    label: "MethodType",
    minWidth: 170,
    DisplayType: "Typography",
  },
  {
    id: "Expand Setup",
    label: "Expand Setup",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toFixed(2),
    DisplayType: "Typography",
  },
];

const BenchmarkSetupTabPanelMethod = ({
  tableData,
  limit,
}: TBenchmarkSetupPanelProps) => {
  const rows = tableData.rows;
  const total = tableData.totalCount;
  const pageIndex = tableData.currentPage;
  const pageSize = limit;
  return (
    <>
      <Grid item xs={12} md={4}>
        <CheckBoxAutocomplete
          options={tableData.rows}
          fieldDisplay={"voltageType"}
          label="Voltage Type"
          placeholder="voltage"
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <CheckBoxAutocomplete
          options={tableData.rows}
          fieldDisplay={"methodType"}
          label="Method Type"
          placeholder="voltage"
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <CheckBoxAutocomplete
          options={tableData.rows}
          fieldDisplay={"benchmarkMethodName"}
          label="Benchmark Method Name"
          placeholder="voltage"
        />
      </Grid>
      {/* <Grid item xs={12} md={4}>
        <CheckBoxAutocomplete label="Voltage Type" placeholder="voltage" />
      </Grid> */}
      <Grid item xs={12} md={12} marginTop={2}>
        <CustomTablePagination
          columns={columns}
          rows={rows}
          total={total}
          pageIndex={pageIndex}
          pageSize={pageSize}
        />
      </Grid>
    </>
  );
};

export default BenchmarkSetupTabPanelMethod;
