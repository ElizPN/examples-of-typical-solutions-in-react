import { Box, Grid } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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

// const mainFeaturedPost

// const featuredPosts

const theme = createTheme();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
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
            <Route path='/states/counter' element={<PageRouter />} />
            <Route
              path='/states/working-with-selects'
              element={<PageRouter />}
            />
            <Route path='/states' element={<ChapterRouter />} />
            <Route path='/arrays' element={<ChapterRouter />} />
          </Routes>
        </Container>
        <Footer title='Footer' description='Yes, this is my Footer!' />
      </BrowserRouter>
    </ThemeProvider>
  );
}
