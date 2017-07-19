import React from 'react';
import HBUButton from './components/HBUButton/HBUButton';
import Drawer from './components/Drawer/Drawer';
import './css/App.css';
// import '../css/modest.css';
// const particlesJS = require('../lib/particles.js');


const App = () => {
  return (
      <div className="wrapper">
        <HBUButton />
        <Drawer />
      </div>
  );
}
export default App;


