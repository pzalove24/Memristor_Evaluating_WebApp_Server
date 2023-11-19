"use client";

import { useSocket } from "@/components/providers/socket-provider";
import { Chip } from "@mui/material";

export const SocketIndicator = () => {
  const { isConnected } = useSocket();

  if (!isConnected) {
    return (
      <Chip
        color="error"
        variant="outlined"
        label="Fallback: Polling every 1s"
      />
    );
  }

  return (
    <Chip color="success" variant="outlined" label="Live: Real-time updates" />
  );
};
