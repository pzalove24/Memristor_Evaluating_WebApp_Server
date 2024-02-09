import { TListBenchmarkSetupsResponse } from "@/services/benchmark/benchmarkSetup.service";

export type TBenchmarkSetupTabPanelProps = {
  benchmarkTabPanel: any;
  value: number;
  index: number;
};

export type TBenchmarkSetupPanelProps = {
  tableData: TListBenchmarkSetupsResponse;
  limit: number;
};

export type TBenchmarkSetupTableProps = {
  columns: any[];
  rows: any[];
  total: number;
  pageIndex: number;
  pageSize: number;
  // totalPages: number;
};
