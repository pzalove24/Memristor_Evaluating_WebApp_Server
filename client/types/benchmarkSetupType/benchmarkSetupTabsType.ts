import { TTableDisplayType } from "@/components/Table/TablePagination";
import {
  BenchmarkInputWithInputSetup,
  BenchmarkMethodWithInput,
  TListBenchmarkSetupsResponse,
} from "@/services/benchmark/benchmarkSetup.service";

export type TBenchmarkSetupTabPanelProps = {
  benchmarkTabPanel: any;
  value: number;
  index: number;
};

export type TBenchmarkSetupPanelProps = {
  tableData: TListBenchmarkSetupsResponse;
  limit: number;
};

export type columnInput = {
  id: string;
  subId?: string;
  label: string;
  DisplayType: TTableDisplayType;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
};

export type TBenchmarkSetupTableProps = {
  columns: columnInput[];
  rows: TListBenchmarkSetupsResponse["rows"];
  total: number;
  pageIndex: number;
  pageSize: number;
  // totalPages: number;
};

export type TTableCollapseProp = {
  // row: BenchmarkMethodWithInput | BenchmarkInputWithInputSetup | any;
  row: any;
  columns: columnInput[];
};
