import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/modest.css';
import {Provider} from 'react-redux';
import store from './store/store';
import Router from './router/router';

ReactDOM.render(
  <Provider store = {store} >
    <Router />
  </Provider>, 
  document.getElementById('root')
);