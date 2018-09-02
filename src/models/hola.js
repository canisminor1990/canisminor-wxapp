import request from '../utils/request';
import DataCash from '../utils/dataCash';

const Cash = new DataCash('hola');

export default {
  namespace: 'hola',
  state: {},
  reducers: {
    save(state, action) {
      state = action.payload;
      return state;
    },
  },
  effects: {
    *get(action, { call, put }) {
      let data;
      const local = Cash.get();
      if (local) {
        data = local;
      } else {
        const data = yield call(() => request(`https://canisminor.cc/v2/hola`));
        Cash.set(data);
      }
      yield put({
        type: 'save',
        payload: data,
      });
    },
  },
};
