import { wx, api } from '../utils';

export default {
  namespace: 'data',

  state: {},

  reducers: {
    queryDataSuccess(state, action) {
      const { Data } = action.payload;
      return Data;
    },
  },

  effects: {
    *queryData(action, { call, put }) {
      wx.showLoading({ title: 'Loading' });
      try {
        const Data = yield call(api.queryData);
        wx.hideLoading();

        yield put({ type: 'queryDataSuccess', payload: { Data } });
      } catch (e) {
        wx.hideLoading();

        console.log('data error', e);
      }
    },
  },
};
