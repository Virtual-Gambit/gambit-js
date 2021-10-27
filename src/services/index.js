/* eslint-disable no-param-reassign */
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

/* Admin Reducer Files */

const appReducer = (history) => combineReducers({
  router: connectRouter(history),
});

const rootReducer = (history) => (state, action) => {
  if (action.type === 'LOGOUT_USER') {
    state = undefined;
  }
  return appReducer(history)(state, action);
};

export default rootReducer;
