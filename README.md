# CanisMinor WxApp 2.0

![](http://qn.canisminor.cc/2018-09-06-wx-l.png)

![auto](https://img.shields.io/github/release/canisminor1990/canisminor-wxapp.svg)

随着前几天的个网 2.0 改版，因为重构了前端和后端导致之前的微信小程序使用的很多旧接口已不再维护，所以抽了 2 天时间把微信小程序从头到尾连 UI 到框架都重写了一遍（🌚 设计师开发的好处就是可以不画设计稿直接开写...）。年初找类 React 框架的时候，只发现了食之无味弃之可惜的 weact，但是繁琐的编译流程和相对糟糕的开发体验最终没有列入 1.0 的选择范围，但这次在选框架的时候 **Taro** 就冒了出来 🤩。

**Taro** 是由京东·凹凸实验室团队开发，语法规则基于 React 规范，它采用与 React 一致的组件化思想，组件生命周期与 React 保持一致，同时在书写体验上也尽量与 React 类似，支持使用 JSX 语法，让代码具有更丰富的表现力，必须再在 js / wxss / wxml / json 文件中来回切换。同时也拥有了更优美的命名规范和项目结构，微信文档中的各种命名规范 ( 驼峰、小写中划线、小写连写 )，惨不忍睹 🙃。

作为一个 **Reacter**，那么用 Taro 来开发项目的简直可以用丝滑柔顺来形容，正如 Taro 自己所说的，只需要写一个版本的代码，就可以编译生成 H5、微信小程序以及 RN 的代码，在效率上确实会有所提升。但是如果是没有写过 react 项目的，那么可能最开始还是有学习成本。

#### 代码示例

```js
import Taro, { Component } from "@tarojs/taro";
import { View, Button } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import "./index.scss";

@connect(({ home, loading }) => ({
  ...home,
  loading: loading.effects["home/get"]
}))
export default class extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      title: "首页",
      list: [1, 2, 3]
    };
  }

  config = {
    navigationBarTitleText: "Home"
  };

  componentWillMount() {}

  componentDidMount = () => {
    this.props.dispatch(action("home/get"));
  };

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  onShareAppMessage = () => {
    return {
      title: "Home",
      path: "routes/home/index"
    };
  };

  onClick = str => {
    // dosth
  };

  render() {
    return (
      <View className="index">
        <View className="title">{this.state.title}</View>
        <View className="content">
          {this.state.list.map(item => (
            <View className="item">{item}</View>
          ))}
          <Button className="add" onClick={this.onClick.bind(this, "str")}>
            添加
          </Button>
        </View>
      </View>
    );
  }
}
```

## Intro

- 支持使用 `npm` / `yarn` 安装管理第三方依赖。
- 支持使用 `ES7` / `ES8` 甚至更加新的 ES 规范，一切都可自行配置。
- 使用 `prettier` 进行代码格式管理。
- 支持使用 `CSS` 预编译器，如 `SASS / LESS / postCSS` 等。
- 支持使用 `Dva` / `Redux` 进行状态管理。
- 小程序 `API`优化，异步 `API Promise` 化等等。
- 使用 `remarkable` 提供完整 `markdown` 解析方案。
- 所有外链自动转换为 `Qrcode` 并将连接复制到剪切板。
- 因为个人开发者不支持 `video` 也自动转为 `Qrcode` 。

## Preview

![](http://qn.canisminor.cc/2018-09-06-wxapp.png)

#### Extra

![](http://qn.canisminor.cc/2018-09-06-wxapp-2.png)

## Dev

**Github Repo:** <https://github.com/canisminor1990/canisminor-wxapp>

#### 使用 npm 或者 yarn 全局安装

```bash
$ npm install -g @tarojs/cli
# or
$ yarn global add @tarojs/cli
```

#### 使用 npm 或者 yarn 安装依赖

```bash
$ npm install
# or
$ yarn
```

#### 启动 / 编译小程序

```bash
# dev + watch
$ yarn start

# build + opt
$ yarn build
```

> 使用小程序开发工具打开 dist 目录

#### 项目结构

```
+ src
  + components
  	+ Card
  	  - index.js
  	  - index.scss
  	...
  + models
  	- hola.js
  	...
  + routes
    + hola
      - index.js
      - index.scss
    ...
  + styles
  	- var.scss
  	...
  + utils
    - request.js
    ...
  - app.js
  - dva.js
  - index.scss
  - index.html
+ public
  - assets.png
  ...
- project.config.json
- package.json
```

## Link

<img src="http://qn.canisminor.cc/2018-09-05-wx-qrcode.png" width="200" />

<br />

- **Taro:**
  - [Repo](https://github.com/NervJS/taro)
  - [文档](https://nervjs.github.io/taro/config-detail.html)
- **WxApp:**
  - [框架](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/MINA.html)
  - [组件](https://mp.weixin.qq.com/debug/wxadoc/dev/component/)
  - [API](https://mp.weixin.qq.com/debug/wxadoc/dev/api/)
  - [开发者工具](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html)
