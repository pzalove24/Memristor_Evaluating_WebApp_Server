import { Box, Tab, Tabs } from "@mui/material";
import React from "react";
import BenchmarkSetupTabPanel from "./BenchmarkSetupTabPanel";
import useBenchmarkSetupStore from "@/shared/benchmarkSetupStore";

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const BenchmarkSetupMenu = () => {
  const [value, setValue] = React.useState<number>(0);

  const handleValueToBenchmarkType = (value: number) => {
    switch (value) {
      case 0:
        return "Standard Benchmark";
      case 1:
        return "Stability Benchmark";
      case 2:
        return "Biorealistic Benchmark";
      case 3:
        return "Advanced Benchmark";
      default:
        return "Stability Benchmark";
    }
  };

  const { changeBenchmarkType } = useBenchmarkSetupStore();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    changeBenchmarkType(handleValueToBenchmarkType(newValue));
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
      // tabTable: {
      //   input: [],
      //   method: [],
      // },
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
              mt: 2,
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
