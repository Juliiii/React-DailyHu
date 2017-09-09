## 简介

一个可以看到cnode, 知乎，推酷和简书文章的webapp(sina的由于出了点小问题，暂时不提供)

## demo
![1.png](http://okuww23ih.bkt.clouddn.com/1.jpg)
![2.png](http://okuww23ih.bkt.clouddn.com/2.jpg)
![3.png](http://okuww23ih.bkt.clouddn.com/3.jpg)
## 技术栈

+ react
+ redux
+ react-redux
+ react-router
+ axios
+ antd-mobile

## 项目架构

```
- src
  - components # 放无状态组件 
  - pages # 放页面
  - icons # 图标
  - router # 路由
  - store # 状态管理
  - css # 样式
  - utils # 公共方法
  - App.vue
  - index.js # 入口文件
```

## 使用方式
----
####  Step 1
```
git clone git@github.com:Juliiii/React-DailyHu.git
```

####  Step 2
```
npm start
```
## 开发中遇到的问题

+ 在ios和Android真机调试的时候，发现左上角的汉堡按钮在drawer的sideBar显示的时候，ios的是无法被遮住的，而Android和本地调试没有问题。所以就用了一个控制drawer开闭的状态来条件渲染这个button.
+ 使用antd-mobile时要自己配置好高清解决的方案。记住，creat-react-app的webpack配置文件有点奇怪，dev和prod模式的配置文件，有部分是一毛一样的。个人感觉可以像vue-cli那样提取出来，因为避免有的同学配置时，只修改了dev文件，没有同步修改prod文件，打包部署上线的时候，就会发现px并没有转变成rem，整个页面就显得很奇怪。
+ 使用长列表组件时，自己试着写了一次。发现可以使用，但是，无法触发scroll事件，真是奇怪。对比官网的demo一直也找出什么不一样，无奈之下，拷贝demo代码，在上面修改了。建议以后开发时，别自己写了，拷贝下来。在上面基础改。
+ 长列表的onEndReached事件，会无限触发的问题，这个在上拉刷新也会出现。这个解决方法，个人是加了互斥锁。具体怎么实现，大家自己YY。

## 个人感想
PC端网页已经感觉有点烦，移动端其实更烦一点，因为手机上的浏览器太多。开发时就会遇到很多关于样式或者js的坑。例如，懒加载，我在网上找了几个第三方的组件，在pc上是好好的，在手机上就无法工作。由于时间不太充裕也就没有继续深究下去。改天有空自己尝试下。

## License
mit
