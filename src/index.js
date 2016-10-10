import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import Raven from 'raven-js';
import store, { history } from './store';
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';
import './css/style.css';
import { sentryUrl } from './data/config';

Raven.config(sentryUrl, {
  tags: {
    gitCommit: 'aaaaa',
    userLevel: 'editor',
  },
}).install();

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid} />
        <Route path="/view/:postId" component={Single} />
      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(
  router,
  document.getElementById('root')
);
