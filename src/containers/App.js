import React, { Component } from 'react';
import { Drawer, List } from 'antd-mobile';
import HBUButton from '../components/HBUButton';
import SideBar from '../components/SideBar';
import ArticlesList from '../components/ArticlesList';
// import Particles from '../components/Particles';
import '../css/App.css';
import '../css/modest.css';
// const particlesJS = require('../lib/particles.js');


class App extends Component {

  constructor () {
    super();
    this.state = {
      open: false
    }
    this.showMenu = this.showMenu.bind(this);
  }

  showMenu (...args) {
    this.setState({
      open: !this.state.open
    });
  }

  changeMeta () {
    console.log(11);
  }

  render () {

    const meta = [
      {name: "DailyHu"},
      {name: "cnode", icon: "http://midterm-1252605895.cosgz.myqcloud.com/assets/icons/cnode.jpg"},
      {name: "简书", icon: "http://midterm-1252605895.cosgz.myqcloud.com/assets/icons/jianshu.jpg"},
      {name: "新浪", icon: "http://midterm-1252605895.cosgz.myqcloud.com/assets/icons/sina.jpg"},
      {name: "推酷", icon: "http://midterm-1252605895.cosgz.myqcloud.com/assets/icons/tuicool.jpg"},
      {name: "知乎", icon: "http://midterm-1252605895.cosgz.myqcloud.com/assets/icons/zhihu.jpg"},
      {name: "about", icon: "http://wx3.sinaimg.cn/mw1024/a0b59701ly1fhn4nsq571j202g02gjr8.jpg"}
    ];
    const sidebar = (<SideBar meta={meta} changeMeta={this.changeMeta.bind(this)}/>);
    const data = [
      {
          "thumbnail": "https://pic3.zhimg.com/v2-43b7559dee2def9c6b3ed62adba1e212.jpg",
          "title": "回过头看 1996 年的《迪迦奥特曼》，真的不简单",
          "url": "http://localhost:8088/detail?url=http://news-at.zhihu.com/api/4/news/9528054",
          "date": "2017-07-17"
      },
      {
          "thumbnail": "https://pic2.zhimg.com/v2-75224de7a3df8bc86a410378dd70fce5.jpg",
          "title": "乳腺癌是应该被重视，但别被「发病率升高」几个字吓到了",
          "url": "http://localhost:8088/detail?url=http://news-at.zhihu.com/api/4/news/9528172",
          "date": "2017-07-17"
      },
      {
          "thumbnail": "https://pic2.zhimg.com/v2-61bfee2b10f1330fb9e4752d6795662d.jpg",
          "title": "没有人情味，就是一个失败的美食影视剧",
          "url": "http://localhost:8088/detail?url=http://news-at.zhihu.com/api/4/news/9523766",
          "date": "2017-07-17"
      },
      {
          "thumbnail": "https://pic3.zhimg.com/v2-3a6e87116f355b1c147228752c8e586a.jpg",
          "title": "电影看得正嗨，被旁边一个喷嚏吓回现实……没想到这反应还挺有用",
          "url": "http://localhost:8088/detail?url=http://news-at.zhihu.com/api/4/news/9527875",
          "date": "2017-07-17"
      },
      {
          "thumbnail": "https://pic4.zhimg.com/v2-616e2c1e1a447470322ea4dddb15d0f7.jpg",
          "title": "「凭什么不让我们带饮料进 KTV 啊？这太霸王条款了」",
          "url": "http://localhost:8088/detail?url=http://news-at.zhihu.com/api/4/news/9524182",
          "date": "2017-07-17"
      },
      {
          "thumbnail": "https://pic3.zhimg.com/v2-64b76419fededeb7ba0dacdd4e29c526.jpg",
          "title": "- 怎么看出一个人在公司中是不是个好领导？\r\n- 跟他打局游戏",
          "url": "http://localhost:8088/detail?url=http://news-at.zhihu.com/api/4/news/9527901",
          "date": "2017-07-17"
      },
      {
          "thumbnail": "https://pic3.zhimg.com/v2-a886c0ffbe75f6e27666a2becda3c9ba.jpg",
          "title": "比起被出轨的马伊琍，相恋十年没有未来的这一对更让人心疼",
          "url": "http://localhost:8088/detail?url=http://news-at.zhihu.com/api/4/news/9527483",
          "date": "2017-07-17"
      },
      {
          "thumbnail": "https://pic2.zhimg.com/v2-e36f96349351f90b6c6aadf9f9ba913d.jpg",
          "title": "「坐月子」中暑身亡，一场不该发生的中国特色悲剧",
          "url": "http://localhost:8088/detail?url=http://news-at.zhihu.com/api/4/news/9527780",
          "date": "2017-07-17"
      },
      {
          "thumbnail": "https://pic3.zhimg.com/v2-2507b77a860d9ea3d3a472e4412a70fe.jpg",
          "title": "先撇开危险不说，去马路上暴走有多不健康，你们没想过吧",
          "url": "http://localhost:8088/detail?url=http://news-at.zhihu.com/api/4/news/9526884",
          "date": "2017-07-17"
      },
      {
          "thumbnail": "https://pic4.zhimg.com/v2-a7f42c6cc153334752d4d7951d804aa3.jpg",
          "title": "大误 · 恭喜人类，长成个球了",
          "url": "http://localhost:8088/detail?url=http://news-at.zhihu.com/api/4/news/9522124",
          "date": "2017-07-17"
      },
      {
          "thumbnail": "https://pic1.zhimg.com/v2-9a5329c2ebd4839cddc97fc9867f8efc.jpg",
          "title": "精卫要是掌握了这些方法，就不会想要去填海了",
          "url": "http://localhost:8088/detail?url=http://news-at.zhihu.com/api/4/news/9524372",
          "date": "2017-07-17"
      },
      {
          "thumbnail": "https://pic2.zhimg.com/v2-47f572c2ba88e82a5b856fe3e87280b1.jpg",
          "title": "「长生不老药」有了重大进展，唐僧也算是松了一口气",
          "url": "http://localhost:8088/detail?url=http://news-at.zhihu.com/api/4/news/9526944",
          "date": "2017-07-17"
      },
      {
          "thumbnail": "https://pic3.zhimg.com/v2-2f4e52c4ce3a7bb54088f5c9c90de4b2.jpg",
          "title": "「大家都是熟人，不就是问几个法律问题，你还收费了？」",
          "url": "http://localhost:8088/detail?url=http://news-at.zhihu.com/api/4/news/9526887",
          "date": "2017-07-17"
      },
      {
          "thumbnail": "https://pic1.zhimg.com/v2-3e1126c34f72031e367d6841b0f21548.jpg",
          "title": "跟我一起念，这是一座「岛中湖中岛中湖中岛」",
          "url": "http://localhost:8088/detail?url=http://news-at.zhihu.com/api/4/news/9526820",
          "date": "2017-07-17"
      },
      {
          "thumbnail": "https://pic3.zhimg.com/v2-2bf51c68ed710b973fa11ec7e08c8a2a.jpg",
          "title": "听起来像是神秘组织的「影子银行」，举个例子你就明白",
          "url": "http://localhost:8088/detail?url=http://news-at.zhihu.com/api/4/news/9526792",
          "date": "2017-07-17"
      },
      {
          "thumbnail": "https://pic3.zhimg.com/v2-72e60af7549e45206d55798166a34812.jpg",
          "title": "别光嚷着人类要重返月球，来回一次多贵啊",
          "url": "http://localhost:8088/detail?url=http://news-at.zhihu.com/api/4/news/9525457",
          "date": "2017-07-17"
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
          <ArticlesList data={data} />  
        </Drawer>

      </div>
    );
  }
}
export default App;
