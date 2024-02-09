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
}));

export default useBenchmarkSetupStore;
