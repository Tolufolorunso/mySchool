import { createStore } from 'vuex';
// import authModule from './auth';
import authModule from './modules/auth/index';

export default createStore({
	modules: {
		auth: authModule
	}
});
