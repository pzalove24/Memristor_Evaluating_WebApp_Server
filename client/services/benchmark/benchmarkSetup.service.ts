import { AxiosResponse } from "axios";
import { AbortFunction, request } from "../request.service";

export const listBenchmarkSetups = async (
  props: any
): Promise<[Promise<AxiosResponse<any>["data"]>, AbortFunction]> => {
  const [response, resAbort] = await request<any>(
    "GET",
    "/financial/products",
    {} // or props
  );

  // zustand set State here
  return [response, resAbort];
};
