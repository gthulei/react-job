import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import configureStore from './redux/store';
import Router from './router';
import registerServiceWorker from './registerServiceWorker';
import 'static/css/reset';
import 'util/axios';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router/>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
