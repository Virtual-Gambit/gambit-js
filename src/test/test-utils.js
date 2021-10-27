/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable max-len */
import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

// import Auth from '../components/Global/Auth';
import configureStore from '../store/configureStore';
import history from '../history';
import { createTheme } from '../theme';

configure({ adapter: new Adapter() });

const settings = {
  direction: 'ltr',
  responsiveFontSizes: true,
  theme: 'LIGHT'
};

export const testStore = configureStore();

export function renderWithStore(element, store = testStore) {
  return {
    component: render(
      <Provider store={store}>
        <MuiThemeProvider theme={createTheme(settings)}>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <SnackbarProvider maxSnack={1}>
              <Router history={history}>
                {element}
              </Router>
            </SnackbarProvider>
          </MuiPickersUtilsProvider>
        </MuiThemeProvider>
      </Provider>
    ),
    store
  };
}

export const mockServiceCreator = (body, succeeds = true) => () => new Promise((resolve, reject) => {
  setTimeout(() => (succeeds ? resolve(body) : reject(body)), 10);
});

export const testApi = (statusText, data) => ({
  statusText,
  data: {
    data
  }
});
// {statusText: null, data: data}
export const mockAPICreator = (request, succeeds = true) => () => new Promise((resolve, reject) => {
  setTimeout(() => (
    succeeds
      ? resolve({ status: 200, statusText: request.statusText, data: request.data })
      : reject(request.statusText)
  ), 10);
});

export const mockActionRequest = () => ({
  type: 'MOCK_ACTION_REQUEST',
});
export const mockActionSuccess = () => ({
  type: 'MOCK_ACTION_SUCCESS',
});
export const mockActionFailure = (error) => ({
  type: 'MOCK_ACTION_FAILURE',
  payload: {
    status: 404,
    statusText: error.response.statusText,
  },
});

export const mockActionCreator = () => (dispatch) => {
  dispatch(mockActionRequest());
  setTimeout(() => dispatch(mockActionSuccess()), 10);
};
