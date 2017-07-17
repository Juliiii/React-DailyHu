import React, { Component } from 'react';
import { Drawer, List } from 'antd-mobile';
import HBUButton from '../components/HBUButton';
import SliderBar from '../components/SliderBar';
import Particles from 'react-particles-js';
import '../css/App.css';
// const particlesJS = require('../lib/particles.js');
/*
class App extends React.Component {
  state = {
    open: true,
  }
  onDock = (d) => {
    this.setState({
      [d]: !this.state[d],
    });
  }
  render() {
    const sidebar = (<List>
      {[...Array(20).keys()].map((i, index) => {
        if (index === 0) {
          return (<List.Item key={index}
            thumb="https://dn-cnode.qbox.me/FsxOZts38LzjsuQmuE0Y6MVMs8Iq"
            multipleLine
          >Category</List.Item>);
        }
        return (<List.Item key={index}
          thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
        >Category{index}</List.Item>);
      })}
    </List>);

    return (<div style={{ height: '100%' }}>
      <NavBar iconName="ellipsis" onLeftClick={() => this.onDock('open')}>
        <span style={{fontSize: '0.3rem'}}>open in document</span>
      </NavBar>
      <Drawer
        className="my-drawer"
        style={{ minHeight: document.documentElement.clientHeight }}
        contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
        sidebarStyle={{ border: '1px solid #ddd' }}
        sidebar={sidebar}
        open={this.state.open}
      >
        Click upper-left corner icon
      </Drawer>
    </div>);
  }
}
*/

class App extends Component {

  constructor () {
    super();
    this.state = {
      meta: [
        {
          thumb: '...',
          extra: '1231231'
        }
      ],
      open: false
    }
  }

  showMenu (...args) {
    this.setState({
      open: !this.state.open
    });

    console.log(this.state.open);
  }

  changeMeta () {
    console.log(11);
  }

  render () {
    const params = {
            particles: {
              line_linked: {
                shadow: {
                  enable: true,
                  color: "#3CA9D1",
                  blur: 5
                }
              },
              number: {
                density: {
                  value_area: 1000,
                  enable: true
                }
              },
              color: {
                value: "#b61924"
              },
              shape:{
                type: 'polygon'
              }
            }
    }

    const clientHeight = document.body.clientHeight;
    const clientWidth = document.body.clientWidth;


    const sidebar = (<SliderBar meta={this.state.meta} changeMeta={this.changeMeta.bind(this)}/>);


    return (
      <div className="wrapper">
        <div className="particlesWrapper">
          <Particles params={params}
                    height={clientHeight}
                    width={clientWidth}
                    />
        </div>
        <HBUButton showMenu={this.showMenu.bind(this)} />
       <Drawer className="my-drawer"
                style = {{minHeight: "300px"}}
                contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 30 }}
                sidebarStyle={{ border: '1px solid #ddd' }}
                overlayStyle={{ display: 'none'}}
                sidebar={sidebar}
                open={this.state.open}
                onOpenChange={this.showMenu.bind(this)}>
        1234
        </Drawer>

      </div>
    );
  }
}
export default App;
