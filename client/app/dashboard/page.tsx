import React from "react";
import { Stack } from "@mui/material"
import { Header } from "@/components";

const Dashboard = () => {
  return (
      <Stack direction={"row"}>
        <Header title="Dashboard" subtitle="Overall Memristor Performance" />
      </Stack>
  );
};

export default Dashboard;
