import { create } from "zustand";
import React from "react";
import {
  AdvancedBenchmarkPulseType,
  AdvancedBenchmarkSweepType,
  BiorealisticBenchmarkBiologicalNeuronType,
  BiorealisticBenchmarkBiologicalSynapseType,
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
  biorealisticBenchmarkSelection?: (
    | BiorealisticBenchmarkBiologicalNeuronType
    | BiorealisticBenchmarkBiologicalSynapseType
  )[];
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
  addStabilityBenchmarkPulse: (
    benchmarkSelects: StabilityBenchmarkPulseType[]
  ) => void;
  addStabilityBenchmarkSweep: (
    benchmarkSelects: StabilityBenchmarkSweepType[]
  ) => void;
  addBiorealisticBenchmark: (
    benchmarkSelects: (
      | BiorealisticBenchmarkBiologicalNeuronType
      | BiorealisticBenchmarkBiologicalSynapseType
    )[]
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
  biorealisticBenchmarkSelection: [],
  advancedBenchmarkPulseSelection: [],
  advancedBenchmarkSweepSelection: [],
  updateBenchmarkName: (name: string) => set(() => ({ benchmarkName: name })),
  updateStatus: (status: benchmarkStatus) =>
    set(() => ({ benchmarkStatus: status })),
  addStandardBenchmarkPulse: (benchmarkSelects: StandardBenchmarkPulseType[]) =>
    set(() => ({ standardBenchmarkPulseSelection: benchmarkSelects })),
  addStandardBenchmarkSweep: (benchmarkSelects: StandardBenchmarkSweepType[]) =>
    set(() => ({ standardBenchmarkSweepSelection: benchmarkSelects })),
  addStabilityBenchmarkPulse: (
    benchmarkSelects: StabilityBenchmarkPulseType[]
  ) => set(() => ({ stabilityBenchmarkPulseSelection: benchmarkSelects })),
  addStabilityBenchmarkSweep: (
    benchmarkSelects: StabilityBenchmarkSweepType[]
  ) => set(() => ({ stabilityBenchmarkSweepSelection: benchmarkSelects })),
  addBiorealisticBenchmark: (
    benchmarkSelects: (
      | BiorealisticBenchmarkBiologicalNeuronType
      | BiorealisticBenchmarkBiologicalSynapseType
    )[]
  ) => set(() => ({ biorealisticBenchmarkSelection: benchmarkSelects })),
  addAdvancedBenchmarkPulse: (benchmarkSelects: AdvancedBenchmarkPulseType[]) =>
    set(() => ({ advancedBenchmarkPulseSelection: benchmarkSelects })),
  addAdvancedBenchmarkSweep: (benchmarkSelects: AdvancedBenchmarkSweepType[]) =>
    set(() => ({ advancedBenchmarkSweepSelection: benchmarkSelects })),
}));

export default useBenchmarkStore;
