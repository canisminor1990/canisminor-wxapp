import request from '../utils/request';
import _ from 'lodash';
import DataCash from '../utils/dataCash';

const Cash = new DataCash('github', 24 * 60 * 60 * 1000);

export default {
  namespace: 'github',
  state: [],
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
        const raw = yield call(() =>
          request('https://github-contributions-api.now.sh/v1/canisminor1990')
        );
        const Contributions = _.get(raw, 'data.contributions');
        data = handleData(Contributions);
        Cash.set(data);
      }
      yield put({
        type: 'save',
        payload: data,
      });
    },
  },
};

function handleData(raw) {
  let date = [];
  let start = false;
  _.forEach(raw, item => {
    if (!start) {
      if (item.count > 0) {
        start = true;
      } else {
        return;
      }
    }
    if (date.length < 7 * 52) date.push(item);
  });
  date = date.reverse();
  const group = [];
  let count = -1;
  _.forEach(date, (item, i) => {
    if (i % 7 === 0) count++;
    if (!group[count]) group[count] = [];
    group[count].push(item);
  });
  return group;
}
