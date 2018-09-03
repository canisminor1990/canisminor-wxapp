import request from '../utils/request';
import action from '../utils/action';

export default {
  namespace: 'posts',
  state: {},
  reducers: {
    save(state, {payload}) {
	    return { ...state, ...payload };
    },
  },
  effects: {
    *get({payload}, { call, put }) {
	    const data = yield call(request, {
		    url: `https://canisminor.cc/v2/blog/posts/${payload}`,
	    });
	    yield put(action('save', data));
    },
  },
};
