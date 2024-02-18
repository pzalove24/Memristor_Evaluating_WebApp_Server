import { TTableDisplayType } from "@/components/Table/TablePagination";
import {
  BenchmarkInputWithInputSetup,
  BenchmarkMethodWithInput,
  TListBenchmarkSetupsResponse,
} from "@/services/benchmark/benchmarkSetup.service";
import { BenchmarkInput, BenchmarkMethod, MethodType, VoltageType } from "../../../server/shared/prismaTypes";

export type TBenchmarkSetupTabPanelProps = {
  benchmarkTabPanel: any;
  value: number;
  index: number;
};

export type TBenchmarkSetupInputPanelProps = {
  voltageTypeList: VoltageType[]
  tableData: TListBenchmarkSetupsResponse;
  limit: number;
  listBenchmarkInputNames: BenchmarkInput[]
};

export type TBenchmarkSetupMethodPanelProps = {
  voltageTypeList: VoltageType[]
  methodTypeList: MethodType[]
  tableData: TListBenchmarkSetupsResponse;
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
