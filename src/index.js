import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'react-perfect-scrollbar/dist/css/styles.css';
import 'nprogress/nprogress.css';
import './assets/css/prism.css';
import { enableES5 } from 'immer';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { SettingsProvider } from './context/SettingsContext';
import configureStore from './store/configureStore';
import { restoreSettings } from './utils/settings';
import App from './App';

enableES5();

const store = configureStore();
const settings = restoreSettings();

ReactDOM.render(
  <Provider store={store}>
    <SettingsProvider settings={settings}>
      <App />
    </SettingsProvider>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
