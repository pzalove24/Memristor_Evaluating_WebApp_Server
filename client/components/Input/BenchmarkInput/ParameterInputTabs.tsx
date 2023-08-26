"use client";

import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SweepIVInput from "./SweepIVInput";
import PulseIVInput from "./PulseIVInput";
import EnduranceCycleInput from "./EnduranceCycleInput";
import ConductancePulseNumberInput from "./ConductancePulseNumberInput";
import SweepRetentionTimeInput from "./SweepRetentionTimeInput";
import PulseRetentionTimeInput from "./PulseRetentionTimeInput";

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
      {value === index && <Box sx={{ p: 3, height: 440,overflow: "hidden",overflowY: "scroll", }}>{children}</Box>}
    </div>
  );
}

function ParameterInputTabProps(index: number) {
  return {
    id: `parameterInput-tab-${index}`,
    "aria-controls": `parameterInput-tabpanel-${index}`,
  };
}

function SweepIVInputProps(index: number) {
  return {
    id: `parameterInput-tab-${index}`,
    "aria-controls": `parameterInput-tabpanel-${index}`,
  };
}
function PulseIVInputProps(index: number) {
  return {
    id: `parameterInput-tab-${index}`,
    "aria-controls": `parameterInput-tabpanel-${index}`,
  };
}
function EnduranceCycleInputProps(index: number) {
  return {
    id: `parameterInput-tab-${index}`,
    "aria-controls": `parameterInput-tabpanel-${index}`,
  };
}
function ConductancePulseNumberInputProps(index: number) {
  return {
    id: `parameterInput-tab-${index}`,
    "aria-controls": `parameterInput-tabpanel-${index}`,
  };
}
function SweepRetentionTimeInputProps(index: number) {
  return {
    id: `parameterInput-tab-${index}`,
    "aria-controls": `parameterInput-tabpanel-${index}`,
  };
}
function PulseRetentionTimeInputProps(index: number) {
  return {
    id: `parameterInput-tab-${index}`,
    "aria-controls": `parameterInput-tabpanel-${index}`,
  };
}

export default function ParameterInputTabs() {
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
        <SweepIVInput />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <PulseIVInput />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <ConductancePulseNumberInput />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <EnduranceCycleInput />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <SweepRetentionTimeInput />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        <PulseRetentionTimeInput />
      </CustomTabPanel>
    </Box>
  );
}
