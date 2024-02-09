import { CheckBoxAutocomplete } from "@/components/Autocomplete/CheckBoxAutocomplete";
import { CustomTablePagination } from "@/components/Table/TablePagination";
import { TBenchmarkSetupPanelProps, TBenchmarkSetupTabPanelProps } from "@/types/benchmarkSetupType/benchmarkSetupTabsType";
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


const BenchmarkSetupTabPanelMethod = ({
  benchmarkTabPanel,
  value,
  index,
  total,
  page,
  pageSize,
  totalPages,
}: TBenchmarkSetupPanelProps) => {
  return (
    <>
      <Grid item xs={12} md={4}>
        <CheckBoxAutocomplete label="Voltage Type" placeholder="voltage" />
      </Grid>
      <Grid item xs={12} md={4}>
        <CheckBoxAutocomplete label="Voltage Type" placeholder="voltage" />
      </Grid>
      {/* <Grid item xs={12} md={4}>
        <CheckBoxAutocomplete label="Voltage Type" placeholder="voltage" />
      </Grid> */}
      <Grid item xs={12} md={12} marginTop={2}>
        <CustomTablePagination />
      </Grid>
    </>
  );
};

export default BenchmarkSetupTabPanelMethod;
