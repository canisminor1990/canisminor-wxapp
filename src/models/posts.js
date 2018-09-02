import request from '../utils/request';

export default {
  namespace: 'posts',
  state: {},
  reducers: {
    save(state, action) {
      state = action.payload.data;
      return state;
    },
  },
  effects: {
    *get(action, { call, put }) {
      const id = action.payload;
      const data = yield call(() => request(`https://canisminor.cc/v2/blog/posts/${id}`));
      yield put({
        type: 'save',
        payload: data,
      });
    },
  },
};
