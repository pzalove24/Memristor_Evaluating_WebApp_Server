import { Box, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import BenchmarkSetupTabPanel from "./BenchmarkSetupTabPanel";

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const BenchmarkSetupMenu = () => {
  const [value, setValue] = React.useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const benchmarkTabs = [
    {
      tabLabel: "Standard Benchmark",
    },
    {
      tabLabel: "Stability Benchmark",
    },
    {
      tabLabel: "Biorealistic Benchmark",
    },
    {
      tabLabel: "Advanced Benchmark",
    },
  ];

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
      }}
      width={"100%"}
      minHeight={"70vh"}
    >
      <Tabs
        orientation="vertical"
        variant="fullWidth"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        {benchmarkTabs.map((benchmarkTab, index: number) => (
          <Tab
            key={index}
            label={benchmarkTab.tabLabel}
            {...a11yProps(index)}
            sx={{
              textTransform: "none",
            }}
          />
        ))}
      </Tabs>
      {benchmarkTabs.map((benchmarkTabPanel, index: number) => (
        <BenchmarkSetupTabPanel
          key={index}
          benchmarkTabPanel={benchmarkTabPanel}
          value={value}
          index={index}
        />
      ))}
    </Box>
  );
};

export default BenchmarkSetupMenu;
