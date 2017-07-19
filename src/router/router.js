import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import App from '../App';
import About from '../About';
import Detail from '../ArticlesDetail/ArticlesDetail'

export const MyRouter = (props) => {
  return(
    <Router history={ browserHistory }>
      <Route path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/detail" component={Detail} />
    </Router>
  );
}

export default MyRouter;