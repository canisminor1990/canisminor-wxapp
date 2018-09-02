import request from '../utils/request';

export default {
  namespace: 'blog',
  state: {},
  reducers: {
    save(state, action) {
      const { page, data } = action.payload;
      state[page] = data.data;
      return state;
    },
  },
  effects: {
    *get(action, { call, put }) {
      const page = action.payload;
      const data = yield call(() => request(`https://canisminor.cc/v2/blog/toc?page=${page}`));
      yield put({
        type: 'save',
        payload: { page, data },
      });
    },
  },
};
