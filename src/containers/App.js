import React, { Component } from 'react';
import { Drawer } from 'antd-mobile';
import axios from 'axios';
import HBUButton from '../components/HBUButton';
import SideBar from '../components/SideBar/SideBar';
import ArticlesList from '../components/ArticlesList/ArticlesList';
import '../css/App.css';
// import '../css/modest.css';


class App extends Component {

  constructor () {
    super();
    this.state = {
      open: false,
      meta: [],
      list: [],
      page: 1,
      site: ''
    };
    this.showMenu = this.showMenu.bind(this);
    this.loadMore = this.loadMore.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  async componentWillMount () {
    const data = (await axios({
      method: 'get',
      url: '/meta'
    })).data;
    this.setState({
      meta: [
        {name: "DailyHu"}, 
        ...data, 
        {name: "about", icon: "http://wx3.sinaimg.cn/mw1024/a0b59701ly1fhn4nsq571j202g02gjr8.jpg"}]
    });
  }

  showMenu () {
    this.setState({
      open: !this.state.open
    });
  }

  async changeMeta (args) {
    const site = args.target.innerText;
    if (site === 'DailyHu' || site === 'about') return;
    this.setState({
      list: []
    });
    const lists = (await axios({
      method: 'get',
      url: `/list?site=${site}&page=${1}`
    })).data;
    this.setState({
      list: lists,
      site,
      page: 1
    });
  }

  async loadMore () {
    let {site, page} = this.state;
    if (!site) return;
    const lists = (await axios({
      method: 'get',
      url: `/list?site=${site}&page=${++page}`
    })).data;
    this.setState({
      list: [...this.state.list, ...lists]
    });    
  }

  async refresh () {
    let {site} = this.state;
    const lists = (await axios({
      method: 'get',
      url: `/list?site=${site}&page=${1}`
    })).data;
    this.setState({
      list: lists,
      site,
      page: 1
    });   
  }

  render () {
    const sidebar = (<SideBar meta={this.state.meta} changeMeta={this.changeMeta.bind(this)}/>);
    return (
      <div className="wrapper">
        <HBUButton showMenu={this.showMenu} />
        <Drawer className="my-drawer"
                style = {{minHeight: document.documentElement.clientHeight}}
                sidebar={sidebar}
                open={this.state.open}
                onOpenChange={this.showMenu}>
          {this.state.list.length ? <ArticlesList data={this.state.list} loadMore={this.loadMore} refresh={this.refresh} /> : ''}
        </Drawer>

      </div>
    );
  }
}
export default App;


