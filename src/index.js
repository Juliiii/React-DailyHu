import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import HBUButton from './components/HBUButton'
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<HBUButton />, document.getElementById('root'));
registerServiceWorker();
