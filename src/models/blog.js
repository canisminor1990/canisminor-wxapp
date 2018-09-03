import request from '../utils/request';
import action from '../utils/action';

export default {
	namespace: 'blog',
	state    : {
		toc:[],
	},
	reducers : {
		save(state, {payload}) {
			const {page, pages, toc} = payload;
			state.page               = page;
			state.pages              = pages;
			state.toc                = [...state.toc, ...toc];
			return state;
		}
	},
	effects  : {
		* get({payload}, {call, put}) {
			const data = yield call(request, {
				url: `https://canisminor.cc/v2/blog/toc?page=${payload}`
			});
			console.log(data);
			yield put(action('save', data));
		}
	}
};
