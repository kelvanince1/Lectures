import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NotFound from './NotFound';
import Home from './Home.js';
import Resume from './Resume.js';
import Contact from './Contact.js';
import './index.css';
import {Router, Route, hashHistory, browserHistory, IndexRoute} from 'react-router';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="contact" component={Contact}/>
      <Route path="resume" component={Resume}/>
    </Route>
    <Route path="*" component={NotFound}/>
  </Router>,
  document.getElementById('root')
);
