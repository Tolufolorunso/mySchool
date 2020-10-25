export default {
	isLoggedIn: function(state) {
		if (state.token != '') {
			return true;
		} else {
			return false;
		}
	},
	// isLoggedIn: state => !!state.token,
	authLoading: state => state.loading,
	registrationSuccess: state => state.registrationSuccess,
	user: state => state.user,
	error: state => state.error,
	registerError: state => state.registerError
};
