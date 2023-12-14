import { create } from "zustand";
import React from "react";

export type benchmarkStatus = "DISCONNECTED" | "READY" | "IN_PROGRESS";

export type comPortState = {
  benchmarkStatus: benchmarkStatus;
};

export type comPortAction = {
  updateStatus: (status: benchmarkStatus) => void;
};

const useBenchmarkStore = create<comPortState & comPortAction>((set) => ({
    
}));

export default useBenchmarkStore;