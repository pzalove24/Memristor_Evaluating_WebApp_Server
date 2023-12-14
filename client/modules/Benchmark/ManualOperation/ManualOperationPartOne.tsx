import { VersionOne } from "@/components/Hardware/VersionOne";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const ManualOperationPartOne = () => {
  return (
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
      <Grid container>
        <Grid item xs={12}>
          <VersionOne />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ManualOperationPartOne;
