export type ComPortProps = {
  path: string;
  manufacturer: string;
  serialNumber: string;
  pnpId: string;
  locationId: string;
  friendlyName: string;
  vendorId: string;
  productId: string;
};

export enum CurrentRangeType {
  ONE_UA = "1uA",
  TEN_UA = "10uA",
  HUNDRED_UA = "100uA",
  ONE_MA = "1mA",
}

export enum DecimalType {
  DECIMAL = 3,
}

export enum ReadyCommandType {
  READY = "Ready",
}

export enum TestCommandType {
  TESTBOARD_WEB = "tw",
}

export enum ManualCommandType {
  MANUALREAD_WEB = "mrw",
  MANUALWRITE_WEB = "mww",
}

export enum StandardBenchmarkPulseType {
  IVCHARTPULSE_WEB = "ivpw",
  LOGLOGPULSE_WEB = "llpw",
  ONOFFPULSE_R_WEB = "oopw",
  DISTRIBUTIONPULSE_R_WEB = "dirpw",
  CUMULATIVEPULSE_R_WEB = "curpw",
  ONOFFPULSE_V_WEB = "oorpw",
  DISTRIBUTIONPULSE_V_WEB = "divpw",
  CUMULATIVEPULSE_V_WEB = "cuvpw",
  CONDUCTANCEPULSE_WEB = "cpvpw",
}

export enum StandardBenchmarkSweepType {
  IVCHARTSWEEP_WEB = "ivsw",
  LOGLOGSWEEP_WEB = "llsw",
  ONOFFSWEEP_R_WEB = "oosw",
  DISTRIBUTIONSWEEP_R_WEB = "dirsw",
  CUMULATIVESWEEP_R_WEB = "cursw",
  CONDUCTANCESWEEP_R_WEB = "cprsw",
  ONOFFSWEEP_V_WEB = "oorsw",
  DISTRIBUTIONSWEEP_V_WEB = "divsw",
  CUMULATIVESWEEP_V_WEB = "cuvsw",
  // CONDUCTANCESWEEP_V_WEB = "cpvsw",
}

export enum StabilityBenchmarkPulseType {
  ENDURANCEPULSE_WEB = "ecpw",
  RETENTIONPULSE_WEB = "rtpw",
}

export enum StabilityBenchmarkSweepType {
  ENDURANCESWEEP_WEB = "ecsw",
  RETENTIONSWEEP_WEB = "rtsw",
}

export enum BiorealisticBenchmarkBiologicalNeuronType {
  CHART_STDP_WEB = "stw",
  PAIRPULSE_WEB = "ppw",
  CHART_IPSC_EPSC_WEB = "ciew",
}

export enum BiorealisticBenchmarkBiologicalSynapseType {
  CURRENT_UNDER_DIFFERENT_PULSENUMBER_WDITH_WEB = "cudpww",
}

export enum AdvancedBenchmarkPulseType {
  MULTILEVEL_COMPLIANCE_IVCHARTPULSE_WEB = "ivmcpw",
  MULTILEVEL_VOLTAGE_IVCHARTPULSE_WEB = "ivmvpw",
}

export enum AdvancedBenchmarkSweepType {
  MULTILEVEL_COMPLIANCE_IVCHARTSWEEP_WEB = "ivmcsw",
  MULTILEVEL_VOLTAGE_IVCHARTSWEEP_WEB = "ivmvsw",
}

export type BoardCommandType =
  | ReadyCommandType
  | TestCommandType
  | ManualCommandType
  | StandardBenchmarkPulseType
  | StandardBenchmarkSweepType
  | StabilityBenchmarkPulseType
  | StabilityBenchmarkSweepType
  | BiorealisticBenchmarkBiologicalNeuronType
  | BiorealisticBenchmarkBiologicalSynapseType
  | AdvancedBenchmarkPulseType
  | AdvancedBenchmarkSweepType;

// export type BoardCommandType = {
//   Ready?: "Ready";
//   TESTBOARD?: TestCommandType;
//   MANUALOPERATION?: ManualCommandType;
//   STANDARDPULSE?: StandardBenchmarkPulseType;
//   STANDARDSWEEP?: StandardBenchmarkSweepType;
//   STABILITYPULSE?: StabilityBenchmarkPulseType;
//   STABILITYSWEEP?: StabilityBenchmarkSweepType;
//   ADVANCEDPULSE?: AdvancedBenchmarkPulseType;
//   ADVANCEDSWEEP?: AdvancedBenchmarkSweepType;
// };
