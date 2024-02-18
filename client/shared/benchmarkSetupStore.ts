import { create } from "zustand";
import { MethodType, VoltageType } from "../../server/shared/prismaTypes";
import {
  BenchmarkInputWithInputSetup,
  BenchmarkMethodWithInput,
} from "@/services/apis/benchmark/benchmarkSetup.api";

export type TabLabelBenchmarkSetup =
  | "Standard Benchmark"
  | "Stability Benchmark"
  | "Biorealistic Benchmark"
  | "Advanced Benchmark";

export type benchmarkSetupState = {
  benchmarkType: TabLabelBenchmarkSetup;
  setup: "Input" | "Method";
  voltageType: string; // sweep,pulse
  methodType: string; // graph,calculation
  voltageTypes?: VoltageType[];
  methodTypes?: MethodType[];
  benchmarkInputsName: string;
  benchmarkMethodsName: string;
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
  searchBenchmarkInput: (benchmarkInputsName: string) => void;
  searchBenchmarkMethod: (benchmarkMethodsName: string) => void;
  filteredBenchmarkInput: (
    benchmarkInputs: BenchmarkInputWithInputSetup[] | undefined
  ) => void;
  filteredBenchmarkMethod: (
    benchmarkMethods: BenchmarkMethodWithInput[] | undefined
  ) => void;
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
      benchmarkInputs: undefined,
      benchmarkMethods: undefined,
    })),
  changePageIndex: (pageIndex: number) =>
    set(() => ({
      pageIndex: pageIndex,
    })),
  changeBenchmarkType: (benchmarkType: TabLabelBenchmarkSetup) =>
    set(() => ({
      benchmarkType: benchmarkType,
      benchmarkInputs: undefined,
      benchmarkMethods: undefined,
    })),
  filteredVoltageType: (voltageTypes: VoltageType[]) =>
    set(() => ({
      // benchmarkInputs: undefined,
      voltageType: voltageTypes.map((voltage) => voltage.name).join(","),
      voltageTypes,
    })),
  filteredMethodType: (methodTypes: MethodType[]) =>
    set(() => ({
      // benchmarkMethods: undefined,
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
  filteredBenchmarkInput: (
    benchmarkInputs: BenchmarkInputWithInputSetup[] | undefined
  ) =>
    set(() => ({
      benchmarkInputs:
        benchmarkInputs && benchmarkInputs.length > 0
          ? benchmarkInputs
          : undefined,
      // voltageType: voltageTypes.map((voltage) => voltage.name).join(","),
      // voltageTypes,
    })),
  filteredBenchmarkMethod: (
    benchmarkMethods: BenchmarkMethodWithInput[] | undefined
  ) =>
    set(() => ({
      benchmarkMethods:
        benchmarkMethods && benchmarkMethods.length > 0
          ? benchmarkMethods
          : undefined,
      // voltageType: voltageTypes.map((voltage) => voltage.name).join(","),
      // voltageTypes,
    })),
}));

export default useBenchmarkSetupStore;
