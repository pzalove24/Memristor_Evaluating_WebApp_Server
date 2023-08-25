"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import { Grid, TextField, Typography } from "@mui/material";

export default function ParameterInput() {
  const [voltageMin, setVoltageMin] = React.useState<number>(0);
  const [voltageMax, setVoltageMax] = React.useState<number>(0);
  const [voltageWidth, setVoltageWidth] = React.useState<number>(0);
  const [interpulseTime, setInterpulseTime] = React.useState<number>(0);
  const [programmingPulse, setProgrammingPulse] = React.useState<number>(0);
  const [deviceChannel, setDeviceChannel] = React.useState<number>(1);

  console.log(voltageMin);
  console.log(voltageMax);
  console.log(voltageWidth);
  console.log(interpulseTime);
  console.log(programmingPulse);
  console.log(deviceChannel);

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
        height: 352,
      }}
      noValidate
      autoComplete="off"
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        rowSpacing={0.5}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={12}>
          <Typography variant="h4" fontWeight="bold">
            Parameter Input
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>Voltage Min (V)</Typography>
        </Grid>
        <Grid item xs={1}>
          <></>
        </Grid>
        <Grid item xs={7}>
          <TextField
            id="standard-number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            helperText="negative voltage (-3.00 - 0.00)"
            placeholder="provide number"
            value={voltageMin}
            onChange={(e) => {
              var value = parseFloat(e.target.value);

              if (value > 0) value = 0; //max
              if (value < -3) value = -3; //min

              setVoltageMin(value);
            }}
            inputProps={{ min: -3, max: 0 }}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography>Voltage Max (V)</Typography>
        </Grid>
        <Grid item xs={1}>
          <></>
        </Grid>
        <Grid item xs={7}>
          <TextField
            id="standard-number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            helperText="positive voltage (0.00 - 3.00)"
            placeholder="provide number"
            value={voltageMax}
            onChange={(e) => {
              var value = parseFloat(e.target.value);

              if (value > 3) value = 3; //max
              if (value < 0) value = 0; //min

              setVoltageMax(value);
            }}
            inputProps={{ min: 0, max: 3 }}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography>Voltage Width/Duration (us)</Typography>
        </Grid>
        <Grid item xs={1}>
          <></>
        </Grid>
        <Grid item xs={7}>
          <TextField
            id="standard-number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            helperText="the width of voltage pulse"
            placeholder="provide number"
            value={voltageWidth}
            onChange={(e) => {
              var value = parseInt(e.target.value);

              if (value > 1000) value = 1000; //max
              if (value < 0) value = 0; //min

              setVoltageWidth(value);
            }}
            inputProps={{ min: 0, max: 1000 }}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography>Interpulse Time (us)</Typography>
        </Grid>
        <Grid item xs={1}>
          <></>
        </Grid>
        <Grid item xs={7}>
          <TextField
            id="standard-number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            helperText="the distance between each pulse"
            placeholder="provide number"
            value={interpulseTime}
            onChange={(e) => {
              var value = parseInt(e.target.value);

              if (value > 100000) value = 100000; //max
              if (value < 0) value = 0; //min

              setInterpulseTime(value);
            }}
            inputProps={{ min: 0, max: 100000 }}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography>Programming Pulse (pulse number)</Typography>
        </Grid>
        <Grid item xs={1}>
          <></>
        </Grid>
        <Grid item xs={7}>
          <TextField
            id="standard-number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            helperText="the number of applied voltage pulse"
            placeholder="provide number"
            value={programmingPulse}
            onChange={(e) => {
              var value = parseFloat(e.target.value);

              if (value > 100000) value = 100000; //max
              if (value < 0) value = 0; //min

              setProgrammingPulse(value);
            }}
            inputProps={{ min: 0, max: 100000 }}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography>Device Channel</Typography>
        </Grid>
        <Grid item xs={1}>
          <></>
        </Grid>
        <Grid item xs={7}>
          <TextField
            disabled
            id="standard-number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            helperText="Device Channel"
            placeholder="provide number"
            value={deviceChannel}
            onChange={(event) => setDeviceChannel(parseInt(event.target.value))}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
