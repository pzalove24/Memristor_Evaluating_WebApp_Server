import { CheckBoxAutocomplete } from "@/components/Autocomplete/CheckBoxAutocomplete";
import {
  CustomTablePagination,
  TTableDisplayType,
} from "@/components/Table/TablePagination";
import { TBenchmarkSetupPanelProps } from "@/types/benchmarkSetupType/benchmarkSetupTabsType";
import { Grid } from "@mui/material";
import React from "react";

interface ColumnInput {
  id: "active" | "benchmarkInputName" | "voltageType" | "Expand Setup";
  label: string;
  DisplayType: TTableDisplayType;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: ColumnInput[] = [
  { id: "active", label: "Active", minWidth: 170, DisplayType: "Switch" },
  {
    id: "benchmarkInputName",
    label: "BenchmarkInputName",
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
    id: "Expand Setup",
    label: "Expand Setup",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toFixed(2),
    DisplayType: "Typography",
  },
];

interface Data {
  active: boolean;
  name: string;
  code: string;
  population: number;
  size: number;
  density: number;
}

function createData(
  active: boolean,
  name: string,
  code: string,
  population: number,
  size: number
): Data {
  const density = population / size;
  return { active, name, code, population, size, density };
}

const rows = [
  createData(true, "India", "IN", 1324171354, 3287263),
  createData(false, "China", "CN", 1403500365, 9596961),
  createData(false, "Italy", "IT", 60483973, 301340),
  createData(false, "United States", "US", 327167434, 9833520),
  createData(false, "Canada", "CA", 37602103, 9984670),
  createData(false, "Australia", "AU", 25475400, 7692024),
  createData(false, "Germany", "DE", 83019200, 357578),
  createData(true, "Ireland", "IE", 4857000, 70273),
  createData(false, "Mexico", "MX", 126577691, 1972550),
  createData(false, "Japan", "JP", 126317000, 377973),
  createData(false, "France", "FR", 67022000, 640679),
  createData(false, "United Kingdom", "GB", 67545757, 242495),
  createData(false, "Russia", "RU", 146793744, 17098246),
  createData(false, "Nigeria", "NG", 200962417, 923768),
  createData(false, "Brazil", "BR", 210147125, 8515767),
];

const BenchmarkSetupTabPanelInput = ({
  tableData,
  limit,
}: TBenchmarkSetupPanelProps) => {
  const rows = tableData.rows;
  const total = tableData.totalCount;
  const pageIndex = tableData.currentPage;
  const pageSize = limit;

  console.log("table", rows, total, pageIndex, pageSize);
  return (
    <>
      <Grid item xs={12} md={4}>
        <CheckBoxAutocomplete label="Voltage Type" placeholder="voltage" />
      </Grid>
      <Grid item xs={12} md={4}>
        <CheckBoxAutocomplete label="Voltage Type" placeholder="voltage" />
      </Grid>
      <Grid item xs={12} md={4}>
        <CheckBoxAutocomplete label="Voltage Type" placeholder="voltage" />
      </Grid>
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

export default BenchmarkSetupTabPanelInput;
