import { wx, api } from '../utils';

export default {
  namespace: 'blog',

  state: {
    blogToc: [],
    blogPage: {},
  },

  reducers: {
    queryBlogTocSuccess(state, action) {
      const blogToc = action.payload.Data;
      return { ...state, blogToc };
    },
    queryBlogPageSuccess(state, action) {
      const blogPage = action.payload.Data;
      return { ...state, blogPage };
    },
  },

  effects: {
    *queryBlogToc(action, { call, put }) {
      wx.showLoading({ title: 'Loading' });
      try {
        const Data = yield call(api.queryBlogToc);
        wx.hideLoading();

        yield put({ type: 'queryBlogTocSuccess', payload: { Data } });
      } catch (e) {
        wx.hideLoading();

        console.log('data error', e);
      }
    },
    *queryBlogPage(action, { call, put }) {
      wx.showLoading({ title: 'Loading' });
      try {
        const Data = yield call(() => api.queryBlogPage(action.path));
        wx.hideLoading();

        yield put({ type: 'queryBlogPageSuccess', payload: { Data } });
      } catch (e) {
        wx.hideLoading();

        console.log('data error', e);
      }
    },
  },
};
