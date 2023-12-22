import { create } from "zustand";
import React from "react";
import { StandardBenchmarkPulseType } from "@/types/commandType";

export type benchmarkStatus =
  | "TESTNAME"
  | "TESTHARDWARE"
  | "BENCHMARKSELECTION"
  | "INPUTSETUP"
  | "EVALUATION"
  | "FINISH";

export type benchmarkState = {
  benchmarkName: string;
  benchmarkStatus: benchmarkStatus;
  standardBenchmarkPulseSelection?: StandardBenchmarkPulseType[];
  standardBenchmarkSweepSelection?: any[];
  stabilityBenchmarkPulseSelection?: any[];
  stabilityBenchmarkSweepSelection?: any[];
  advancedBenchmarkPulseSelection?: any[];
  advancedBenchmarkSweepSelection?: any[];
};

export type benchmarkAction = {
  updateBenchmarkName: (name: string) => void;
  updateStatus: (status: benchmarkStatus) => void;
  addStandardBenchmarkPulse: () => void;
  addStandardBenchmarkSweep: () => void;
  addstabilityBenchmarkPulse: () => void;
  addstabilityBenchmarkSweep: () => void;
  addAdvancedBenchmarkPulse: () => void;
  addAdvancedBenchmarkSweep: () => void;
};

const useBenchmarkStore = create<benchmarkState & benchmarkAction>((set) => ({
  benchmarkName: "",
  benchmarkStatus: "TESTNAME",
  standardBenchmarkPulseSelection: [
    StandardBenchmarkPulseType.CONDUCTANCEPULSE_WEB,
  ],
  standardBenchmarkSweepSelection: [],
  stabilityBenchmarkPulseSelection: [],
  stabilityBenchmarkSweepSelection: [],
  advancedBenchmarkPulseSelection: [],
  advancedBenchmarkSweepSelection: [],
  updateBenchmarkName: (name: string) => set(() => ({ benchmarkName: name })),
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
