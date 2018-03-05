# CanisMinor WxApp

<br />
<img src="https://github.com/canisminor1990/canisminor-wxapp/blob/master/lib/qrcode.png?raw=true" width="240" />
<br />

[![](https://img.shields.io/github/release/canisminor1990/canisminor-wxapp.svg)](https://github.com/canisminor1990/canisminor-wxapp)

使用 `webpack`, `dva`, `babel`开发的微信小程序 Blog. [🔗Read More](https://canisminor.cc/blog/20180305104744_wxapp)

## Intro

* 支持引用 `node_modules` 模块
* 使用 `jsx` 编写小程序 `json` 配置文件
* 使用 `scss` 编写 `.wxss` 文件
* 长度单位使用 `postcss` 自动转为 `rem` 拒绝奇怪的 `rpx`
* 支持通过配置 `alias` 来避免 `../../../` 之类的模块引用
* 通过 `babel` 支持更丰富的 `ES6` 兼容，包括 `async/await`
* 内置 `promise` 和 `lodash`（`lodash` 按需引入相应模块，不会全部引入）
* 提供 `__DEV__` 和 `process.env.NODE_ENV` 全局常量辅助开发
* 支持在 `production` 环境下压缩代码
* 引入 `dva-core`，可在小程序环境下欢乐的使用 `redux`
* 完整 `markdown` 解析方案
* 所有外链自动转换为 `qrcode`

## Preview

![](https://github.com/canisminor1990/canisminor-wxapp/blob/master/lib/preview.png?raw=true)

## Dev

```bash
# dev --watch
$ yarn start

# build --opt
$ yarn build
```

### 文件结构

```
+ components
  + component
	  - index.jsx
	  - index.js
	  - index.scss
	  - index.wxml
	...
+ routes
  + route
	  - index.jsx
	  - index.js
	  - index.scss
	  - index.wxml
	...
+ styles
	- ...import.scss
+ img
+ models
+ utils
- app.jsx
- app.js
- app.scss
```

## WxApp

* [wxa 框架](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/MINA.html)
* [wxa 组件](https://mp.weixin.qq.com/debug/wxadoc/dev/component/)
* [wxa api](https://mp.weixin.qq.com/debug/wxadoc/dev/api/)
* [wxa 开发者工具](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html)

## Links

* [wxml-loader](https://github.com/Cap32/wxml-loader)
* [wxapp-webpack-plugin](https://github.com/Cap32/wxapp-webpack-plugin)
* [wxapp-boilerplate](https://github.com/cantonjs/wxapp-boilerplate)
* [dva-core](https://github.com/dvajs/dva-core)
* [dva](https://github.com/dvajs/dva)
* [towxml](https://github.com/sbfkcel/towxml)
