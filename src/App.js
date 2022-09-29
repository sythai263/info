import { Container, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme } from "@mui/material/styles";
import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const curr = useSelector((state) => state.theme.current);
  const theme = createTheme({
    typography: {
      allVariants: {
        fontFamily: ['"Montserrat"', "sans-serif"].join(","),
      },
    },
    palette: {
      mode: curr ? curr : "dark",
      primary: {
        main: "#ff6f00",
        light: "#ffa040",
        dark: "#c43e00",
        contrastText: "#ffffff",
      },
      secondary: {
        main: "#f5eb6d",
        light: "#ffff9e",
        dark: "#c0b93c",
        contrastText: "#ffffff",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Navbar />
      </Container>
    </ThemeProvider>
  );
}

export default App;
