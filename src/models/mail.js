import request from '../utils/request';
import queryString from 'query-string';
import action from '../utils/action';

export default {
  namespace: 'mail',
  state: {
    id: '',
  },
  reducers: {
    save(state, { payload }) {
      return { ...action, ...payload };
    },
  },
  effects: {
    *get({ payload }, { call, put }) {
      const { subject, text } = payload;
      const Query = queryString.stringify({ subject, text });
      const data = yield call(() =>
        request({
          url: ['https://canisminor.cc/v2/mail', Query].join('?'),
          method: 'POST',
          credentials: 'include',
        })
      );
      yield put(action('save', data));
    },
  },
};
