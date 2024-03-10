import React, { useState } from "react";
import { Select, MenuItem, Typography } from "@mui/material";
import Image from "next/image";
import CardImage from "../Card/CardImage";

// Mocked image metadata
const images = [
  { title: "Image 1", path: "/AMPlogo.png" },
  // Add more image metadata as needed
];

interface ImageMetadata {
  title: string;
  path: string;
}

export default function SelectImage() {
  const [selectedImage, setSelectedImage] = useState<ImageMetadata>(images[0]);

  const handleImageChange = (event: any) => {
    const selectedIndex = event.target.value as number;
    setSelectedImage(images[selectedIndex]);
  };

  return (
    <div>
      <Select
        value={images.indexOf(selectedImage)}
        onChange={handleImageChange}
      >
        {images.map((image, index) => (
          <MenuItem key={index} value={index}>
            {image.title}
          </MenuItem>
        ))}
      </Select>
      <CardImage
        imagePath={selectedImage.path}
        imageTitle={selectedImage.title}
      />
    </div>
  );
}
