import React from "react";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Header } from "@/components";

const Hardware = () => {
  return (
    <Stack direction={"row"}>
      <Header
        title="Hardware"
        subtitle="PCB design and Platform for memristor"
      />
    </Stack>
  );
};

export default Hardware;
