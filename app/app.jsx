import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import About from 'About';
import Page from 'Page';
import 'styles';

render(
  <Router basename={'/'}>
    <div className="wrapper">
      <Route exact path="/" component={Page} />
      <Route path="/about" component={About} />
    </div>
  </Router>,
  document.getElementById('app')
);
