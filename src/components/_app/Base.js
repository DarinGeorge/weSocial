import Head from 'next/head';
import Nav from '../Nav';
import { CssBaseline, Container } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

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

        <meta charSet='utf-8' />
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no'
        />

        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
        />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/icon?family=Material+Icons'
        />
      </Head>
      <Nav />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>{children}</Container>
      </ThemeProvider>
    </>
  );
};
