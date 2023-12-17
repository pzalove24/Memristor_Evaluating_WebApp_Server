"use client";

import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { ComPortProps } from "@/types/commandType";

interface HardwarePortProps {
  comPort: ComPortProps[];
  inputComPort: string | null;
  comPortReady: boolean;
  handleChangePort: (event: SelectChangeEvent) => void;
  requestPortLists: () => void;
}

const HardwarePort = ({
  comPort,
  inputComPort,
  comPortReady,
  handleChangePort,
  requestPortLists,
}: HardwarePortProps) => {
  // const { data: comPortAvailable, isLoading: isLoadingComPort } = useQuery({
  //   queryKey: ["COMPORT"],
  //   queryFn: async () => {
  //     const response = await axios.get("/api/v1/serialPort/comPort");
  //     return response.data;
  //   },
  // });

  return (
    <Stack direction={"column"}>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="comPort selection">COM</InputLabel>
        <Select
          disabled={comPortReady}
          variant="outlined"
          labelId="comPort selection"
          id="comPort"
          value={inputComPort as string}
          label="COM"
          onChange={handleChangePort}
        >
          {comPort ? (
            comPort.map((port: ComPortProps, index: number) => (
              <MenuItem key={index} value={port.path}>
                {port.path}
              </MenuItem>
            ))
          ) : (
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
          )}
        </Select>
        <FormHelperText>Select COM port</FormHelperText>
      </FormControl>
      <Button
        disabled={comPortReady}
        variant="contained"
        onClick={requestPortLists}
      >
        Refresh COMPORT
      </Button>
    </Stack>
  );
};

export default HardwarePort;
