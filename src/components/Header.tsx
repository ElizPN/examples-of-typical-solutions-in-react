import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "@mui/material/Link";

interface HeaderProps {
  title: string;
}

export const Header = (props: HeaderProps) => {
  const { title } = props;

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Typography
          component='h2'
          variant='h5'
          color='inherit'
          align='center'
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>

        <IconButton>
          <GitHubIcon
            color='primary'
            fontSize='large'
            onClick={(event) =>
              (window.location.href = "https://github.com/ElizPN")
            }
            target='_blank'
          />
        </IconButton>
      </Toolbar>
      <Toolbar
        component='nav'
        variant='dense'
        sx={{
          justifyContent: "space-between",
          overflowX: "auto",
        }}
      ></Toolbar>
    </React.Fragment>
  );
};
