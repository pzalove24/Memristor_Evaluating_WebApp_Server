"use client";

import { Header } from "@/components";
import BenchmarkSetupMenu from "@/modules/BenchmarkSetup/BenchmarkSetupMenu";
import { Box, Paper, Stack } from "@mui/material";
import React from "react";

// graph
// calculation

//input
//result => use the same input

const BenchmarkSetup = () => {
  return (
    <Stack direction={"column"}>
      <Header
        title="Benchmark Setup"
        subtitle="Setup Input and Result for benchmark"
      />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            mt: 2,
            width: "100%",
            height: "auto",
          },
        }}
      >
        <Paper elevation={4}>
          <BenchmarkSetupMenu />
        </Paper>
      </Box>
    </Stack>
  );
};

export default BenchmarkSetup;
