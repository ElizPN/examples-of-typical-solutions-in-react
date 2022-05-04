import { FC } from "react";
import "./general.css";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { Box } from "@mui/material";

const Home: FC = () => {
  return <div>this is home</div>;
};
const About: FC = () => {
  return <Box>this is About</Box>;
};
const Menu: FC = () => {
  return (
    <>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
    </>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Box>
        <h1>Welcome! </h1>
        <Menu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}
