import { Box } from "@mui/material";
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

const sections = [
  { title: "Technology", url: "#" },
  { title: "Design", url: "#" },
  { title: "Culture", url: "#" },
  { title: "Business", url: "#" },
  { title: "Politics", url: "#" },
  { title: "Opinion", url: "#" },
  { title: "Science", url: "#" },
  { title: "Health", url: "#" },
  { title: "Style", url: "#" },
  { title: "Travel", url: "#" },
];

const theme = createTheme();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Container maxWidth='lg'>
          <Header title='Blog' sections={sections} />

          <h1>Welcome! </h1>
          <Menu />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
          <ArrayList />
          <Users />
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}
