import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './App';
import './index.css';

import Home from './components/Home';
import Inbox from './components/Inbox';
import Starret from './components/Starret';
import Sent from './components/Sent';
import Trash from './components/Trash';
import NotFound from './components/NotFound';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App} >
      <IndexRoute path="home" component={Home} />
      <Route path="inbox" component={Inbox} />
      <Route path="starret" component={Starret} />
      <Route path="sent" component={Sent} />
      <Route path="trash" component={Trash} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>,
  document.getElementById('root')
);
