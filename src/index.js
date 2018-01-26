import React from 'react';
import ReactDOM from 'react-dom';

// import react router dep
import {BrowserRouter, Route} from 'react-router-dom';

// import  css
import 'semantic-ui-css/semantic.min.css';

import {Provider} from 'react-redux';
import store from './store';

import './index.css';

// import service worker
import registerServiceWorker from './registerServiceWorker';

// import components
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
