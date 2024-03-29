import { AxiosResponse } from "axios";
import { AbortFunction, request } from "../request.service";
import { queryRequest } from "../queryRequest.service";
import {
  BenchmarkMethod,
  BenchmarkInput,
  Prisma,
  BenchmarkInputSetup,
  VoltageType,
  MethodType,
  DataType,
  BenchmarkUnit,
} from "@/../server/shared/prismaTypes";

import { TPaginationResponse } from "@/../server/shared/pagniation";

export type TPostBenchmarkSetupsQueryRequest = {
  type: string;
  setup: string;
  voltageType?: string;
  methodType?: string;
  page: number;
  limit: number;
};

export type TPostBenchmarkSetupsBodyRequest = {
  filteredBenchmarks?: BenchmarkInput[] | BenchmarkMethod[];
};

export type BenchmarkMethodWithInput = Prisma.BenchmarkMethodGetPayload<{
  include: {
    BenchmarkInput: true;
    voltageType: true;
    methodType: true;
  };
}>;

export type BenchmarkInputWithInputSetup = Prisma.BenchmarkInputGetPayload<{
  include: {
    benchmarkInputSetups: true;
    voltageType: true;
  };
}>;

export type BenchmarkInputSetupWithUnit = Prisma.BenchmarkInputSetupGetPayload<{
  include: {
    benchmarkUnit: true;
    voltageType: true;
    dataType: true;
  };
}>;

export type TPostBenchmarkSetupsResponse = TPaginationResponse<
  BenchmarkMethodWithInput | BenchmarkInputWithInputSetup
>;

export type TGetBenchmarkInputNamesQueryRequest = {
  type: string;
  searchName?: string;
  voltageType?: string;
};

export type TGetBenchmarkMethodNamesQueryRequest = {
  type: string;
  searchName?: string;
  voltageType?: string;
  methodType?: string;
};

export type TUpsertBenchmarkInputSetupBodyRequest = {
  benchmarkInputSetupList: BenchmarkInputSetup[];
  deleteBenchmarkInputSetupList?: BenchmarkInputSetup[];
};

export type TUpsertCancelBenchmarkInputSetupBodyRequest = {
  benchmarkInputSetupList: BenchmarkInputSetup[];
};


export const postBenchmarkSetups = async (
  query: TPostBenchmarkSetupsQueryRequest,
  body: TPostBenchmarkSetupsBodyRequest
): Promise<
  [Promise<AxiosResponse<TPostBenchmarkSetupsResponse>["data"]>, AbortFunction]
> => {
  const [response, resAbort] = await request<TPostBenchmarkSetupsResponse>(
    "POST",
    `/benchmark-setups${queryRequest(query)}`,
    {}, // or props
    body
  );

  // zustand set State here
  return [response, resAbort];
};

export const getBenchmarkUnits = async (): Promise<
  [Promise<AxiosResponse<BenchmarkUnit[]>["data"]>, AbortFunction]
> => {
  const [response, resAbort] = await request<BenchmarkUnit[]>(
    "GET",
    `/benchmark-setups/benchmarkUnit`,
    {} // or props
  );

  return [response, resAbort];
};

export const getDataTypes = async (): Promise<
  [Promise<AxiosResponse<DataType[]>["data"]>, AbortFunction]
> => {
  const [response, resAbort] = await request<DataType[]>(
    "GET",
    `/benchmark-setups/dataType`,
    {} // or props
  );

  return [response, resAbort];
};

export const getVoltageTypes = async (): Promise<
  [Promise<AxiosResponse<VoltageType[]>["data"]>, AbortFunction]
> => {
  const [response, resAbort] = await request<VoltageType[]>(
    "GET",
    `/benchmark-setups/voltageType`,
    {} // or props
  );

  return [response, resAbort];
};

export const getMethodTypes = async (): Promise<
  [Promise<AxiosResponse<MethodType[]>["data"]>, AbortFunction]
> => {
  const [response, resAbort] = await request<MethodType[]>(
    "GET",
    `/benchmark-setups/methodType`,
    {} // or props
  );

  // zustand set State here
  return [response, resAbort];
};

export const getBenchmarkInputNames = async (
  query: TGetBenchmarkInputNamesQueryRequest
): Promise<
  [Promise<AxiosResponse<BenchmarkInput[]>["data"]>, AbortFunction]
> => {
  const [response, resAbort] = await request<BenchmarkInput[]>(
    "GET",
    `/benchmark-setups/benchmarkInputs${queryRequest(query)}`,
    {} // or props
  );

  // zustand set State here
  return [response, resAbort];
};

export const getBenchmarkMethodNames = async (
  query: TGetBenchmarkMethodNamesQueryRequest
): Promise<
  [Promise<AxiosResponse<BenchmarkMethod[]>["data"]>, AbortFunction]
> => {
  const [response, resAbort] = await request<BenchmarkMethod[]>(
    "GET",
    `/benchmark-setups/benchmarkMethods${queryRequest(query)}`,
    {} // or props
  );

  // zustand set State here
  return [response, resAbort];
};

export const getBenchmarkInputSetups = async (
  params: string
): Promise<
  [Promise<AxiosResponse<BenchmarkInputSetupWithUnit[]>["data"]>, AbortFunction]
> => {
  const [response, resAbort] = await request<BenchmarkInputSetupWithUnit[]>(
    "GET",
    `/benchmark-setups/benchmarkInputSetup/${params}`,
    {} // or props
  );

  // zustand set State here
  return [response, resAbort];
};

export const postCreateBenchmarkInputBenchmarkInputSetup = async (
  params: string
): Promise<
  [
    Promise<
      AxiosResponse<BenchmarkInputSetup>["data"]
    >,
    AbortFunction
  ]
> => {
  const [response, resAbort] =
    await request<BenchmarkInputSetup>(
      "POST",
      `/benchmark-setups/benchmarkInput/benchmarkInputSetup/${params}`,
      {} // or props
    );

  // zustand set State here
  return [response, resAbort];
};

export const deleteBenchmarkInputBenchmarkInputSetup = async (
  params: string
): Promise<
  [
    Promise<
      AxiosResponse<BenchmarkInputSetup>["data"]
    >,
    AbortFunction
  ]
> => {
  const [response, resAbort] =
    await request<BenchmarkInputSetup>(
      "DELETE",
      `/benchmark-setups/benchmarkInput/benchmarkInputSetup/${params}`,
      {} // or props
    );

  // zustand set State here
  return [response, resAbort];
};

export const upsertBenchmarkInputBenchmarkInputSetup = async (
  body: TUpsertBenchmarkInputSetupBodyRequest
): Promise<
  [
    Promise<AxiosResponse<BenchmarkInputSetup>["data"]>,
    AbortFunction
  ]
> => {
  const [response, resAbort] =
    await request<BenchmarkInputSetup>(
      "PUT",
      `/benchmark-setups/benchmarkInput/benchmarkInputSetup`,
      {}, // or props
      body
    );

  // zustand set State here
  return [response, resAbort];
};


export const upsertCancelBenchmarkInputBenchmarkInputSetup = async (
  body: TUpsertCancelBenchmarkInputSetupBodyRequest
): Promise<
  [
    Promise<AxiosResponse<BenchmarkInputSetup[]>["data"]>,
    AbortFunction
  ]
> => {
  const [response, resAbort] =
    await request<BenchmarkInputSetup[]>(
      "POST",
      `/benchmark-setups/benchmarkInput/benchmarkInputSetup`,
      {}, // or props
      body
    );

  // zustand set State here
  return [response, resAbort];
};
