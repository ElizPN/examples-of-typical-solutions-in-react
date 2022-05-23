import { Box, Grid } from "@mui/material";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./general.css";
import { Menu } from "./components/Menu";
import { About } from "./components/About";
import { Home } from "./components/Home";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import Footer from "./components/Footer";
import { PageRouter } from "./components/PageRouter";
import { ChapterRouter } from "./components/ChapterRouter";

const theme = createTheme();

const customData: any = require("../package.json");
console.log(customData.homepage);
console.log(process.env.PUBLIC_URL);

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
        <Container maxWidth='lg'>
          <Header title='Blog' />
          <Menu />
          <main>
            <Grid container spacing={5} sx={{ mt: 3 }}>
              <Main title='From the firehose' />
            </Grid>
          </main>

          <h1>Welcome! </h1>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/entries/:chapter/:page' element={<PageRouter />} />
            <Route path='/category/:chapter' element={<ChapterRouter />} />
          </Routes>
        </Container>
        <Footer title='Footer' description='Yes, this is my Footer!' />
      </HashRouter>
    </ThemeProvider>
  );
}
