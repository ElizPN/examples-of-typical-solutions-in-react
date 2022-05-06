import * as React from "react";

import Box from "@mui/material/Box";

interface FooterProps {
  description: string;
  title: string;
}

export default function Footer(props: FooterProps) {
  const { description, title } = props;

  return (
    <Box component='footer' sx={{ bgcolor: "background.paper", py: 6 }}></Box>
  );
}
