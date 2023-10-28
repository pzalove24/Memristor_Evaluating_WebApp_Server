import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const ManualWrite = () => {
  return (
    <Box padding={3}>
      <Typography variant="h6" gutterBottom>
        Manual Write
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Stack spacing={2}>
            <TextField
              required
              id="positiveVoltage"
              label="Amplitude"
              fullWidth
              variant="standard"
              InputProps={{
                endAdornment: <InputAdornment position="end">V</InputAdornment>,
              }}
            />
            <TextField
              required
              id="widthPostiveVoltage"
              label="Width"
              fullWidth
              variant="standard"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">uS</InputAdornment>
                ),
              }}
            />
            <Button variant="contained" fullWidth>
              POSITIVE PULSE
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack spacing={2}>
            <TextField
              required
              id="negativeVoltage"
              label="Amplitude"
              fullWidth
              variant="standard"
              InputProps={{
                endAdornment: <InputAdornment position="end">V</InputAdornment>,
              }}
            />
            <TextField
              required
              id="widthNegativeVoltage"
              label="Width"
              fullWidth
              variant="standard"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">uS</InputAdornment>
                ),
              }}
            />
            <Button variant="contained" fullWidth>
              NEGATIVE PULSE
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ManualWrite;
