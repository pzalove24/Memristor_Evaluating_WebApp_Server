import React from "react";
import { Stack } from "@mui/material"
import Typography from "@mui/material/Typography";
import { Header } from "@/components";

const dashboard = () => {
  return (
      <Stack direction={"row"}>
        <Header title="Dashboard" subtitle="Overall Memristor Performance" />
      </Stack>
  );
};

export default dashboard;
