import { wx } from '../utils';

export default {
  namespace: 'app',

  state: {
    userInfo: {},
  },

  reducers: {
    getSysInfoSuccess(state, action) {
      const sysInfo = action.payload;
      return { ...state, sysInfo };
    },
  },

  effects: {
    *getSysInfo(action, { call, put }) {
      const sysInfo = yield call(wx.getSystemInfo);
      yield put({ type: 'getSysInfoSuccess', payload: sysInfo });
    },

    *init(action, { all, put }) {
      yield all([put({ type: 'getSysInfo' }), put({ type: 'data/queryData' })]);
    },
  },
};
