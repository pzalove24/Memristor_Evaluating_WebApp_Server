"use client";

import React, { ReactNode } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

interface ProvidersProps {
  children: ReactNode;
}

const queryClient = new QueryClient();

const QueryProviders = ({ children }: ProvidersProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryProviders;
