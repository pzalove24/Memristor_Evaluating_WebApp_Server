import { create } from "zustand";

export type TabLabelBenchmarkSetup =
  | "Standard Benchmark"
  | "Stability Benchmark"
  | "Biorealistic Benchmark"
  | "Advanced Benchmark";

export type benchmarkSetupState = {
  benchmarkType: TabLabelBenchmarkSetup;
  setup: "Input" | "Method";
  voltage?: "sweep" | "pulse";
  method?: "graph" | "calculation";
  pageIndex: number;
  limit: number;
};

export type benchmarkSetupAction = {
  changeBenchmarkType: (benchmarkType: TabLabelBenchmarkSetup) => void;
  // changeSetup: (setup: "Input" | "Method") => void;
  changePageSize: (pageSize: number) => void;
  changePageIndex: (pageIndex: number) => void;
};

const useBenchmarkSetupStore = create<
  benchmarkSetupState & benchmarkSetupAction
>((set) => ({
  benchmarkType: "Standard Benchmark",
  setup: "Input",
  voltage: "sweep",
  method: undefined,
  pageIndex: 1,
  limit: 5,
  changePageSize: (pageSize: number) =>
    set(() => ({
      limit: pageSize,
    })),
  changePageIndex: (pageIndex: number) =>
    set(() => ({
      pageIndex: pageIndex,
    })),
  changeBenchmarkType: (benchmarkType: TabLabelBenchmarkSetup) =>
    set(() => ({
      benchmarkType: benchmarkType,
    })),
}));

export default useBenchmarkSetupStore;
