import * as React from "react";
import Grid from "@mui/material/Grid";
import CardActionArea from "@mui/material/CardActionArea";
import Card from "@mui/material/Card";

interface FeaturedPostProps {
  post: {
    date: string;
    description: string;
    image: string;
    imageLabel: string;
    title: string;
  };
}

export function FeaturedPost(props: FeaturedPostProps) {
  const { post } = props;

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component='a' href='#'>
        <Card sx={{ display: "flex" }}></Card>
      </CardActionArea>
    </Grid>
  );
}
