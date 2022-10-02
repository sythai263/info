import { Grid, ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme } from '@mui/material/styles';
import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import MainRoute from './routes/MainRoute';

function App() {
  const curr = useSelector(state => state.theme.current);
  const theme = createTheme({
    typography: {
      allVariants: {
        fontFamily: ['"Montserrat"', 'sans-serif'].join(','),
      },
    },
    palette: {
      mode: curr ? curr : 'dark',
      primary: {
        main: '#c84b31',
        light: '#ff7b5c',
        dark: '#911708',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#2d4263',
        light: '#5a6d91',
        dark: '#001c39',
        contrastText: '#ffffff',
      },
    },
    components: {
      MuiSelect: {
        styleOverrides: {
          select: {
            color: '#fff',
            borderColor: '#fff',
            '&:focus': {
              borderColor: '#fff',
            },
            '&:before': {
              borderColor: '#fff',
            },
            '&:after': {
              borderColor: '#fff',
            },
          },
          icon: {
            color: '#fff',
          },
        },
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Grid container>
          <Navbar />
          <MainRoute />
        </Grid>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
