import { create } from "zustand";
import { MethodType, VoltageType } from "../../server/shared/prismaTypes";
import {
  BenchmarkInputWithInputSetup,
  BenchmarkMethodWithInput,
} from "@/services/benchmark/benchmarkSetup.service";

export type TabLabelBenchmarkSetup =
  | "Standard Benchmark"
  | "Stability Benchmark"
  | "Biorealistic Benchmark"
  | "Advanced Benchmark";

export type benchmarkSetupState = {
  benchmarkType: TabLabelBenchmarkSetup;
  setup: "Input" | "Method";
  voltageType?: string; // sweep,pulse
  methodType?: string; // graph,calculation
  voltageTypes?: VoltageType[];
  methodTypes?: MethodType[];
  benchmarkInputsName?: string;
  benchmarkMethodsName?: string;
  benchmarkInputs?: BenchmarkInputWithInputSetup[];
  benchmarkMethods?: BenchmarkMethodWithInput[];
  pageIndex: number;
  limit: number;
};

export type benchmarkSetupAction = {
  changeBenchmarkType: (benchmarkType: TabLabelBenchmarkSetup) => void;
  changeSetup: (setup: "Input" | "Method") => void;
  changePageSize: (pageSize: number) => void;
  changePageIndex: (pageIndex: number) => void;
  filteredVoltageType: (voltageTypes: VoltageType[]) => void;
  filteredMethodType: (methodTypes: MethodType[]) => void;
  // filteredBenchmarkInput: (
  //   benchmarkInputWithInputSetup: BenchmarkInputWithInputSetup
  // ) => void;
  // filteredBenchmarkMethod: (
  //   benchmarkMethodWithInput: BenchmarkMethodWithInput
  // ) => void;
  searchBenchmarkInput: (benchmarkInputsName: string) => void;
  searchBenchmarkMethod: (benchmarkMethodsName: string) => void;
};

const useBenchmarkSetupStore = create<
  benchmarkSetupState & benchmarkSetupAction
>((set) => ({
  benchmarkType: "Standard Benchmark",
  setup: "Input",
  voltageType: "", // use in api call query
  methodType: "", // use in api call query
  voltageTypes: undefined, // show in autocomplete
  MethodTypes: undefined, // show in autocomplete
  benchmarkInputsName: "", // use in api call query
  benchmarkMethodsName: "", // use in api call query
  benchmarkInputs: undefined, // show in autocomplete
  benchmarkMethods: undefined, // show in autocomplete
  pageIndex: 1,
  limit: 5,
  changePageSize: (pageSize: number) =>
    set(() => ({
      limit: pageSize,
    })),
  changeSetup: (setup: "Input" | "Method") =>
    set(() => ({
      setup: setup,
    })),
  changePageIndex: (pageIndex: number) =>
    set(() => ({
      pageIndex: pageIndex,
    })),
  changeBenchmarkType: (benchmarkType: TabLabelBenchmarkSetup) =>
    set(() => ({
      benchmarkType: benchmarkType,
    })),
  filteredVoltageType: (voltageTypes: VoltageType[]) =>
    set(() => ({
      voltageType: voltageTypes.map((voltage) => voltage.name).join(","),
      voltageTypes,
    })),
  filteredMethodType: (methodTypes: MethodType[]) =>
    set(() => ({
      methodType: methodTypes.map((method) => method.name).join(","),
      methodTypes,
    })),
  searchBenchmarkInput: (benchmarkInputsName: string) =>
    set(() => ({
      // benchmarkInputs: benchmarkInputWithInputSetup,
      benchmarkInputsName,
    })),

  searchBenchmarkMethod: (benchmarkMethodsName: string) =>
    set(() => ({
      // benchmarkInputs: benchmarkInputWithInputSetup,
      benchmarkMethodsName,
    })),
}));

export default useBenchmarkSetupStore;
