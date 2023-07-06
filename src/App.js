import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Name from "./Components/TableData/name";
import Posts from "./Components/TableData/posts";
import Home from "../src/Components/Home";
import AboutUs from "../src/Components/AboutUs";
import ContactUs from "../src/Components/ContactUs";
import NoPage from "../src/Components/NoPage";
import Counter from "../src/Components/Counter";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AdbIcon from "@mui/icons-material/Adb";
import SignIn from "./Components/SignIn";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
      <CssBaseline />
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                LOGO
              </Typography>

              <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                LOGO
              </Typography>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  "& a": {
                    textDecoration: "none",
                    m: 2,
                    color: "white",
                  },
                }}
              >
                <Link to="/" sx={{ textDecoration: "none" }}>
                  Home
                </Link>
                <Link to="/name">Name</Link>
                <Link to="/counter">Counter</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/signin">Sign In</Link>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        <Routes>
          <Route index element={<Home />} />
          <Route path="counter" element={<Counter />} />
          <Route path="name" element={<Name />} />
          <Route path="posts" element={<Posts />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="*" element={<NoPage />} />
          {/* <div className="App">
          <div className="main"> 
            <Name color="Blue">
              My Favorite place is Maldives.
            </Name>
          </div>
      </div> */}
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
