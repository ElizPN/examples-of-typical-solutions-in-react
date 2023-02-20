import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "@mui/material/Link";

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <React.Fragment>
      <Toolbar
        sx={{ borderBottom: 1, borderColor: "divider" }}
        className='header-toolbar'
      >
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

        <Link
          data-testid='github-link-header'
          href='https://github.com/ElizPN'
          underline='none'
          white-space='nowrap'
        >
          My GitHub
          <GitHubIcon color='primary' fontSize='large' />
        </Link>
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
