import * as React from 'react';
import { Box } from '@mui/material';
import Header from './Componenets/Header';
import { themeOptions } from './theme';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';
import Blurb from './Componenets/Blurb';
import Square from './Componenets/Square';

export default function ButtonUsage() {
  const theme = createTheme(themeOptions);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Box width="80%" display="flex" flexDirection="column" justifySelf="center">
        <Header></Header>
        <Blurb></Blurb>
        <Square></Square>
      </Box>
    </ThemeProvider>
  );
}