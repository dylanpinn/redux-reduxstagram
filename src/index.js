import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';
import './css/style.css';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={PhotoGrid} />
      <Route path="/view/:postId" component={Single} />
    </Route>
  </Router>
);

ReactDOM.render(
  router,
  document.getElementById('root')
);
