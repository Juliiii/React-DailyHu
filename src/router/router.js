import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import App from '@/pages/App';
import About from '@/pages/About';
import Detail from '@/pages/ArticlesDetail';

export const MyRouter = (props) => {
  return(
    <Router history={ browserHistory }>
      <Route path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/detail/:id" component={Detail} />
    </Router>
  );
}

export default MyRouter;