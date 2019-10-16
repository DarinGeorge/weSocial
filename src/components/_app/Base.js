import Head from 'next/head';
import Nav from '../Nav';
import { CssBaseline, Container } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#ffffff'
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: '#ffd10d'
      // dark: will be calculated from palette.secondary.main,
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
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Nav />
        <Container maxWidth='xl'>
          <ThemeProvider>{children}</ThemeProvider>
        </Container>
      </ThemeProvider>
    </>
  );
};
