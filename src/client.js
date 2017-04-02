import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory, hashHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import configureStore from './store';
import getRoutes from './routes';

const initialState = {};

initialState.application = {
  user: {id: localStorage.userId},
  loggedIn: !!localStorage.userId
};

const store = configureStore(hashHistory, initialState);
const history = syncHistoryWithStore(hashHistory, store);

render(
  <Provider store={store}>
    <Router history={history} routes={getRoutes(store)}/>
  </Provider>,
  document.getElementById('app')
);
