import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/home/Home.vue';
import store from '../store/index';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		meta: {
			requiresUnAuth: true
		}
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('../views/About.vue')
	},
	{
		path: '/register',
		name: 'Register',
		component: () => import('../views/auth/Register.vue'),
		meta: {
			requiresUnAuth: true
		}
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('../views/auth/Login.vue'),
		meta: {
			requiresUnAuth: true
		}
	},
	{
		path: '/forgotpassword',
		name: 'ForgetPassword',
		component: () => import('../views/auth/ForgotPassword.vue'),
		meta: {
			requiresUnAuth: true
		}
	},
	{
		path: '/profile',
		name: 'Profile',
		component: () => import('../views/auth/Profile.vue'),
		meta: {
			requiresAuth: true
		}
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

router.beforeEach((to, from, next) => {
	if (to.meta.requiresAuth && !store.getters.isLoggedIn) {
		// console.log(from.redirectedFrom);
		next('/login');
	} else if (to.meta.requiresUnAuth && store.getters.isLoggedIn) {
		// console.log(from.redirectedFrom);
		next('/profile');
	} else {
		// console.log(from.redirectedFrom);
		next();
	}
});

export default router;
