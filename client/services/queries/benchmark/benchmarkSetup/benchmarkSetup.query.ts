import {
  BenchmarkInputWithInputSetup,
  BenchmarkMethodWithInput,
  getBenchmarkInputNames,
  getBenchmarkInputSetups,
  getBenchmarkMethodNames,
  getBenchmarkUnits,
  getCreateBenchmarkInputBenchmarkInputSetup,
  getDataTypes,
  getMethodTypes,
  getVoltageTypes,
  postBenchmarkSetups,
} from "@/services/apis/benchmark/benchmarkSetup.api";
import { TabLabelBenchmarkSetup } from "@/shared/benchmarkSetupStore";
import { useQuery } from "@tanstack/react-query";

export type TUsePostBenchmarkSetups = {
  benchmarkType: TabLabelBenchmarkSetup;
  setup: "Input" | "Method";
  voltageType: string;
  methodType: string;
  pageIndex: number;
  limit: number;
  benchmarkInputs?: BenchmarkInputWithInputSetup[];
  benchmarkMethods?: BenchmarkMethodWithInput[];
};

export type TUseGetBenchmarkInputNames = {
  benchmarkType: TabLabelBenchmarkSetup;
  benchmarkInputsName: string;
  voltageType: string;
};
export type TUseGetBenchmarkMethodNames = {
  benchmarkType: TabLabelBenchmarkSetup;
  benchmarkMethodsName: string;
  voltageType: string;
  methodType: string;
};

export const usePostBenchmarkSetups = ({
  benchmarkType,
  setup,
  voltageType,
  methodType,
  pageIndex,
  limit,
  benchmarkInputs,
  benchmarkMethods,
}: TUsePostBenchmarkSetups) => {
  const queryListBenchmarkSetups = {
    type: benchmarkType,
    setup: setup,
    voltageType: voltageType,
    methodType: methodType,
    page: pageIndex,
    limit: limit,
  };

  const handleBodyListBenchmarkSetups = () => {
    if (setup === "Input") {
      const bodyListBenchmarkSetups = {
        filteredBenchmarks: benchmarkInputs,
      };
      return bodyListBenchmarkSetups;
    } else {
      const bodyListBenchmarkSetups = {
        filteredBenchmarks: benchmarkMethods,
      };
      return bodyListBenchmarkSetups;
    }
  };
  return useQuery({
    queryKey: ["listBenchmarkSetups", setup], //benchmarkType, voltageType, pageIndex, limit
    queryFn: async () => {
      console.log("benchmarkInputs", handleBodyListBenchmarkSetups());
      const [response, _] = await postBenchmarkSetups(
        queryListBenchmarkSetups,
        handleBodyListBenchmarkSetups()
      );
      const res = await response;
      return res;
    },
    enabled: !!benchmarkType,
  });
};

export const useGetBenchmarkUnits = () => {
  return useQuery({
    queryKey: ["listAllBenchmarkUnit"],
    queryFn: async () => {
      const [response, _] = await getBenchmarkUnits();
      const res = await response;
      return res;
    },
  });
};

export const useGetDataTypes = () => {
  return useQuery({
    queryKey: ["listAllDataType"],
    queryFn: async () => {
      const [response, _] = await getDataTypes();
      const res = await response;
      return res;
    },
  });
};

export const useGetVoltageTypes = () => {
  return useQuery({
    queryKey: ["listAllVoltageType"],
    queryFn: async () => {
      const [response, _] = await getVoltageTypes();
      const res = await response;
      return res;
    },
  });
};

export const useGetMethodTypes = () => {
  return useQuery({
    queryKey: ["listAllMethodType"],
    queryFn: async () => {
      const [response, _] = await getMethodTypes();
      const res = await response;
      return res;
    },
  });
};

export const useGetBenchmarkInputNames = ({
  benchmarkType,
  benchmarkInputsName,
  voltageType,
}: TUseGetBenchmarkInputNames) => {
  const queryInputName = {
    type: benchmarkType,
    searchName: benchmarkInputsName,
    voltageType,
  };
  return useQuery({
    queryKey: ["listBenchmarkInputNames", benchmarkType], //searchInputName
    queryFn: async () => {
      const [response, _] = await getBenchmarkInputNames(queryInputName);
      const res = await response;
      return res;
    },
  });
};

export const useGetBenchmarkMethodNames = ({
  benchmarkType,
  benchmarkMethodsName,
  voltageType,
  methodType,
}: TUseGetBenchmarkMethodNames) => {
  const queryMethodName = {
    type: benchmarkType,
    searchName: benchmarkMethodsName,
    voltageType,
    methodType,
  };
  return useQuery({
    queryKey: ["listBenchmarkMethodNames", benchmarkType], //searchMethodName
    queryFn: async () => {
      const [response, _] = await getBenchmarkMethodNames(queryMethodName);
      const res = await response;
      return res;
    },
  });
};

export const useGetBenchmarkInputSetups = (id: string) => {
  return useQuery({
    queryKey: ["listBenchmarkInputSetup", { id }],
    queryFn: async () => {
      const [response, _] = await getBenchmarkInputSetups(id);
      const res = await response;
      return res;
    },
  });
};

export const useGetCreateBenchmarkInputBenchmarkInputSetup = (id: string) => {
  return useQuery({
    queryKey: ["getCreateBenchmarkInputBenchmarkInputSetup", { id }],
    queryFn: async () => {
      const [response, _] = await getCreateBenchmarkInputBenchmarkInputSetup(
        id
      );
      const res = await response;
      return res;
    },
  });
};
