import '@tarojs/async-await';
import action from './utils/action';
import Taro, { Component } from '@tarojs/taro';
import Index from './routes/blog';
import dva from './dva';
import models from './models';
import { Provider } from '@tarojs/redux';

import './index.scss';

const dvaApp = dva.createApp({
  initialState: {},
  models: models,
  onError(e, dispatch) {
    dispatch(action('sys/error', e));
  },
});
const store = dvaApp.getStore();

class App extends Component {
  config = {
    pages: [
	    'routes/hola/index',
      'routes/blog/index',
      'routes/projects/index',
      'routes/me/index',
      'routes/answer/answer',
      'routes/question/question',
    ],
    window: {
	    navigationBarTitleText      : 'CanisMinor',
	    navigationBarTextStyle      : 'black',
	    backgroundTextStyle         : 'light',
	    navigationBarBackgroundColor: '#fff',
	    backgroundColor: '#f8f8f8',
	    enablePullDownRefresh       : false
    },
    tabBar: {
	    color          : '#c1c1c1',
	    selectedColor  : '#222',
	    borderStyle    : 'white',
	    backgroundColor: '#fff',
	    list           :[
		    {
			    pagePath        : 'routes/hola/index',
			    text            : 'Hola',
			    iconPath        : './asset/tabbar/hola.png',
			    selectedIconPath: './asset/tabbar/hola-active.png'
		    },		{
			    pagePath        : 'routes/blog/index',
			    text            : 'Blog',
			    iconPath        : './asset/tabbar/blog.png',
			    selectedIconPath: './asset/tabbar/blog-active.png'
		    },
		    {
			    pagePath        : 'routes/projects/index',
			    text            : 'Projects',
			    iconPath        : './asset/tabbar/projects.png',
			    selectedIconPath: './asset/tabbar/projects-active.png'
		    },
		    {
			    pagePath        : 'routes/me/index',
			    text            : 'Me',
			    iconPath        : './asset/tabbar/resume.png',
			    selectedIconPath: './asset/tabbar/resume-active.png'
		    }
	    ]
    },
  };

  componentDidMount() {
    dvaApp.dispatch({ type: 'sys/test' });
  }

  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}

Taro.render(dvaApp.start(<App />), document.getElementById('app'));
