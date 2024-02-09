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
  page: number;
  limit: number;
};

export type benchmarkSetupAction = {};

const useBenchmarkSetupStore = create<
  benchmarkSetupState & benchmarkSetupAction
>((set) => ({
  benchmarkType: "Standard Benchmark",
  setup: "Input",
  voltage: "sweep",
  method: undefined,
  page: 1,
  limit: 10,
}));
