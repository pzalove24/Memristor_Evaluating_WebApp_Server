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
import useBenchmarkSetupStore from "@/shared/benchmarkSetupStore";
import {
  useGetBenchmarkInputNames,
  useGetBenchmarkMethodNames,
  useGetMethodTypes,
  useGetVoltageTypes,
  usePostBenchmarkSetups,
} from "@/services/queries/benchmark/benchmarkSetup/benchmarkSetup.query";

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
  // const [setup, setSetup] = useState<string>("Input");

  const {
    benchmarkType,
    setup,
    voltageType,
    methodType,
    pageIndex,
    limit,
    changeSetup,
    benchmarkInputsName,
    benchmarkMethodsName,
    benchmarkInputs,
    benchmarkMethods,
  } = useBenchmarkSetupStore();

  const handleChangeSetup = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeSetup(event.target.value as "Input" | "Method");
  };

  const {
    data: listBenchmarkSetup,
    refetch: refetchListBenchmarkSetup,
    isLoading,
  } = usePostBenchmarkSetups({
    benchmarkType,
    setup,
    voltageType,
    methodType,
    pageIndex,
    limit,
    benchmarkInputs,
    benchmarkMethods,
  });
  
  const { data: listVoltageTypes, refetch: refetchListAllVoltageType } =
    useGetVoltageTypes();
  const { data: listMethodTypes, refetch: refetchListAllMethodType } =
    useGetMethodTypes();
  const {
    data: listBenchmarkInputNames,
    refetch: refetchListAllBenchmarkInputNames,
  } = useGetBenchmarkInputNames({
    benchmarkType,
    benchmarkInputsName,
    voltageType,
  });

  const {
    data: listBenchmarkMethodNames,
    refetch: refetchListAllBenchmarkMethodNames,
  } = useGetBenchmarkMethodNames({
    benchmarkType,
    benchmarkMethodsName,
    voltageType,
    methodType,
  });

  useEffect(() => {
    // refetch table
    refetchListBenchmarkSetup();
  }, [
    benchmarkType,
    setup,
    voltageType,
    methodType,
    pageIndex,
    limit,
    benchmarkInputs,
    benchmarkMethods,
  ]);

  useEffect(() => {
    //refetch autocomplete
    refetchListAllBenchmarkInputNames();
    refetchListAllBenchmarkMethodNames();
  }, [
    benchmarkType,
    voltageType,
    methodType,
    benchmarkInputsName,
    benchmarkMethodsName,
  ]);

  if (isLoading) {
    return <>Loading1</>;
  }

  // if (isRefetching){
  //   console.log('isReload')
  //   return <>Refetching</>
  // }

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
          {setup === "Input" &&
          listBenchmarkSetup &&
          listVoltageTypes &&
          listBenchmarkInputNames ? (
            <BenchmarkSetupTabPanelInput
              voltageTypeList={listVoltageTypes}
              listBenchmarkInputNames={listBenchmarkInputNames}
              tableData={listBenchmarkSetup}
              limit={limit}
            />
          ) : setup === "Method" &&
            listBenchmarkSetup &&
            listVoltageTypes &&
            listMethodTypes &&
            listBenchmarkMethodNames ? (
            <BenchmarkSetupTabPanelMethod
              voltageTypeList={listVoltageTypes}
              listBenchmarkMethodNames={listBenchmarkMethodNames}
              methodTypeList={listMethodTypes}
              tableData={listBenchmarkSetup}
              limit={limit}
            />
          ) : (
            <>Loading2</>
          )}
        </Grid>
      </Box>
    </TabPanel>
  );
};

export default BenchmarkSetupTabPanel;
