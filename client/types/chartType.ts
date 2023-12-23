import { FormikProps } from "formik";
import {
  AdvancedBenchmarkPulseType,
  AdvancedBenchmarkSweepType,
  BoardCommandType,
  ManualCommandType,
  StabilityBenchmarkPulseType,
  StabilityBenchmarkSweepType,
  StandardBenchmarkPulseType,
  StandardBenchmarkSweepType,
} from "./commandType";
import { TStandardBenchmarkType } from "@/modules/Benchmark/StandardBenchmark/StandardBenchmarkPartOne";

export enum DefaultBenchmarkLabel {
  StandardBenchmarkPulseChart = "Standard Benchmark using Sweep Voltage Waveform",
  StandardBenchmarkSweepChart = "Standard Benchmark using Pulse Voltage Waveform",
  StabilityBenchmarkPulseChart = "Stability Benchmark using Pulse Voltage Waveform",
  StabilityBenchmarkSweepChart = "Stability Benchmark using Sweep Voltage Waveform",
  BiorealisticBenchmarkBiologicalNeuronChart = "Biorealistic Benchmark for Biological Neuron",
  BiorealisticBenchmarkBiologicalSynapseChart = "Biorealistic Benchmark for Biological Synapse",
  AdvancedBenchmarkPulseChart = "Advanced Benchmark using Sweep Voltage Waveform",
  AdvancedBenchmarkSweepChart = "Advanced Benchmark using Sweep Voltage Waveform",
}

export type DefaultBenchmarkChartType = {
  title: string;
  xTitle: string;
  yTitle: string;
  label: DefaultBenchmarkLabel;
  chartTag: boolean;
  tag: BoardCommandType;
};

export type ManualChartType = {
  manualReadChart: DefaultBenchmarkChartType & {
    tag: ManualCommandType.MANUALREAD_WEB;
  };
  manualWriteChart: DefaultBenchmarkChartType & {
    tag: ManualCommandType.MANUALWRITE_WEB;
  };
};

export type StandardBenchmarkPulseChart = {
  ivChartPulseChart: DefaultBenchmarkChartType & {
    tag: StandardBenchmarkPulseType.IVCHARTPULSE_WEB;
  };
  loglogPulseChart: DefaultBenchmarkChartType & {
    tag: StandardBenchmarkPulseType.LOGLOGPULSE_WEB;
  };
  onoffPulseResistanceChart: DefaultBenchmarkChartType & {
    tag: StandardBenchmarkPulseType.ONOFFPULSE_R_WEB;
  };
  distributionPulseResistanceChart: DefaultBenchmarkChartType & {
    tag: StandardBenchmarkPulseType.DISTRIBUTIONPULSE_R_WEB;
  };
  cumulativePulseResistanceChart: DefaultBenchmarkChartType & {
    tag: StandardBenchmarkPulseType.CUMULATIVEPULSE_R_WEB;
  };
  onoffPulseVoltageChart: DefaultBenchmarkChartType & {
    tag: StandardBenchmarkPulseType.ONOFFPULSE_V_WEB;
  };
  distributionPulseVoltageChart: DefaultBenchmarkChartType & {
    tag: StandardBenchmarkPulseType.DISTRIBUTIONPULSE_V_WEB;
  };
  cumulativePulseVoltageChart: DefaultBenchmarkChartType & {
    tag: StandardBenchmarkPulseType.CUMULATIVEPULSE_V_WEB;
  };
  conductancePulseChart: DefaultBenchmarkChartType & {
    tag: StandardBenchmarkPulseType.CONDUCTANCEPULSE_WEB;
  };
};

export type StandardBenchmarkSweepChart = {
  ivChartSweepChart: DefaultBenchmarkChartType & {
    tag: StandardBenchmarkSweepType.IVCHARTSWEEP_WEB;
  };
  loglogSweepChart: DefaultBenchmarkChartType & {
    tag: StandardBenchmarkSweepType.LOGLOGSWEEP_WEB;
  };
  onoffSweepResistanceChart: DefaultBenchmarkChartType & {
    tag: StandardBenchmarkSweepType.ONOFFSWEEP_R_WEB;
  };
  distributionSweepResistanceChart: DefaultBenchmarkChartType & {
    tag: StandardBenchmarkSweepType.DISTRIBUTIONSWEEP_R_WEB;
  };
  cumulativeSweepResistanceChart: DefaultBenchmarkChartType & {
    tag: StandardBenchmarkSweepType.CUMULATIVESWEEP_R_WEB;
  };
  onoffSweepVoltageChart: DefaultBenchmarkChartType & {
    tag: StandardBenchmarkSweepType.ONOFFSWEEP_V_WEB;
  };
  distributionSweepVoltageChart: DefaultBenchmarkChartType & {
    tag: StandardBenchmarkSweepType.DISTRIBUTIONSWEEP_V_WEB;
  };
  cumulativeSweepVoltageChart: DefaultBenchmarkChartType & {
    tag: StandardBenchmarkSweepType.CUMULATIVESWEEP_V_WEB;
  };
};

export type StabilityBenchmarkPulseChart = {
  endurancePulseChart: DefaultBenchmarkChartType & {
    tag: StabilityBenchmarkPulseType.ENDURANCEPULSE_WEB;
  };
  retentionPulseChart: DefaultBenchmarkChartType & {
    tag: StabilityBenchmarkPulseType.RETENTIONPULSE_WEB;
  };
};

export type StabilityBenchmarkSweepChart = {
  enduranceSweepChart: DefaultBenchmarkChartType & {
    tag: StabilityBenchmarkSweepType.ENDURANCESWEEP_WEB;
  };
  retentionSweepChart: DefaultBenchmarkChartType & {
    tag: StabilityBenchmarkSweepType.RETENTIONSWEEP_WEB;
  };
};

export type AdvancedBenchmarkPulseChart = {
  ivChartPulseChart_mc: DefaultBenchmarkChartType & {
    tag: AdvancedBenchmarkPulseType.MULTILEVEL_COMPLIANCE_IVCHARTPULSE_WEB;
  };
  loglogPulseChart_mv: DefaultBenchmarkChartType & {
    tag: AdvancedBenchmarkPulseType.MULTILEVEL_VOLTAGE_IVCHARTPULSE_WEB;
  };
};

export type AdvancedBenchmarkSweepChart = {
  ivChartSweepChart_mc: DefaultBenchmarkChartType & {
    tag: AdvancedBenchmarkSweepType.MULTILEVEL_COMPLIANCE_IVCHARTSWEEP_WEB;
  };
  loglogSweepChart_mv: DefaultBenchmarkChartType & {
    tag: AdvancedBenchmarkSweepType.MULTILEVEL_VOLTAGE_IVCHARTSWEEP_WEB;
  };
};

export type BenchmarkChartType = {
  ManualChartType?: ManualChartType;
  StandardBenchmarkPulseChartType?: StandardBenchmarkPulseChart;
  StandardBenchmarkSweepChartType?: StandardBenchmarkSweepChart;
  StabilityBenchmarkPulseChartType?: StabilityBenchmarkPulseChart;
  StabilityBenchmarkSweepChartType?: StabilityBenchmarkSweepChart;
  AdvancedBenchmarkPulseChartType?: AdvancedBenchmarkPulseChart;
  AdvancedBenchmarkSweepChartType?: AdvancedBenchmarkSweepChart;
};

export type StandardBenchmarkChartType =
  | StandardBenchmarkPulseChart
  | StandardBenchmarkSweepChart;
