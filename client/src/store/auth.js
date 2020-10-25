import axios from 'axios';
import router from '../router/index';

const state = () => {
	return {
		token: localStorage.getItem('token') || '',
		user: {},
		status: ''
	};
};

const getters = {
	isLoggedIn: function(state) {
		if (state.token != '') {
			return true;
		} else {
			return false;
		}
	},
	// isLoggedIn: state => !!state.token,
	authState: state => state.status,
	user: state => state.user
};

const actions = {
	// Login action
	async login({ commit }, user) {
		commit('auth_request');
		let res = await axios.post('http://localhost:5000/api/v1/auth/login', user);

		if (res.data.success) {
			const token = res.data.token;
			const user = res.data.user;
			// Store the token to localstorage
			localStorage.setItem('token', token);
			// set the axios default
			axios.defaults.headers.common['Authorization'] = token;

			commit('auth_success', token, user);
		}
		return res;
	},
	// Register action
	async register({ commit }, user) {
		commit('auth_request');
		let res = await axios.post(
			'http://localhost:5000/api/v1/auth/register',
			user
		);
		if (res.data.success) {
			commit('register_success');
		}
		return res;
	},

	// Logout user
	async logout({ commit }) {
		await localStorage.removeItem('token');
		commit('logout');
		delete axios.defaults.headers.common['Authorization'];
		router.push('/login');
		return;
	}
};
const mutations = {
	auth_request(state) {
		state.status = 'loading';
	},
	auth_success(state, token, user) {
		state.token = token;
		state.user = user;
		state.status = 'success';
	},
	register_success(state) {
		state.loading = 'success';
	},
	logout() {
		state.token = '';
		state.user = '';
		state.status = '';
	}
};

export default {
	state,
	actions,
	mutations,
	getters
};
