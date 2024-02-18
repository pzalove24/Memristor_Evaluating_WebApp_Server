import { CheckBoxAutocomplete } from "@/components/Autocomplete/CheckBoxAutocomplete";
import {
  CustomTablePagination,
  TTableDisplayType,
} from "@/components/Table/TablePagination";
import {
  TBenchmarkSetupMethodPanelProps,
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
import { MethodType, VoltageType } from "../../../server/shared/prismaTypes";
import useBenchmarkSetupStore from "@/shared/benchmarkSetupStore";
import { debounce } from "lodash";

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
    subId: "name",
    label: "VoltageType",
    minWidth: 170,
    DisplayType: "Typography",
  },
  {
    id: "methodType",
    subId: "name",
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
  voltageTypeList,
  methodTypeList,
  listBenchmarkMethodNames,
}: TBenchmarkSetupMethodPanelProps) => {
  const rows = tableData.rows;
  const total = tableData.totalCount;
  const pageIndex = tableData.currentPage;
  const pageSize = limit;
  const {
    voltageTypes,
    methodTypes,
    filteredVoltageType,
    filteredMethodType,
    searchBenchmarkMethod,
    filteredBenchmarkMethod,
    benchmarkMethods,
  } = useBenchmarkSetupStore();

  const onSearchBenchmarkMethod = debounce((methodValue: string) => {
    searchBenchmarkMethod(methodValue);
  }, 500);

  return (
    <>
      <Grid item xs={12} md={4}>
        <CheckBoxAutocomplete
          value={voltageTypes}
          limitTag={2}
          options={voltageTypeList}
          onChange={(newValue: VoltageType[]) => filteredVoltageType(newValue)}
          fieldDisplay={"name"}
          label="Voltage Type"
          placeholder="voltage"
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <CheckBoxAutocomplete
          value={methodTypes}
          limitTag={2}
          options={methodTypeList}
          onChange={(newValue: MethodType[]) => filteredMethodType(newValue)}
          fieldDisplay={"name"}
          label="Method Type"
          placeholder="method"
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <CheckBoxAutocomplete
          value={benchmarkMethods}
          limitTag={1}
          options={listBenchmarkMethodNames}
          onInputChange={(newMethod: string) =>
            onSearchBenchmarkMethod(newMethod)
          }
          onChange={(newValue) => filteredBenchmarkMethod(newValue)}
          fieldDisplay={"benchmarkMethodName"}
          label="Benchmark Method Name"
          placeholder="method name"
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
