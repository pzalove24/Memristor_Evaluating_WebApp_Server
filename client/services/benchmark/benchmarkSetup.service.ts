import { AxiosResponse } from "axios";
import { AbortFunction, request } from "../request.service";

export type TListBenchmarkSetupsRequest = {
  type: string;
  setup: string;
  voltage: string;
  method: string;
  page: number;
  limit: number;
}

export type TListBenchmarkSetupsResponse = {
  data: any[];
  total: number;
  page: number;
  limit: number;
}

export const listBenchmarkSetups = async (
  props: TListBenchmarkSetupsRequest
): Promise<[Promise<AxiosResponse<TListBenchmarkSetupsResponse>["data"]>, AbortFunction]> => {
  const [response, resAbort] = await request<TListBenchmarkSetupsResponse>(
    "GET",
    "/benchmark-setups",
    {} // or props
  );

  // zustand set State here
  return [response, resAbort];
};
