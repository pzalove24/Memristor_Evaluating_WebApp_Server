import { AxiosResponse } from "axios";
import { AbortFunction, request } from "../request.service";
import { queryRequest } from "../query.service";
import {
  BenchmarkMethod,
  BenchmarkInput,
  Prisma,
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

export type TListBenchmarkSetupsResponse = TPaginationResponse<
  BenchmarkMethodWithInput | BenchmarkInputWithInputSetup
>;

export const listBenchmarkSetups = async (
  query: TListBenchmarkSetupsRequest
): Promise<
  [Promise<AxiosResponse<TListBenchmarkSetupsResponse>["data"]>, AbortFunction]
> => {
  console.log("query", queryRequest(query));
  const [response, resAbort] = await request<TListBenchmarkSetupsResponse>(
    "GET",
    `/benchmark-setups${queryRequest(query)}`,
    {} // or props
  );

  // zustand set State here
  return [response, resAbort];
};
