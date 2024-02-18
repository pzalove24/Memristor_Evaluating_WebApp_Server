import { TTableDisplayType } from "@/components/Table/TablePagination";
import {
  TPostBenchmarkSetupsResponse,
} from "@/services/apis/benchmark/benchmarkSetup.api";
import { BenchmarkInput, BenchmarkMethod, MethodType, VoltageType } from "../../../server/shared/prismaTypes";

export type TBenchmarkSetupTabPanelProps = {
  benchmarkTabPanel: any;
  value: number;
  index: number;
};

export type TBenchmarkSetupInputPanelProps = {
  voltageTypeList: VoltageType[]
  tableData: TPostBenchmarkSetupsResponse;
  limit: number;
  listBenchmarkInputNames: BenchmarkInput[]
};

export type TBenchmarkSetupMethodPanelProps = {
  voltageTypeList: VoltageType[]
  methodTypeList: MethodType[]
  tableData: TPostBenchmarkSetupsResponse;
  limit: number;
  listBenchmarkMethodNames: BenchmarkMethod[]
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
  rows: TPostBenchmarkSetupsResponse["rows"];
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
