import { CheckBoxAutocomplete } from "@/components/Autocomplete/CheckBoxAutocomplete";
import { CustomTablePagination } from "@/components/Table/TablePagination";
import { TBenchmarkSetupTabPanelProps } from "@/types/benchmarkSetupType/benchmarkSetupTabsType";
import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      sx={{
        width: "100%", // Set the width to 100%
        "& > :not(style)": {
          p: 3,
        },
      }}
    >
      {value === index && (
        <Stack direction={"row"}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "column",
              width: "100%",
              height: "auto",
            }}
          >
            {children}
          </Box>
        </Stack>
      )}
    </Box>
  );
}

const BenchmarkSetupTabPanel = ({
  benchmarkTabPanel,
  value,
  index,
}: TBenchmarkSetupTabPanelProps) => {
  return (
    <TabPanel value={value} index={index}>
      <Box>
        <Typography variant="h4" fontWeight="bold" sx={{ mb: "5px" }}>
          {benchmarkTabPanel.tabLabel}
        </Typography>
        <Typography variant="body2">{"subtitle"}</Typography>
      </Box>
      <Box>
        <Grid container sx={{ mt: 3 }} columnSpacing={2}>
          <Grid item xs={12} md={4}>
            <CheckBoxAutocomplete label="Voltage Type" placeholder="voltage" />
          </Grid>
          <Grid item xs={12} md={4}>
            <CheckBoxAutocomplete label="Voltage Type" placeholder="voltage" />
          </Grid>
          <Grid item xs={12} md={4}>
            <CheckBoxAutocomplete label="Voltage Type" placeholder="voltage" />
          </Grid>
          <Grid item xs={12} md={12} marginTop={2}>
            <CustomTablePagination />
          </Grid>
        </Grid>
      </Box>
    </TabPanel>
  );
};

export default BenchmarkSetupTabPanel;
