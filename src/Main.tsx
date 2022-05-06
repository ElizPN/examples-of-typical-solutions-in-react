import * as React from "react";
import Grid from "@mui/material/Grid";

interface MainProps {
  posts: ReadonlyArray<string>;
  title: string;
}

export function Main(props: MainProps) {
  const { posts, title } = props;

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        "& .markdown": {
          py: 3,
        },
      }}
    ></Grid>
  );
}
