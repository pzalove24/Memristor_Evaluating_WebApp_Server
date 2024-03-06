import {
  TUpsertBenchmarkInputSetupBodyRequest,
  TUpsertCancelBenchmarkInputSetupBodyRequest,
  deleteBenchmarkInputBenchmarkInputSetup,
  postCreateBenchmarkInputBenchmarkInputSetup,
  upsertBenchmarkInputBenchmarkInputSetup,
  upsertCancelBenchmarkInputBenchmarkInputSetup,
} from "@/services/apis/benchmark/benchmarkSetup.api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpsertBenchmarkBenchmarkInputInputSetups = () => {
  const queryClient = useQueryClient();
  return useMutation({
    // mutationKey: ["listBenchmarkInputSetup"],
    mutationFn: async (bodyData: TUpsertBenchmarkInputSetupBodyRequest) => {
      const [response, _] = await upsertBenchmarkInputBenchmarkInputSetup(
        bodyData
      );
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

export const usePostCreateBenchmarkInputBenchmarkInputSetup = () => {
  const queryClient = useQueryClient();
  return useMutation({
    // mutationKey: ["postCreateBenchmarkInputBenchmarkInputSetup", { id }],
    mutationFn: async (id: string) => {
      const [response, _] = await postCreateBenchmarkInputBenchmarkInputSetup(
        id
      );
      const res = await response;
      return res;
    },
    onSettled: async (_, error, variables) => {
      console.log();
      if (error) {
        console.log(error);
      } else {
        // after update data, invalidate catch and refetch for new inputsetup list in dialog
        await queryClient.invalidateQueries({
          queryKey: ["listBenchmarkInputSetup", { id: variables }],
        });
        // refetch Input Table to acquire new count on inputsetup on badge
        await queryClient.invalidateQueries({
          queryKey: ["listBenchmarkSetups", "Input"],
        });
      }
    },
  });
};

export const useDeleteBenchmarkInputBenchmarkInputSetup = () => {
  const queryClient = useQueryClient();
  return useMutation({
    // mutationKey: ["postCreateBenchmarkInputBenchmarkInputSetup", { id }],
    mutationFn: async (id: string) => {
      const [response, _] = await deleteBenchmarkInputBenchmarkInputSetup(id);
      const res = await response;
      return res;
    },
    onSettled: async (_, error, variables) => {
      console.log();
      if (error) {
        console.log(error);
      } else {
        // after update data, invalidate catch and refetch for new inputsetup list in dialog
        await queryClient.invalidateQueries({
          queryKey: ["listBenchmarkInputSetup", { id: variables }],
        });
        // refetch Input Table to acquire new count on inputsetup on badge
        await queryClient.invalidateQueries({
          queryKey: ["listBenchmarkSetups", "Input"],
        });
      }
    },
  });
};

export const useUpsertCancelBenchmarkInputBenchmarkInputSetup = () => {
  const queryClient = useQueryClient();
  return useMutation({
    // mutationKey: ["postCreateBenchmarkInputBenchmarkInputSetup", { id }],
    mutationFn: async (
      bodyData: TUpsertCancelBenchmarkInputSetupBodyRequest
    ) => {
      const [response, _] = await upsertCancelBenchmarkInputBenchmarkInputSetup(
        bodyData
      );
      const res = await response;
      return res;
    },
    onSettled: async (_, error, variables) => {
      console.log();
      if (error) {
        console.log(error);
      } else {
        // after update data, invalidate catch and refetch for new inputsetup list in dialog
        console.log("variable", variables);
        if (variables) {
          await queryClient.invalidateQueries({
            queryKey: [
              "listBenchmarkInputSetup",
              { id: variables?.benchmarkInputSetupList[0]?.benchmarkInputId },
            ],
          });
          // refetch Input Table to acquire new count on inputsetup on badge
          await queryClient.invalidateQueries({
            queryKey: ["listBenchmarkSetups", "Input"],
          });
        }
      }
    },
  });
};
