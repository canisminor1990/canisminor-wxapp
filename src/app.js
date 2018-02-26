import * as core from 'dva-core';
import createLogger from 'redux-logger';
import createLoading from 'dva-loading';
import modelRoot from './models/Root.js';
import modelIntro from './models/Intro.js';

// 创建app
const dvapp = core.create(
  { initialReducer: {} },
  {
    setupMiddlewares(middlewares) {
      return [
        ...middlewares,
        createLogger({
          predicate: (getState, action) =>
            action.type !== '@@DVA_LOADING/HIDE' && action.type !== '@@DVA_LOADING/SHOW',
          duration: true,
          collapsed: true,
          timestamp: true,
        }),
      ];
    },
  }
);

// 加载model
dvapp.model(modelRoot);
dvapp.model(modelIntro);

// 加载plugin
dvapp.use(createLoading({ effects: true }));

// 启动app
dvapp.start();

// 初始化App()
const config = {
  ...dvapp,
  onLaunch() {
    dvapp._store.dispatch({ type: 'app/init' });
  },
};

App(config);
