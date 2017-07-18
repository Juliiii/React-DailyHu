import React, { Component } from 'react';
import { Drawer } from 'antd-mobile';
import axios from 'axios';
import HBUButton from './HBUButton/HBUButton';
import SideBar from './SideBar/SideBar/SideBar';
import ArticlesList from './ArticlesList/views/ArticlesList';
import './css/App.css';
// import '../css/modest.css';
// const particlesJS = require('../lib/particles.js');


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
    const data = [
    {
        "thumbnail": "https://avatars6.githubusercontent.com/u/2081487?v=4&s=120",
        "title": "饿了么大前端 Node.js 进阶教程",
        "url": "http://localhost:8088/detail?url=http://www.cnodejs.org/topic/58ad76db7872ea0864fedfcc",
        "date": "2 天前"
    },
    {
        "thumbnail": "https://avatars0.githubusercontent.com/u/3118295?v=3&s=120",
        "title": "2017，我们来聊聊 Node.js",
        "url": "http://localhost:8088/detail?url=http://www.cnodejs.org/topic/58eee565a92d341e48cfe7fc",
        "date": "3 天前"
    },
    {
        "thumbnail": "https://avatars1.githubusercontent.com/u/19908330?v=3&s=120",
        "title": "深夜放毒——阿里开源的企业级Node框架Egg使用指南",
        "url": "http://localhost:8088/detail?url=http://www.cnodejs.org/topic/580a6a7e541dfb7b50f40a60",
        "date": "3 小时前"
    },
    {
        "thumbnail": "https://avatars1.githubusercontent.com/u/19908330?v=3&s=120",
        "title": "轻松排查线上Node内存泄漏问题",
        "url": "http://localhost:8088/detail?url=http://www.cnodejs.org/topic/58eb5d378cda07442731569f",
        "date": "10 小时前"
    },
    {
        "thumbnail": "https://avatars3.githubusercontent.com/u/8402442?v=3&s=120",
        "title": "XCEL 项目总结 - Electron 与 Vue 的方方面面",
        "url": "http://localhost:8088/detail?url=http://www.cnodejs.org/topic/594f60229c7ee4c245b6b315",
        "date": "11 天前"
    },
    {
        "thumbnail": "https://avatars0.githubusercontent.com/u/8086486?v=3&s=120",
        "title": "我来回答饿了么大前端的问题（1）",
        "url": "http://localhost:8088/detail?url=http://www.cnodejs.org/topic/58fcb4d931e8c2bb1c3dcd28",
        "date": "14 天前"
    },
    {
        "thumbnail": "https://avatars7.githubusercontent.com/u/12862565?v=4&s=120",
        "title": "1.Node.js 接入微信公众平台开发",
        "url": "http://localhost:8088/detail?url=http://www.cnodejs.org/topic/59294bff9e32cc84569a746a",
        "date": "14 天前"
    },
    {
        "thumbnail": "https://avatars7.githubusercontent.com/u/12862565?v=4&s=120",
        "title": "4.Node.js 微信消息管理",
        "url": "http://localhost:8088/detail?url=http://www.cnodejs.org/topic/5939fa64d3575f1303de3aab",
        "date": "14 天前"
    },
    {
        "thumbnail": "https://avatars1.githubusercontent.com/u/227713?v=3&s=120",
        "title": "值得关注的 eggjs 动态 03 期",
        "url": "http://localhost:8088/detail?url=http://www.cnodejs.org/topic/59524ec7984e31dd458c14ab",
        "date": "16 天前"
    },
    {
        "thumbnail": "https://avatars0.githubusercontent.com/u/2842176?v=3&s=120",
        "title": "从暴力到 NAN 再到 NAPI——Node.js 原生模块开发方式变迁",
        "url": "http://localhost:8088/detail?url=http://www.cnodejs.org/topic/5957626dacfce9295ba072e0",
        "date": "17 天前"
    },
    {
        "thumbnail": "https://avatars1.githubusercontent.com/u/13315?v=3&s=120",
        "title": "端午节后福利：Node.js 8",
        "url": "http://localhost:8088/detail?url=http://www.cnodejs.org/topic/592f7ac7855efbac2cf7a542",
        "date": "25 天前"
    },
    {
        "thumbnail": "https://avatars7.githubusercontent.com/u/12862565?v=4&s=120",
        "title": "2.Node.js access_token的获取、存储及更新",
        "url": "http://localhost:8088/detail?url=http://www.cnodejs.org/topic/5933d125739a92064a1bd4b6",
        "date": "25 天前"
    },
    {
        "thumbnail": "https://avatars7.githubusercontent.com/u/12862565?v=4&s=120",
        "title": "3.Node.js 自定义微信菜单",
        "url": "http://localhost:8088/detail?url=http://www.cnodejs.org/topic/593668946b7ebe7e2979d8c6",
        "date": "1 个月前"
    },
    {
        "thumbnail": "https://avatars3.githubusercontent.com/u/156269?v=3&s=120",
        "title": "直播 egg 文档产生的过程",
        "url": "http://localhost:8088/detail?url=http://www.cnodejs.org/topic/5870e9da04dcf9a706a745f0",
        "date": "1 个月前"
    },
    {
        "thumbnail": "https://avatars0.githubusercontent.com/u/977979?v=3&s=120",
        "title": "微信小程序+Egg打造社区全栈解决方案",
        "url": "http://localhost:8088/detail?url=http://www.cnodejs.org/topic/58f97f9c31e8c2bb1c3dcc54",
        "date": "1 个月前"
    },
    {
        "thumbnail": "https://avatars0.githubusercontent.com/u/3118295?v=3&s=120",
        "title": "《请叫我Node.js 8》兼发布说明",
        "url": "http://localhost:8088/detail?url=http://www.cnodejs.org/topic/592e377e855efbac2cf7a4dd",
        "date": "1 个月前"
    },
    {
        "thumbnail": "https://avatars0.githubusercontent.com/u/1522494?v=3&s=120",
        "title": "聊聊 Vue 组件命名那些事",
        "url": "http://localhost:8088/detail?url=http://www.cnodejs.org/topic/5816aabdcf18d0333412d323",
        "date": "1 个月前"
    },
    {
        "thumbnail": "https://avatars1.githubusercontent.com/u/9846613?v=3&s=120",
        "title": "webpack代码分离 ensure 看了还不懂，你打我",
        "url": "http://localhost:8088/detail?url=http://www.cnodejs.org/topic/586823335eac96bb04d3e305",
        "date": "1 个月前"
    },
    {
        "thumbnail": "https://avatars0.githubusercontent.com/u/3118295?v=3&s=120",
        "title": "Node.js写爬虫系列",
        "url": "http://localhost:8088/detail?url=http://www.cnodejs.org/topic/57c529cf9b447b634391c814",
        "date": "1 个月前"
    },
    {
        "thumbnail": "https://avatars1.githubusercontent.com/u/13315?v=3&s=120",
        "title": "V8 Ignition：JS 引擎与字节码的不解之缘",
        "url": "http://localhost:8088/detail?url=http://www.cnodejs.org/topic/59084a9cbbaf2f3f569be482",
        "date": "2 个月前"
    },
    {
        "thumbnail": "https://avatars3.githubusercontent.com/u/5706155?v=3&s=120",
        "title": "webpack之CommonsChunkPlugin正确打开方式",
        "url": "http://localhost:8088/detail?url=http://www.cnodejs.org/topic/58396960c71e606e36aed1db",
        "date": "2 个月前"
    },
    {
        "thumbnail": "https://avatars2.githubusercontent.com/u/15210887?v=3&s=120",
        "title": "使用Google Sheets + JavaScript定制一个自动化天气管家",
        "url": "http://localhost:8088/detail?url=http://www.cnodejs.org/topic/58c3ec5406dbd608756d0c83",
        "date": "2 个月前"
    },
    {
        "thumbnail": "https://avatars0.githubusercontent.com/u/3118295?v=3&s=120",
        "title": "【多图】如果你来设计一个基于Webpack的前端开发工具",
        "url": "http://localhost:8088/detail?url=http://www.cnodejs.org/topic/591919d4ba8670562a40f106",
        "date": "2 个月前"
    },
    {
        "thumbnail": "https://avatars.githubusercontent.com/u/13572030?v=3&s=120",
        "title": "教你如何搭建一个超完美的React.js服务端渲染开发环境",
        "url": "http://localhost:8088/detail?url=http://www.cnodejs.org/topic/5865a866189fd5ad6459006c",
        "date": "2 个月前"
    },
    {
        "thumbnail": "https://avatars1.githubusercontent.com/u/19908330?v=3&s=120",
        "title": "手把手测试你的JS代码性能",
        "url": "http://localhost:8088/detail?url=http://www.cnodejs.org/topic/58b562f97872ea0864fee1a7",
        "date": "2 个月前"
    },
    {
        "thumbnail": "https://avatars3.githubusercontent.com/u/4279697?v=3&s=120",
        "title": "从零开始写一个 Node.js 的 MongoDB 驱动库",
        "url": "http://localhost:8088/detail?url=http://www.cnodejs.org/topic/5856478b491e0754534fb0f4",
        "date": "7 个月前"
    },
    {
        "thumbnail": "https://avatars3.githubusercontent.com/u/8424643?v=3&s=120",
        "title": "Vue大型SPA项目的最佳实践",
        "url": "http://localhost:8088/detail?url=http://www.cnodejs.org/topic/58c6c8dae0cfa8974a261287",
        "date": "2 个月前"
    },
    {
        "thumbnail": "https://avatars0.githubusercontent.com/u/2842176?v=3&s=120",
        "title": "开场 Live，分享点干货——「深入了解 Node.js 包与模块机制」",
        "url": "http://localhost:8088/detail?url=http://www.cnodejs.org/topic/590850d6782dbc4b183ecfb0",
        "date": "2 个月前"
    },
    {
        "thumbnail": "https://avatars0.githubusercontent.com/u/14966444?v=3&s=120",
        "title": "koa中间件机制详解",
        "url": "http://localhost:8088/detail?url=http://www.cnodejs.org/topic/58fd8ec7523b9d0956dad945",
        "date": "3 个月前"
    },
    {
        "thumbnail": "//gravatar.com/avatar/d24fc5b1c6b84dae95dd23ba1c7ebbcb?size=48",
        "title": "[杭州] 前端 / Node.js  <阿里云-数据事业部-数据产品研发>",
        "url": "http://localhost:8088/detail?url=http://www.cnodejs.org/topic/5805c9c027a1d99178a98f69",
        "date": "3 个月前"
    },
    {
        "thumbnail": "https://avatars2.githubusercontent.com/u/8213509?v=3&s=120",
        "title": "协程概念，原理（c++和node.js实现）",
        "url": "http://localhost:8088/detail?url=http://www.cnodejs.org/topic/58ddd7a303d476b42d34c911",
        "date": "3 个月前"
    },
    {
        "thumbnail": "https://avatars0.githubusercontent.com/u/3118295?v=3&s=120",
        "title": "Node.js 2016 回顾以及2017展望",
        "url": "http://localhost:8088/detail?url=http://www.cnodejs.org/topic/588a959b1dc8ff8739cbc66d",
        "date": "3 个月前"
    },
    {
        "thumbnail": "https://avatars3.githubusercontent.com/u/719985?v=3&s=120",
        "title": "2016 年崛起的 JS 项目",
        "url": "http://localhost:8088/detail?url=http://www.cnodejs.org/topic/58c5eb5279f557ff16f0f26a",
        "date": "3 个月前"
    },
    {
        "thumbnail": "https://avatars4.githubusercontent.com/u/5453359?v=4&s=120",
        "title": "Mobi.css 2 发布 beta 版，一个轻量、可拓展、移动端优先的 css 框架",
        "url": "http://localhost:8088/detail?url=http://www.cnodejs.org/topic/58e51f80c669764920c00a15",
        "date": "3 个月前"
    },
    {
        "thumbnail": "https://avatars2.githubusercontent.com/u/359395?v=3&s=120",
        "title": "Chrome DevTools：在 Profile 性能分析中显示原生 javascript 函数",
        "url": "http://localhost:8088/detail?url=http://www.cnodejs.org/topic/58db3e9eb3e60b982d089cd6",
        "date": "4 个月前"
    },
    {
        "thumbnail": "https://avatars1.githubusercontent.com/u/227713?v=3&s=120",
        "title": "可能是最好的 JS Assert 库 - 皇帝的新衣",
        "url": "http://localhost:8088/detail?url=http://www.cnodejs.org/topic/58d8e10be9ab80d02d3770e1",
        "date": "4 个月前"
    },
    {
        "thumbnail": "https://avatars0.githubusercontent.com/u/3118295?v=3&s=120",
        "title": "【整理】Node.js v7.6 发布说明",
        "url": "http://localhost:8088/detail?url=http://www.cnodejs.org/topic/58afe6307872ea0864fee087",
        "date": "5 个月前"
    },
    {
        "thumbnail": "https://avatars0.githubusercontent.com/u/1522494?v=3&s=120",
        "title": "少年，不要滥用箭头函数啊",
        "url": "http://localhost:8088/detail?url=http://www.cnodejs.org/topic/584a207a3ebad99b336b1ede",
        "date": "5 个月前"
    },
    {
        "thumbnail": "//gravatar.com/avatar/6a892642cadbe097e29895c32a4b1adf?size=48",
        "title": "安利一个vue组件库——N3-components",
        "url": "http://localhost:8088/detail?url=http://www.cnodejs.org/topic/57cad7c95f7f910c27696d60",
        "date": "5 个月前"
    },
    {
        "thumbnail": "https://avatars4.githubusercontent.com/u/5453359?v=4&s=120",
        "title": "码字 md - 干净精致的 Markdown 编辑器",
        "url": "http://localhost:8088/detail?url=http://www.cnodejs.org/topic/5866849d9ff78bc36af043ed",
        "date": "5 个月前"
    }
]
    return (
      <div className="wrapper">
        <HBUButton showMenu={this.showMenu} />
        <Drawer className="my-drawer"
                style = {{minHeight: document.documentElement.clientHeight}}
                sidebar={sidebar}
                open={this.state.open}
                onOpenChange={this.showMenu}>
          {data.length ? <ArticlesList data={data} loadMore={this.loadMore} refresh={this.refresh} /> : ''}
        </Drawer>

      </div>
    );
  }
}
export default App;


