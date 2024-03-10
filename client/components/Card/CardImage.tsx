import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TCardImage } from "@/types/Card/CardType";

// Mocked image metadata
const images = [
  { title: "Image 1", path: "/AMPlogo.png" },
  // Add more image metadata as needed
];

interface ImageMetadata {
  title: string;
  path: string;
}

const CardImage = ({ imagePath, imageTitle }: TCardImage) => {
  const [selectedImage, setSelectedImage] = useState<ImageMetadata>(images[0]);

  const handleImageChange = (event: any) => {
    const selectedIndex = event.target.value as number;
    setSelectedImage(images[selectedIndex]);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={imagePath} title={imageTitle} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small">
          Change Image
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardImage;
