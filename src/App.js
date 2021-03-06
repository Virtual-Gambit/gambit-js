import React from 'react';
import { Router } from 'react-router-dom';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { SnackbarProvider } from 'notistack';
import {
  createStyles,
  jssPreset,
  makeStyles,
  StylesProvider,
  ThemeProvider
} from '@material-ui/core';
import Auth from './components/Global/Auth';
// import CookiesNotification from './components/Global/CookiesNotification';
import GoogleAnalytics from './components/Global/GoogleAnalytics';
import ScrollReset from './components/Global/ScrollReset';
import useSettings from './hooks/useSettings';
import { createTheme } from './theme';
import Routes from './routes';
import history from './history';

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const useStyles = makeStyles(() => createStyles({
  '@global': {
    '*': {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
    },
    html: {
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
      height: '100%',
      width: '100%'
    },
    body: {
      height: '100%',
      width: '100%'
    },
    '#root': {
      height: '100%',
      width: '100%'
    }
  }
}));

function App() {
  useStyles();

  const { settings } = useSettings();

  return (
    <ThemeProvider theme={createTheme(settings)}>
      <StylesProvider jss={jss}>
        <SnackbarProvider maxSnack={1}>
          <Router history={history}>
            <Auth>
              <ScrollReset />
              <GoogleAnalytics />
              <Routes />
            </Auth>
          </Router>
        </SnackbarProvider>
      </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
