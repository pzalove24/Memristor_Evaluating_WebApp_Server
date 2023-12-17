import { create } from "zustand";
import React from "react";

export type benchmarkStatus =
  | "TESTNAME"
  | "HARDWARESELECTION"
  | "BENCHMARKSELECTION"
  | "INPUTSETUP"
  | "EVALUATION"
  | "FINISH";

export type benchmarkState = {
  benchmarkStatus: benchmarkStatus;
  standardBenchmarkPulseSelection?: any[];
  standardBenchmarkSweepSelection?: any[];
  stabilityBenchmarkPulseSelection?: any[];
  stabilityBenchmarkSweepSelection?: any[];
  advancedBenchmarkPulseSelection?: any[];
  advancedBenchmarkSweepSelection?: any[];
};

export type benchmarkAction = {
  updateStatus: (status: benchmarkStatus) => void;
  addStandardBenchmarkPulse: () => void;
  addStandardBenchmarkSweep: () => void;
  addstabilityBenchmarkPulse: () => void;
  addstabilityBenchmarkSweep: () => void;
  addAdvancedBenchmarkPulse: () => void;
  addAdvancedBenchmarkSweep: () => void;
};

const useBenchmarkStore = create<benchmarkState & benchmarkAction>((set) => ({
  benchmarkStatus: "HARDWARESELECTION",
  standardBenchmarkPulseSelection: [],
  standardBenchmarkSweepSelection: [],
  stabilityBenchmarkPulseSelection: [],
  stabilityBenchmarkSweepSelection: [],
  advancedBenchmarkPulseSelection: [],
  advancedBenchmarkSweepSelection: [],
  updateStatus: (status: benchmarkStatus) =>
    set(() => ({ benchmarkStatus: status })),
  addStandardBenchmarkPulse: () => ({}),
  addStandardBenchmarkSweep: () => ({}),
  addstabilityBenchmarkPulse: () => ({}),
  addstabilityBenchmarkSweep: () => ({}),
  addAdvancedBenchmarkPulse: () => ({}),
  addAdvancedBenchmarkSweep: () => ({}),
}));

export default useBenchmarkStore;
