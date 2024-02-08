import axios, { AxiosError, AxiosResponse, Method } from "axios";

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_API,
  timeout: 60000, //The request will wait 1 minute before timing out, we will make it as configuration in env/file
  headers: {
    accept: "application/json",
  },
});

// export const getToken = async (): Promise<string | undefined> => {
//   const session = await getSession();

//   if (session?.isExpired) {
//     return signOut();
//   }

//   return session?.token;
// };

// const onDebounceSignOut = debounce(() => {
//   signOut();
// }, 500);

export type AbortFunction = () => void;

export async function request<T>(
  method: Method,
  route: string,
  params: any,
  body?: any,
  isBlobType?: boolean,
  customHeaders?: any
): Promise<[Promise<AxiosResponse<T>["data"]>, AbortFunction]> {
  const onSuccess = function (response: AxiosResponse) {
    return response.data;
  };

  const onError = function (error: AxiosError) {
    console.error("Request Failed:", error.config);

    if (error.response) {
      //   if (
      //     error.response.status === 401 ||
      //     error.response.data?.name === "TokenExpiredError"
      //   ) {
      //     onDebounceSignOut();
      //     return Promise.reject(error.response || error.message);
      //   }

      console.error("Status:", error.response.status);
      console.error("Data:", error.response.data);
      console.error("Headers:", error.response.headers);
    } else {
      // some error while setting up the request
      console.error("Error Message:", error.message);
    }

    throw error.response;
  };

  const controller = new AbortController();

  const response = client({
    method,
    // headers: customHeaders || {
    //   Authorization: `Bearer ${await getToken()}`,
    // },
    url: `${process.env.NEXT_PUBLIC_APP_API}${route}`,
    // params: { ...params, _tid: uuidv4() },
    params: { ...params },
    data: body,
    signal: controller.signal,
    responseType: isBlobType ? "blob" : "json",
  })
    .then(onSuccess)
    .catch(onError);

  return [
    response,
    () => {
      controller.abort();
    },
  ];
}
