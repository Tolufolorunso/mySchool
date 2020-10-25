import axios from 'axios';
// import router from '../../../router/index';

export default {
	// Login action
	async login({ commit }, payload) {
		try {
			const res = await axios.post(
				'http://localhost:5000/api/v1/auth/login',
				payload
			);
			if (res.data.success) {
				const token = res.data.token;
				const user = res.data.user;
				// Store the token to localstorage
				localStorage.setItem('token', token);
				// set the axios default
				axios.defaults.headers.common['Authorization'] = token;
				commit('setUser', {
					token,
					user
				});
			}
			return res;
		} catch (error) {
			commit('auth_error', error.response.data);
		}
	},

	// Register action
	async register({ commit }, payload) {
		try {
			const res = await axios.post(
				'http://localhost:5000/api/v1/auth/register',
				payload
			);
			if (res.data.success) {
				commit('register_success');
				return true;
			}
		} catch (error) {
			commit('auth_error', error.response.data);
		}
	},
	// forgotPassword
	async forgotpassword({ commit }, payload) {
		try {
			const res = await axios.post(
				'http://localhost:5000/api/v1/auth/forgotpassword',
				payload
			);
			console.log(res);
			if (res.data.success) {
				commit('register_success');
				return true;
			}
		} catch (error) {
			commit('forgotpassword_error', error.response.data);
		}
	},

	// get user
	async getUser({ commit }) {
		const token = localStorage.getItem('token');
		const res = await axios.get('http://localhost:5000/api/v1/auth', {
			headers: {
				Authorization: 'Bearer ' + token
			}
		});
		if (res.data.success) {
			commit('register_success');
		}
		return res;
	},

	// Clear
	async clearError({ commit }) {
		commit('clear_error');
		return;
	},

	// Logout user
	async logout({ commit }) {
		await localStorage.removeItem('token');
		commit('logout');
		delete axios.defaults.headers.common['Authorization'];
		return;
	}
};
