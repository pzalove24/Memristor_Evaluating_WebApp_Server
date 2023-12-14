import { initialManualReadValuesProps } from "@/modules/Hardware/VersionOne/VersionOne";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import { FormikProps } from "formik";
import React from "react";

type ManualReadProps = {
  formikProps: FormikProps<initialManualReadValuesProps>;
  comPortReady: boolean;
};

const ManualRead = ({ formikProps, comPortReady }: ManualReadProps) => {
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
        Manual Read
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <TextField
            required
            id="displayVoltage"
            name="displayVoltage"
            placeholder="specify read voltage"
            fullWidth
            value={values.displayVoltage}
            variant="outlined"
            type="number"
            InputProps={{
              endAdornment: <InputAdornment position="end">V</InputAdornment>,
            }}
            inputProps={{ step: "0.1" }}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.displayVoltage && Boolean(errors.displayVoltage)}
            helperText={touched.displayVoltage && errors.displayVoltage}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography textAlign={"center"}>
            Current Set Voltage = {values.currentVoltage}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button
            disabled={Boolean(errors.displayVoltage) || !comPortReady}
            variant="contained"
            fullWidth
            onClick={() =>
              setFieldValue("currentVoltage", values.displayVoltage, true)
            }
          >
            UPDATE READ
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button
            disabled={!isValid || isSubmitting || !comPortReady}
            variant="contained"
            fullWidth
            type="submit"
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ManualRead;
