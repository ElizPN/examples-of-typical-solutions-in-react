import { Box, Grid } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./general.css";
import { Menu } from "./components/Menu";
import { About } from "./components/About";
import { Home } from "./components/Home";
import { ArrayList } from "./components/Array_list";
import { Users } from "./components/Users";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Header } from "./components/Header";
import { FeaturedPost } from "./components/FeaturedPost";
import { Main } from "./Main";
import Footer from "./Footer";

const sections = [
  { title: "Arrays", url: "#" },
  { title: "Array's objects", url: "#" },
  { title: "Components", url: "#" },
];
// const mainFeaturedPost

const featuredPosts = [
  {
    title: "Featured post",
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageLabel: "Image Text",
  },
  {
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageLabel: "Image Text",
  },
];

const theme = createTheme();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Container maxWidth='lg'>
          <Header title='Blog' sections={sections} />
          <main>
            <Grid container spacing={4}>
              {featuredPosts.map((post) => (
                <FeaturedPost key={post.title} post={post} />
              ))}
            </Grid>
            <Grid container spacing={5} sx={{ mt: 3 }}>
              <Main title='From the firehose' />
              {/* modules posts are no
              imported */}
            </Grid>
          </main>

          <h1>Welcome! </h1>
          <Menu />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
          <ArrayList />
          <Users />
        </Container>
        <Footer
          title='Footer'
          description='Something here to give the footer a purpose!'
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}
