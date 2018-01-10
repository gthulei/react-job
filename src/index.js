import React from 'react';
import ReactDOM from 'react-dom';

import Router from './router'
import registerServiceWorker from './registerServiceWorker';
import 'static/css/reset'
ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
