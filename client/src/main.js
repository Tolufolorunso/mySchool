import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import BaseButton from './components/ui/BaseButton.vue';
import BaseSpinner from './components/ui/BaseSpinner.vue';
import BaseAlert from './components/ui/BaseAlert.vue';

import axios from 'axios';

// Load the token from the localStorage

const token = localStorage.getItem('token');
if (token) {
	axios.defaults.headers.common['Authorization'] = token;
}

createApp(App)
	.use(store)
	.use(router)
	.component('base-button', BaseButton)
	.component('base-spinner', BaseSpinner)
	.component('base-alert', BaseAlert)
	.mount('#app');
