import React from "react";
import { Card, CardMedia } from "@mui/material";

const ImageComponent = () => {
  const imageUrl = "/vinylRecord.jpg";
  // imageUrl og description props kan endres av kursdeltakerne
  return (
    <Card sx={{ my: 4 }}>
      <img src={imageUrl} alt="" height={400} />
    </Card>
  );
};

export default ImageComponent;