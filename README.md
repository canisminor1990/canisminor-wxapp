# CanisMinor WxApp

<br />
<a href="https://canisminor.cc">
<img src="http://qn.canisminor.cc/2018-02-11-icon-1.png" width="120" />
</a>
<br />

[![](https://img.shields.io/github/release/canisminor1990/canisminor-wxapp.svg)](https://github.com/canisminor1990/canisminor-wxapp)

使用 `webpack`, `dva`, 开发的微信小程序 Blog.

## Intro

* 支持引用 `node_modules` 模块
* 使用 `jsx` 编写小程序 `json` 配置文件
* 支持通过配置 `alias` 来避免 `../../../` 之类的模块引用
* 通过 `babel` 支持更丰富的 `ES6` 兼容，包括 `async/await`
* 内置 `promise` 和 `lodash`（`lodash` 按需引入相应模块，不会全部引入）
* 使用 `scss` 编写 `.wxss` 文件
* 提供 `__DEV__` 和 `process.env.NODE_ENV` 全局常量辅助开发
* 支持在 `production` 环境下压缩代码
* 引入 `dva-core`，可在小程序环境下欢乐的使用 `redux`

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

## Link

* [wxml-loader](https://github.com/Cap32/wxml-loader)
* [wxapp-webpack-plugin](https://github.com/Cap32/wxapp-webpack-plugin)
* [wxapp-boilerplate](https://github.com/cantonjs/wxapp-boilerplate)
* [dva-core](https://github.com/dvajs/dva-core)
* [dva](https://github.com/dvajs/dva)
