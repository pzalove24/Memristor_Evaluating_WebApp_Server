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
  listAllBenchmarkInputName,
  listAllBenchmarkMethodName,
  listAllMethodType,
  listAllVoltageType,
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
  // const [setup, setSetup] = useState<string>("Input");

  const {
    benchmarkType,
    setup,
    voltageType,
    methodType,
    pageIndex,
    limit,
    changeSetup,
  } = useBenchmarkSetupStore();

  const handleChangeSetup = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeSetup(event.target.value as "Input" | "Method");
  };

  const queryListBenchmarkSetups: TListBenchmarkSetupsRequest = {
    type: benchmarkType,
    setup: setup,
    voltageType: voltageType,
    methodType: methodType,
    page: pageIndex,
    limit: limit,
  };

  const {
    data: listBenchmarkSetup,
    isLoading,
    // isRefetching,
    refetch: refetchListBenchmarkSetup,
  } = useQuery({
    queryKey: ["listBenchmarkSetups", setup], //benchmarkType, voltageType, pageIndex, limit
    queryFn: async () => {
      const [response, _] = await listBenchmarkSetups(queryListBenchmarkSetups);
      const res = await response;
      return res;
    },
  });

  console.log("data", listBenchmarkSetup);

  const { data: listVoltageTypes, refetch: refetchListAllVoltageType } =
    useQuery({
      queryKey: ["listAllVoltageType"],
      queryFn: async () => {
        const [response, _] = await listAllVoltageType();
        const res = await response;
        return res;
      },
    });

  const { data: listMethodTypes, refetch: refetchListAllMethodType } = useQuery(
    {
      queryKey: ["listAllMethodType"],
      queryFn: async () => {
        const [response, _] = await listAllMethodType();
        const res = await response;
        return res;
      },
    }
  );

  const searchInputName = "";
  const searchMethodName = "";

  const {
    data: listBenchmarkInputNames,
    refetch: refetchListAllBenchmarkInputNames,
  } = useQuery({
    queryKey: ["listBenchmarkInputNames", benchmarkType], //searchInputName
    queryFn: async () => {
      const queryInputName = {
        type: benchmarkType,
        searchInputName,
        voltageType,
      };
      const [response, _] = await listAllBenchmarkInputName(queryInputName);
      const res = await response;
      return res;
    },
  });

  const {
    data: listBenchmarkMethodNames,
    refetch: refetchListAllBenchmarkMethodNames,
  } = useQuery({
    queryKey: ["listBenchmarkMethodNames", benchmarkType], //searchMethodName
    queryFn: async () => {
      const queryMethodName = {
        type: benchmarkType,
        searchMethodName,
        voltageType,
        methodType,
      };
      const [response, _] = await listAllBenchmarkMethodName(queryMethodName);
      const res = await response;
      return res;
    },
  });

  useEffect(() => {
    // refetch table
    refetchListBenchmarkSetup();
  }, [benchmarkType, setup, voltageType, methodType, pageIndex, limit]);


  useEffect(() => {
    //refetch autocomplete
    refetchListAllBenchmarkInputNames()
    refetchListAllBenchmarkMethodNames()
  }, [benchmarkType, voltageType, methodType])

  if (isLoading) {
    return <>Loading1</>;
  }

  // if (isRefetching){
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
