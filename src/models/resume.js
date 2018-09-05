import _ from 'lodash';
import request from '../utils/request';
import DataCash from '../utils/dataCash';
import action from '../utils/action';

const Cash = new DataCash('resume');

export default {
  namespace: 'resume',
  state: {},
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  effects: {
    *get({ payload }, { call, put }) {
      let data;
      const local = Cash.get();
      if (local && _.size(local) > 0) {
        data = local;
      } else {
        data = yield call(request, {
          url: 'https://canisminor.cc/v2/resume',
        });
        Cash.set(data);
      }
      yield put(action('save', data));
    },
  },
};
