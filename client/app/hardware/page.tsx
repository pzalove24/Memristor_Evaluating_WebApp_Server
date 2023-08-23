import React from "react";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Header } from "@/components";

const hardware = () => {
  return (
    <Stack direction={"row"}>
      <Header
        title="Hardware"
        subtitle="PCB design and Platform for memristor"
      />
    </Stack>
  );
};

export default hardware;
