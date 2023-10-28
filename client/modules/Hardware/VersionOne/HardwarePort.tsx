"use client";

import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { SerialPort } from "serialport";
const { ReadlineParser } = require("@serialport/parser-readline");

interface HardwarePortProps {
  comPort: string;
  handleChangePort: (event: SelectChangeEvent) => void;
}

const HardwarePort = ({ comPort, handleChangePort }: HardwarePortProps) => {
  // const { data: comPortAvailable, isLoading: isLoadingComPort } = useQuery({
  //   queryKey: ["COMPORT"],
  //   queryFn: async () => {
  //     const response = await axios.get("/api/v1/serialPort/comPort");
  //     return response.data;
  //   },
  // });

  // console.log(comPortAvailable);

  const port = new SerialPort({
    path: "COM3",
    baudRate: 9600,
  });

  const parser = port.pipe(new ReadlineParser({ delimiter: "\r\n" }));

  parser.on("data", onData);

  function onData(data: any) {
    console.log("on Data at COM3 : " + data);
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="comPort selection">Age</InputLabel>
      <Select
        variant="outlined"
        labelId="comPort selection"
        id="comPort"
        value={comPort}
        label="Age"
        onChange={handleChangePort}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
      <FormHelperText>Select COM port</FormHelperText>
    </FormControl>
  );
};

export default HardwarePort;
