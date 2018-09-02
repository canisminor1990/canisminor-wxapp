import request from '../utils/request';
import queryString from 'query-string';

export default {
  namespace: 'mail',
  state: {
    id: '',
  },
  reducers: {
    save(state, action) {
      state = action.payload;
      return state;
    },
  },
  effects: {
    *get(action, { call, put }) {
      const { subject, text } = action.payload;
      const Query = queryString.stringify({ subject, text });
      const data = yield call(() =>
        request(['https://canisminor.cc/v2/mail', Query].join('?'), {
          method: 'POST',
          credentials: 'include',
        })
      );
      yield put({
        type: 'save',
        payload: data.data,
      });
    },
  },
};
