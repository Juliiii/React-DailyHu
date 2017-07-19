import React from 'react';
import HBUButton from './components/HBUButton/HBUButton';
import Drawer from './components/Drawer/Drawer';
import Logo from './components/Logo/Logo'
import './css/App.css';
import { connect } from 'react-redux';


const App = (props) => {
  return (
      <div className="wrapper">
        <HBUButton />
        <Drawer />
        {props.showLogo ? <Logo /> : null}
      </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    showLogo: state.showLogo
  }
}


export default connect(mapStateToProps)(App)

