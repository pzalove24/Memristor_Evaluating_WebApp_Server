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
  ONOFFPULSE_WEB = "oopw",
  DISTRIBUTIONPULSE_WEB = "dipw",
  CUMULATIVEPULSE_WEB = "cupw",
  CONDUCTANCEPULSE_WEB = "cppw",
}

export enum StandardBenchmarkSweepType {
  IVCHARTSWEEP_WEB = "ivsw",
  LOGLOGSWEEP_WEB = "llsw",
  ONOFFSWEEP_WEB = "oosw",
  DISTRIBUTIONSWEEP_WEB = "disw",
  CUMULATIVESWEEP_WEB = "cusw",
  CONDUCTANCESWEEP_WEB = "cpsw",
}

export enum StabilityBenchmarkPulseType {
  ENDURANCEPULSE_WEB = "ecpw",
  RETENTIONPULSE_WEB = "rtpw",
}

export enum StabilityBenchmarkSweepType {
  ENDURANCESWEEP_WEB = "ecsw",
  RETENTIONSWEEP_WEB = "rtsw",
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
