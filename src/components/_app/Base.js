import Head from 'next/head';
import MNav from '../Nav/MNav';
import { CssBaseline, Container } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import clsx from 'clsx';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  menuButton: {
    marginRight: 36,
    marginLeft: 8
  },
  userImg: {
    minWidth: 'auto'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    border: 'none'
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    paddingLeft: theme.spacing(0)
  },
  hide: {
    display: 'none'
  },
  desktopNav: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex'
    }
  }
}));

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
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Head>
        <title>weSocial</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        {/* ---------------------------- Navbar Start ---------------------------- */}
        <div className={classes.root}>
          <Drawer
            variant='permanent'
            className={clsx(classes.drawer, classes.desktopNav, {
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open
            })}
            classes={{
              paper: clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open
              })
            }}
            open={open}
          >
            <div>
              {open ? (
                <>
                  <IconButton onClick={handleDrawerClose}>
                    <ChevronLeftIcon />
                  </IconButton>
                </>
              ) : (
                <div />
              )}
            </div>
            <List>
              <ListItem button className={classes.toolbar}>
                {open ? (
                  <ListItemIcon className={classes.userImg}>
                    <Avatar
                      alt='Remy Sharp'
                      src='https://via.placeholder.com/40'
                      className={classes.bigAvatar}
                    />
                  </ListItemIcon>
                ) : (
                  <>
                    <ListItemIcon className={classes.userImg}>
                      <Avatar
                        alt='Remy Sharp'
                        src='https://via.placeholder.com/40'
                        className={classes.avatar}
                      />
                    </ListItemIcon>
                  </>
                )}
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem button>
                <ListItemIcon
                  color='inherit'
                  aria-label='open drawer'
                  onClick={handleDrawerOpen}
                  edge='start'
                  className={classes.menuButton}
                >
                  <MenuIcon />
                </ListItemIcon>
                <ListItemText>Apps</ListItemText>
              </ListItem>
            </List>
          </Drawer>

          <MNav />

          <Box component='div' className={classes.content}>
            <Container maxWidth='xl'>{children}</Container>
          </Box>
        </div>
        {/* ---------------------------- Navbar End ---------------------------- */}
      </ThemeProvider>
    </>
  );
};
