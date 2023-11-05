"use client";

import React, { useEffect, useState } from "react";
import { Stack, Typography } from "@mui/material";
import { Header } from "@/components";

const Hardware = () => {
  const [message, setMessage] = useState("Loading");

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/serialPort/connection`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setMessage(response.data);
      });
  }, []);

  return (
    <Stack direction={"row"}>
      <Header
        title="Hardware"
        subtitle="PCB design and Platform for memristor"
      />
      <Typography>{message}</Typography>
    </Stack>
  );
};

export default Hardware;
