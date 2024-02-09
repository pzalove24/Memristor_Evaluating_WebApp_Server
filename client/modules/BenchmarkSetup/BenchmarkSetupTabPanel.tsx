import { TBenchmarkSetupTabPanelProps } from "@/types/benchmarkSetupType/benchmarkSetupTabsType";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import BenchmarkSetupTabPanelInput from "./BenchmarkSetupPanelInput";
import BenchmarkSetupTabPanelMethod from "./BenchmarkSetupPanelMethod";
import { useQuery } from "@tanstack/react-query";
import {
  TListBenchmarkSetupsRequest,
  listBenchmarkSetups,
} from "@/services/benchmark/benchmarkSetup.service";
import useBenchmarkSetupStore from "@/shared/benchmarkSetupStore";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface RowRadioButtonsGroupProps {
  setup: string;
  handleChangeSetup: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function RowRadioButtonsGroup({
  setup,
  handleChangeSetup,
}: RowRadioButtonsGroupProps) {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label" color="info">
        Select Setup
      </FormLabel>
      <RadioGroup
        row
        value={setup || "Input"}
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={handleChangeSetup}
      >
        <FormControlLabel value="Input" control={<Radio />} label="Input" />
        <FormControlLabel value="Method" control={<Radio />} label="Method" />
      </RadioGroup>
    </FormControl>
  );
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
  const [setup, setSetup] = useState<string>("Input");

  const { benchmarkType, pageIndex, limit } = useBenchmarkSetupStore();

  const handleChangeSetup = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSetup(event.target.value);
  };

  const queryListBenchmarkSetups: TListBenchmarkSetupsRequest = {
    type: benchmarkType,
    setup: "Input",
    voltage: undefined,
    method: undefined,
    page: pageIndex,
    limit: limit,
  };

  console.log("list", queryListBenchmarkSetups);

  const {
    data: listBenchmarkSetup,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["listBenchmarkSetups"],
    queryFn: async () => {
      const [response, _] = await listBenchmarkSetups(queryListBenchmarkSetups);
      const res = await response;
      return res;
    },
  });

  useEffect(() => {
    refetch();
  }, [benchmarkType, pageIndex, limit]);

  if (isLoading) {
    return <>Loading</>;
  }

  console.log("data", listBenchmarkSetup);

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
          <Grid item xs={12} md={12} marginBottom={2}>
            <RowRadioButtonsGroup
              setup={setup}
              handleChangeSetup={handleChangeSetup}
            />
          </Grid>
          {setup === "Input" && listBenchmarkSetup ? (
            <BenchmarkSetupTabPanelInput
              tableData={listBenchmarkSetup}
              limit={limit}
            />
          ) : setup === "Method" && listBenchmarkSetup ? (
            <BenchmarkSetupTabPanelMethod
              tableData={listBenchmarkSetup}
              limit={limit}
            />
          ) : (
            <>Loading</>
          )}
        </Grid>
      </Box>
    </TabPanel>
  );
};

export default BenchmarkSetupTabPanel;
