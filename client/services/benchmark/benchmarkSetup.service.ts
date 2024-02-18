import { AxiosResponse } from "axios";
import { AbortFunction, request } from "../request.service";
import { queryRequest } from "../query.service";
import {
  BenchmarkMethod,
  BenchmarkInput,
  Prisma,
  BenchmarkInputSetup,
  VoltageType,
  MethodType,
} from "@/../server/shared/prismaTypes";

import { TPaginationResponse } from "@/../server/shared/pagniation";

export type TListBenchmarkSetupsQueryRequest = {
  type: string;
  setup: string;
  voltageType?: string;
  methodType?: string;
  page: number;
  limit: number;
};

export type TListBenchmarkSetupsBodyRequest = {
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
    BenchmarkUnit: true;
    voltageType: true;
    dataType: true;
  };
}>;

export type TListBenchmarkSetupsResponse = TPaginationResponse<
  BenchmarkMethodWithInput | BenchmarkInputWithInputSetup
>;

export type TUpsertBenchmarkInputSetupRequest = {
  benchmarkInputSetupList: BenchmarkInputSetup[];
};

export type TlistAllBenchmarkInputNameRequest = {
  type: string;
  searchInputName?: string;
  voltageType?: string;
};

export type TlistAllBenchmarkMethodNameRequest = {
  type: string;
  searchMethodName: string;
  voltageType?: string;
  methodType?: string;
};

export type TUpsertBenchmarkInputSetupResponse = BenchmarkInputSetup;

export const listBenchmarkSetups = async (
  query: TListBenchmarkSetupsQueryRequest,
  body: TListBenchmarkSetupsBodyRequest
): Promise<
  [Promise<AxiosResponse<TListBenchmarkSetupsResponse>["data"]>, AbortFunction]
> => {

  const [response, resAbort] = await request<TListBenchmarkSetupsResponse>(
    "POST",
    `/benchmark-setups${queryRequest(query)}`,
    {}, // or props
    body,
  );

  // zustand set State here
  return [response, resAbort];
};

export const listAllVoltageType = async (): Promise<
  [Promise<AxiosResponse<VoltageType[]>["data"]>, AbortFunction]
> => {
  const [response, resAbort] = await request<VoltageType[]>(
    "GET",
    `/benchmark-setups/voltageType`,
    {} // or props
  );

  return [response, resAbort];
};

export const listAllMethodType = async (): Promise<
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

export const listAllBenchmarkInputName = async (
  query: TlistAllBenchmarkInputNameRequest
): Promise<
  [Promise<AxiosResponse<BenchmarkInput[]>["data"]>, AbortFunction]
> => {
  console.log(
    "api",
    `/benchmark-setups/benchmarkInputs?searchName=${query.searchInputName}&type=${query.type}&voltageType=${query.voltageType}`
  );
  const [response, resAbort] = await request<BenchmarkInput[]>(
    "GET",
    `/benchmark-setups/benchmarkInputs?searchName=${query.searchInputName}&type=${query.type}&voltageType=${query.voltageType}`,
    {} // or props
  );

  // zustand set State here
  return [response, resAbort];
};

export const listAllBenchmarkMethodName = async (
  query: TlistAllBenchmarkMethodNameRequest
): Promise<
  [Promise<AxiosResponse<BenchmarkMethod[]>["data"]>, AbortFunction]
> => {
  const [response, resAbort] = await request<BenchmarkMethod[]>(
    "GET",
    `/benchmark-setups/benchmarkMethods?searchName=${query.searchMethodName}&type=${query.type}&voltageType=${query.voltageType}&methodType=${query.methodType}`,
    {} // or props
  );

  // zustand set State here
  return [response, resAbort];
};

export const listBenchmarkInputSetups = async (
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

export const upsertBenchmarkInputSetup = async (
  body: TUpsertBenchmarkInputSetupRequest
): Promise<
  [
    Promise<AxiosResponse<TUpsertBenchmarkInputSetupResponse>["data"]>,
    AbortFunction
  ]
> => {
  const [response, resAbort] =
    await request<TUpsertBenchmarkInputSetupResponse>(
      "PUT",
      `/benchmark-setups/benchmarkInputSetup`,
      {}, // or props
      body
    );

  // zustand set State here
  return [response, resAbort];
};
