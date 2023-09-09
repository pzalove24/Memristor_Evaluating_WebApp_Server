import React from "react";
import Image from "next/image";
import { Box, Card } from "@mui/material";
import HardwareVersionOneImage from "../../../assets/Hardware/VersionOne/HardwareVersionOne.webp";

const HardwareImage = () => {
  return (
    <>
      <Image
        src={HardwareVersionOneImage}
        priority
        alt="Hardware"
        width="172"
        height="100"
        sizes="20vw"
        style={{
          width: "100%",
          height: "auto",
          objectFit: "contain",
        }}
      />
    </>
  );
};

export default HardwareImage;
