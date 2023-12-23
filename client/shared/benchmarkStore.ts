import { create } from "zustand";
import React from "react";
import {
  AdvancedBenchmarkPulseType,
  AdvancedBenchmarkSweepType,
  StabilityBenchmarkPulseType,
  StabilityBenchmarkSweepType,
  StandardBenchmarkPulseType,
  StandardBenchmarkSweepType,
} from "@/types/commandType";

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
  standardBenchmarkSweepSelection?: StandardBenchmarkSweepType[];
  stabilityBenchmarkPulseSelection?: StabilityBenchmarkPulseType[];
  stabilityBenchmarkSweepSelection?: StabilityBenchmarkSweepType[];
  advancedBenchmarkPulseSelection?: AdvancedBenchmarkPulseType[];
  advancedBenchmarkSweepSelection?: AdvancedBenchmarkSweepType[];
};

export type benchmarkAction = {
  updateBenchmarkName: (name: string) => void;
  updateStatus: (status: benchmarkStatus) => void;
  addStandardBenchmarkPulse: (
    benchmarkSelects: StandardBenchmarkPulseType[]
  ) => void;
  addStandardBenchmarkSweep: (
    benchmarkSelects: StandardBenchmarkSweepType[]
  ) => void;
  addstabilityBenchmarkPulse: (
    benchmarkSelects: StabilityBenchmarkPulseType[]
  ) => void;
  addstabilityBenchmarkSweep: (
    benchmarkSelects: StabilityBenchmarkSweepType[]
  ) => void;
  addAdvancedBenchmarkPulse: (
    benchmarkSelects: AdvancedBenchmarkPulseType[]
  ) => void;
  addAdvancedBenchmarkSweep: (
    benchmarkSelects: AdvancedBenchmarkSweepType[]
  ) => void;
};

const useBenchmarkStore = create<benchmarkState & benchmarkAction>((set) => ({
  benchmarkName: "",
  benchmarkStatus: "TESTNAME",
  standardBenchmarkPulseSelection: [],
  standardBenchmarkSweepSelection: [],
  stabilityBenchmarkPulseSelection: [],
  stabilityBenchmarkSweepSelection: [],
  advancedBenchmarkPulseSelection: [],
  advancedBenchmarkSweepSelection: [],
  updateBenchmarkName: (name: string) => set(() => ({ benchmarkName: name })),
  updateStatus: (status: benchmarkStatus) =>
    set(() => ({ benchmarkStatus: status })),
  addStandardBenchmarkPulse: (benchmarkSelects: StandardBenchmarkPulseType[]) =>
    set(() => ({ standardBenchmarkPulseSelection: benchmarkSelects })),
  addStandardBenchmarkSweep: (benchmarkSelects: StandardBenchmarkSweepType[]) =>
    set(() => ({ standardBenchmarkSweepSelection: benchmarkSelects })),
  addstabilityBenchmarkPulse: (
    benchmarkSelects: StabilityBenchmarkPulseType[]
  ) => set(() => ({ stabilityBenchmarkPulseSelection: benchmarkSelects })),
  addstabilityBenchmarkSweep: (
    benchmarkSelects: StabilityBenchmarkSweepType[]
  ) => set(() => ({ stabilityBenchmarkSweepSelection: benchmarkSelects })),
  addAdvancedBenchmarkPulse: (benchmarkSelects: AdvancedBenchmarkPulseType[]) =>
    set(() => ({ advancedBenchmarkPulseSelection: benchmarkSelects })),
  addAdvancedBenchmarkSweep: (benchmarkSelects: AdvancedBenchmarkSweepType[]) =>
    set(() => ({ advancedBenchmarkSweepSelection: benchmarkSelects })),
}));

export default useBenchmarkStore;
