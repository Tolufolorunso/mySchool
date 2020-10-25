export default {
	setUser(state, payload) {
		state.token = payload.token;
		state.user = payload.user;
		state.loading = false;
		state.error = null;
	},
	register_success(state) {
		state.loading = false;
		state.token = '';
		state.user = '';
		state.error = null;
		state.registrationSuccess = true;
	},
	auth_error(state, payload) {
		localStorage.removeItem('token');
		state.error = payload;
		state.token = '';
		state.user = '';
		state.loading = false;
	},
	clear_error(state) {
		state.error = null;
	},
	register_error(state, payload) {
		state.registerError = payload;
	},
	forgotpassword_error(state, payload) {
		state.loading = false;
		state.error = payload;
	},
	logout(state) {
		state.token = '';
		state.user = '';
		state.status = '';
	}
};
