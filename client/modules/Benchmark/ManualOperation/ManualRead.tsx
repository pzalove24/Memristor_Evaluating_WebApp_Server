import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const ManualRead = () => {
  return (
    <Box padding={3}>
      <Typography variant="h6" gutterBottom>
        Manual Read
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <TextField
            required
            id="readVoltage"
            placeholder="specify read voltage"
            fullWidth
            value={"0.5"}
            variant="standard"
            InputProps={{
              endAdornment: <InputAdornment position="end">V</InputAdornment>,
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Button variant="contained" fullWidth>
            UPDATE READ
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button variant="contained" fullWidth>
            READ
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ManualRead;
