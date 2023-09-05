import { Header } from "@/components";
import { Box, Paper, Stack, Typography } from "@mui/material";
import React from "react";

const benchmarkReview = () => {
  return (
    <Stack direction={"column"}>
      <Header title="benchmark review" subtitle="Review the benchmark result" />
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
          <Typography>SA</Typography>
        </Paper>
      </Box>
    </Stack>
  );
};

export default benchmarkReview;