import actions from './actions';
import mutations from './mutations';
import getters from './getters';

export default {
	state() {
		return {
			token: localStorage.getItem('token') || '',
			user: {},
			error: null,
			loading: true,
			registrationSuccess: false
		};
	},
	mutations,
	actions,
	getters
};
