import { AxiosResponse } from "axios";
import { AbortFunction, request } from "../request.service";
import { queryRequest } from "../query.service";
import {
  BenchmarkMethod,
  BenchmarkInput,
  Prisma,
  BenchmarkInputSetup,
} from "@/../server/shared/prismaTypes";

import { TPaginationResponse } from "@/../server/shared/pagniation";

export type TListBenchmarkSetupsRequest = {
  type: string;
  setup: string;
  voltage?: string;
  method?: string;
  page: number;
  limit: number;
};

export type BenchmarkMethodWithInput = Prisma.BenchmarkMethodGetPayload<{
  include: {
    BenchmarkInput: true;
  };
}>;

export type BenchmarkInputWithInputSetup = Prisma.BenchmarkInputGetPayload<{
  include: {
    benchmarkInputSetups: true;
  };
}>;

export type BenchmarkInputSetupWithUnit = Prisma.BenchmarkInputSetupGetPayload<{
  include: {
    BenchmarkUnit: true;
  };
}>;

export type TListBenchmarkSetupsResponse = TPaginationResponse<
  BenchmarkMethodWithInput | BenchmarkInputWithInputSetup
>;

export type TUpsertBenchmarkInputSetupRequest = {
  benchmarkInputSetupList: BenchmarkInputSetup[];
};

export type TUpsertBenchmarkInputSetupResponse = BenchmarkInputSetup;

export const listBenchmarkSetups = async (
  query: TListBenchmarkSetupsRequest
): Promise<
  [Promise<AxiosResponse<TListBenchmarkSetupsResponse>["data"]>, AbortFunction]
> => {
  const [response, resAbort] = await request<TListBenchmarkSetupsResponse>(
    "GET",
    `/benchmark-setups${queryRequest(query)}`,
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
