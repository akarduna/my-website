import * as React from 'react';
import Button from '@mui/material/Button';
import { Box, Checkbox } from '@mui/material';
import Header from './Componenets/Header';
import { themeOptions } from './theme';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';
import Blurb from './Componenets/Blurb';

export default function ButtonUsage() {
  const theme = createTheme(themeOptions);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Box width="80%" display="flex" flexDirection="column" justifySelf="center">
        <Header></Header>
        <Blurb></Blurb>
        </Box>
    </ThemeProvider>
  );
}