import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TCardImage } from "@/types/Card/CardType";
import GroupAutocomplete from "../Autocomplete/GroupAutocomplete";

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
  const [image, setImage] = useState<boolean>(true);

  // const handleImageChange = (event: any) => {
  //   const selectedIndex = event.target.value as number;
  //   setSelectedImage(images[selectedIndex]);
  // };

  const handleSetImage = () => {
    setImage(!image);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={imagePath} title={imageTitle} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <GroupAutocomplete readonly={image} />
      </CardContent>
      <CardActions>
        <Button
          onClick={handleSetImage}
          variant="contained"
          size="small"
          color={image ? "success" : "warning"}
        >
          {image ? "Change Image" : "Set Image"}
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardImage;
