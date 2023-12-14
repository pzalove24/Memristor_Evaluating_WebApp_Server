import { initialManualWriteValuesProps } from "@/components/Hardware/VersionOne/VersionOne";
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
import { FormikProps } from "formik";
import React from "react";

type ManualWriteProps = {
  formikProps: FormikProps<initialManualWriteValuesProps>;
  comPortReady: boolean;
};

const ManualWrite = ({ formikProps, comPortReady }: ManualWriteProps) => {
  const {
    values,
    setFieldValue,
    handleChange,
    handleBlur,
    touched,
    errors,
    isSubmitting,
    isValid,
  } = formikProps;

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
              name="positiveVoltage"
              label="Amplitude"
              fullWidth
              value={values.positiveVoltage}
              variant="outlined"
              type="number"
              InputProps={{
                endAdornment: <InputAdornment position="end">V</InputAdornment>,
              }}
              inputProps={{ step: "0.1" }}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.positiveVoltage && Boolean(errors.positiveVoltage)}
              helperText={touched.positiveVoltage && errors.positiveVoltage}
            />
            <TextField
              required
              id="widthPostiveVoltage"
              name="widthPostiveVoltage"
              label="Width"
              fullWidth
              value={values.widthPostiveVoltage}
              variant="outlined"
              type="number"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">uS</InputAdornment>
                ),
              }}
              inputProps={{ step: "0.1" }}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                touched.widthPostiveVoltage &&
                Boolean(errors.widthPostiveVoltage)
              }
              helperText={
                touched.widthPostiveVoltage && errors.widthPostiveVoltage
              }
            />
            <Button
              disabled={!isValid || isSubmitting || !comPortReady}
              variant="contained"
              fullWidth
              type="submit"
              onClick={() => setFieldValue("polaritySent", "positive", true)}
            >
              POSITIVE PULSE
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack spacing={2}>
            <TextField
              required
              id="negativeVoltage"
              name="negativeVoltage"
              label="Amplitude"
              fullWidth
              value={values.negativeVoltage}
              variant="outlined"
              type="number"
              InputProps={{
                endAdornment: <InputAdornment position="end">V</InputAdornment>,
              }}
              inputProps={{ step: "0.1" }}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.negativeVoltage && Boolean(errors.negativeVoltage)}
              helperText={touched.negativeVoltage && errors.negativeVoltage}
            />
            <TextField
              required
              id="widthNegativeVoltage"
              name="widthNegativeVoltage"
              label="Width"
              fullWidth
              value={values.widthNegativeVoltage}
              variant="outlined"
              type="number"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">uS</InputAdornment>
                ),
              }}
              inputProps={{ step: "0.1" }}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                touched.widthNegativeVoltage &&
                Boolean(errors.widthNegativeVoltage)
              }
              helperText={
                touched.widthNegativeVoltage && errors.widthNegativeVoltage
              }
            />
            <Button
              disabled={!isValid || isSubmitting || !comPortReady}
              variant="contained"
              fullWidth
              type="submit"
              onClick={() => setFieldValue("polaritySent", "negative", true)}
            >
              NEGATIVE PULSE
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ManualWrite;
