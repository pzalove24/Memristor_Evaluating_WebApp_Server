import {
  BenchmarkInputSetupWithUnit,
  TGetCreateBenchmarkInputBenchmarkInputSetupResponse,
} from "@/services/apis/benchmark/benchmarkSetup.api";
import {
  BenchmarkInputSetup,
  BenchmarkUnit,
  DataType,
  VoltageType,
} from "../../../server/shared/prismaTypes";

export type TDialogInputCRUD<T> = {
  open: boolean;
  handleClose: () => void;
  setUpData: T;
};

export type TDialogMethodCRUD<T> = {
  open: boolean;
  handleClose: () => void;
  setUpData: T;
};

export type TDialogInputCRUDFormik = {
  data: BenchmarkInputSetupWithUnit[];
  create?: BenchmarkInputSetup[];
  delete?: BenchmarkInputSetup[];
  template?: TGetCreateBenchmarkInputBenchmarkInputSetupResponse;
  benchmarkUnit: BenchmarkUnit[];
  dataType: DataType[];
};
