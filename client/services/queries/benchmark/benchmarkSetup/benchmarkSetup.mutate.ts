import {
  TUpsertBenchmarkInputSetupBodyRequest,
  upsertBenchmarkInputSetup,
} from "@/services/apis/benchmark/benchmarkSetup.api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpsertBenchmarkInputSetups = () => {
  const queryClient = useQueryClient();
  return useMutation({
    // mutationKey: ["listBenchmarkInputSetup"],
    mutationFn: async (bodyData: TUpsertBenchmarkInputSetupBodyRequest) => {
      const [response, _] = await upsertBenchmarkInputSetup(bodyData);
      const res = await response;
      return res;
    },
    onError: () => {
      console.log("error");
    },
    onMutate: () => {
      console.log("start mutate");
    },
    onSuccess: () => {
      console.log("success");
    },
    onSettled: async (_, error, variables) => {
      console.log("settle");
      if (error) {
        console.log(error);
      } else {
        // after update data, invalidate catch and refetch
        await queryClient.invalidateQueries({
          queryKey: [
            "listBenchmarkInputSetup",
            { id: variables.benchmarkInputSetupList[0].benchmarkInputId },
          ],
        });
        // await queryClient.invalidateQueries({
        //   queryKey: ["listBenchmarkInputSetup", { id: variables.id }],
        // });
      }
    },
  });
};
