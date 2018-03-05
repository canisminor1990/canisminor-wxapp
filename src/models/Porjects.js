import { wx, api } from '../utils';

export default {
  namespace: 'projects',

  state: {
    projects: [],
  },

  reducers: {
    queryProjectsSuccess(state, action) {
      const projects = action.payload.Data;
      return projects;
    },
  },

  effects: {
    *queryProjects(action, { call, put }) {
      wx.showLoading({ title: 'Loading' });
      try {
        const Data = yield call(api.queryProjects);
        wx.hideLoading();

        yield put({ type: 'queryProjectsSuccess', payload: { Data } });
      } catch (e) {
        wx.hideLoading();

        console.log('data error', e);
      }
    },
  },
};
