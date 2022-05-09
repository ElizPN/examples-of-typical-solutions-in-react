import { Button } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";

export const Menu: FC = () => {
  return (
    <>
      <Button to='/' variant='outlined' component={Link}>
        Home
      </Button>

      <Button to='/about' variant='outlined' component={Link}>
        About
      </Button>

      <Button to='/states' variant='outlined' component={Link}>
        States
      </Button>
    </>
  );
};
