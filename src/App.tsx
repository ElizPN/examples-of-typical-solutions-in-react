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
import Footer from "./components/Footer";
import { PageRouter } from "./components/PageRouter";
import { ChapterRouter } from "./components/ChapterRouter";
import { contentfulConfig } from "./config/contentfulConfig";

var contentful = require("contentful");
const client = contentful.createClient(contentfulConfig);

const theme = createTheme();

const customData: any = require("../package.json");

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
        <Container maxWidth='lg'>
          <Header title='Typical challenges in React ' />
          <Menu />
          <main>
            <Grid container spacing={5} sx={{ mt: 3 }}>
              {" "}
            </Grid>
          </main>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route
              path='/entries/:chapter/:page'
              element={<PageRouter client={client} />}
            />
            <Route path='/category/:chapter' element={<ChapterRouter />} />
          </Routes>
        </Container>
        <Footer />
      </HashRouter>
    </ThemeProvider>
  );
}
