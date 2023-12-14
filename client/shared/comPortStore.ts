import { create } from "zustand";
import React from "react";

export type comPortStatus = "DISCONNECTED" | "READY" | "IN_PROGRESS";

export type comPortState = {
  comPortStatus: comPortStatus;
  comPortDisconnected: boolean;
  comPortReady: boolean;
  comPortInProgress: boolean;
};

export type comPortAction = {
  updateStatus: (status: comPortStatus) => void;
};

const useComPortStore = create<comPortState & comPortAction>((set) => ({
  comPortStatus: "DISCONNECTED",
  comPortDisconnected: true,
  comPortReady: false,
  comPortInProgress: false,
  updateStatus: (status: comPortStatus) =>
    set(() =>
      status === "READY"
        ? {
            comPortStatus: status,
            comPortDisconnected: false,
            comPortReady: true,
            comPortInProgress: false,
          }
        : status === "IN_PROGRESS"
        ? {
            comPortStatus: status,
            comPortDisconnected: false,
            comPortReady: false,
            comPortInProgress: true,
          }
        : { // Status is DISCONNECTED
            comPortStatus: status,
            comPortDisconnected: true,
            comPortReady: false,
            comPortInProgress: false,
          }
    ),
}));

export default useComPortStore;
