import Head from 'next/head';
import Nav from '../Nav';
import { Container } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#ffd10d'
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: '#000000',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00'
    }
    // error: will use the default color
  }
});

export const Base = ({ children }) => {
  return (
    <>
      <Head>
        <title>weSocial</title>
      </Head>
      <Nav />
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Container maxWidth='xl'>{children}</Container>
      </ThemeProvider>
    </>
  );
};
