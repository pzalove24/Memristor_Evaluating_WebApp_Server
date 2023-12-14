"use client";

import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import SweepIVInput from "./SweepIVInput";
import PulseIVInput from "./PulseIVInput";
import EnduranceCycleInput from "./EnduranceCycleInput";
import ConductancePulseNumberInput from "./ConductancePulseNumberInput";
import SweepRetentionTimeInput from "./SweepRetentionTimeInput";
import PulseRetentionTimeInput from "./PulseRetentionTimeInput";
import { WaveFunctionSweepIVwaveformProps } from "@/modules/Chart/Waveform/SweepIVwaveform/WaveFunctionSweepIVwaveform";
import { WaveFunctionPulseIVwaveformProps } from "@/modules/Chart/Waveform/PulseIVwaveform/WaveFunctionPulseIVwaveform";
import { WaveFunctionEnduranceCycleWaveformProps } from "@/modules/Chart/Waveform/EnduranceCycleWaveform/WaveFunctionEnduranceCycleWaveform";
import { WaveFunctionSweepRetentionTimeWaveformProps } from "@/modules/Chart/Waveform/SweepRetentionTimeWaveform/WaveFunctionSweepRetentionTimeWaveform";
import { WaveFunctionPulseRetentionTimeWaveformProps } from "@/modules/Chart/Waveform/PulseRetentionTimeWaveform/WaveFunctionPulseRetentionTimeWaveform";
import { WaveFunctionConductancePulseTimeProps } from "@/modules/Chart/Waveform/ConductancePulseNumberWaveform/WaveFunctionConductancePulseTime";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`parameterInput-tabpanel-${index}`}
      aria-labelledby={`parameterInput-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{ p: 3, height: 440, overflow: "hidden", overflowY: "scroll" }}
        >
          {children}
        </Box>
      )}
    </div>
  );
}

function ParameterInputTabProps(index: number) {
  return {
    id: `parameterInput-tab-${index}`,
    "aria-controls": `parameterInput-tabpanel-${index}`,
  };
}

type ParameterInputTabsProps = {
  handleChangeSweepIVwaveformValue: (
    positivePulseValue: number,
    negativePulseValue: number,
    pulseDuration: number,
    stepsPerSegment: number,
    cycles: number
  ) => void;
  sweepIVwaveformValue: WaveFunctionSweepIVwaveformProps;
  handleChangePulseIVwaveformValue: (
    positivePulseValue: number,
    negativePulseValue: number,
    pulseDuration: number,
    distanceBetweenPulse: number,
    stepsPerSegment: number,
    cycles: number
  ) => void;
  pulseIVwaveformValue: WaveFunctionPulseIVwaveformProps;
  handleChangeEnduranceCycleWaveformValue: (
    positivePulseValue: number,
    intermediatePulseValue: number,
    negativePulseValue: number,
    positivePulseDuration: number,
    intermediatePulseDuration: number,
    negativePulseDuration: number,
    distanceBetweenPulse: number,
    cycles: number
  ) => void;
  enduranceCycleWaveformValue: WaveFunctionEnduranceCycleWaveformProps;
  handleChangeSweepRetentionTimeWaveformValue: (
    positivePulseValue: number,
    intermediatePulseValue: number,
    negativePulseValue: number,
    positivePulseDuration: number,
    intermediatePulseDuration: number,
    negativePulseDuration: number,
    distanceBetweenPulse: number,
    cycles: number
  ) => void;
  sweepRetentionTimeWaveformValue: WaveFunctionSweepRetentionTimeWaveformProps;
  handleChangePulseRetentionTimeWaveformValue: (
    positivePulseValue: number,
    intermediatePulseValue: number,
    negativePulseValue: number,
    positivePulseDuration: number,
    intermediatePulseDuration: number,
    negativePulseDuration: number,
    distanceBetweenPulse: number,
    cycleIntermediatePulse: number,
    cycles: number
  ) => void;
  pulseRetentionTimeWaveformValue: WaveFunctionPulseRetentionTimeWaveformProps;
  handleChangesetConductancePulseNumberWaveformValue: (
    positivePulseValue: number,
    intermediatePulseValue: number,
    negativePulseValue: number,
    positivePulseDuration: number,
    intermediatePulseDuration: number,
    negativePulseDuration: number,
    distanceBetweenPulse: number,
    cycleReadingPulse: number,
    cycles: number
  ) => void;
  conductancePulseNumberWaveformValue: WaveFunctionConductancePulseTimeProps;
};

export default function ParameterInputTabs({
  handleChangeSweepIVwaveformValue,
  sweepIVwaveformValue,
  handleChangePulseIVwaveformValue,
  pulseIVwaveformValue,
  handleChangeEnduranceCycleWaveformValue,
  enduranceCycleWaveformValue,
  handleChangeSweepRetentionTimeWaveformValue,
  sweepRetentionTimeWaveformValue,
  handleChangePulseRetentionTimeWaveformValue,
  pulseRetentionTimeWaveformValue,
  handleChangesetConductancePulseNumberWaveformValue,
  conductancePulseNumberWaveformValue,
}: ParameterInputTabsProps) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
        >
          <Tab label="Sweep-IV" {...ParameterInputTabProps(0)} />
          <Tab label="Pulse-IV" {...ParameterInputTabProps(1)} />
          <Tab label="Conductance-PulseNumber" {...ParameterInputTabProps(2)} />
          <Tab label="Endurance-Cycle" {...ParameterInputTabProps(3)} />
          <Tab label="Sweep-RetentionTime" {...ParameterInputTabProps(4)} />
          <Tab label="Pulse-RetentionTime" {...ParameterInputTabProps(5)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <SweepIVInput
          handleChangeSweepIVwaveformValue={handleChangeSweepIVwaveformValue}
          sweepIVwaveformValue={sweepIVwaveformValue}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <PulseIVInput
          handleChangePulseIVwaveformValue={handleChangePulseIVwaveformValue}
          pulseIVwaveformValue={pulseIVwaveformValue}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <ConductancePulseNumberInput
          handleChangesetConductancePulseNumberWaveformValue={
            handleChangesetConductancePulseNumberWaveformValue
          }
          conductancePulseNumberWaveformValue={
            conductancePulseNumberWaveformValue
          }
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <EnduranceCycleInput
          handleChangeEnduranceCycleWaveformValue={
            handleChangeEnduranceCycleWaveformValue
          }
          enduranceCycleWaveformValue={enduranceCycleWaveformValue}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <SweepRetentionTimeInput
          handleChangeSweepRetentionTimeWaveformValue={
            handleChangeSweepRetentionTimeWaveformValue
          }
          sweepRetentionTimeWaveformValue={sweepRetentionTimeWaveformValue}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        <PulseRetentionTimeInput
          handleChangePulseRetentionTimeWaveformValue={
            handleChangePulseRetentionTimeWaveformValue
          }
          pulseRetentionTimeWaveformValue={pulseRetentionTimeWaveformValue}
        />
      </CustomTabPanel>
    </Box>
  );
}
