import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	base: '/',
	routes: [
		{
			path: '/',
			component: () => import('./views/client/Index.vue')
		},

		{
			path: '/login',
			name: 'login',
			component: () => import('./views/auth/Login.vue')
		},
		{
			path: '/register',
			name: 'register',
			component: () => import('./views/auth/Register.vue')
		},

		{
			path: '/admin',
			name: 'admin',
			redirect: '/admin/login',
			component: () => import('./views/admin/Index.vue'),
			children: [
				{
					path: 'login',
					name: 'admin-login',
					component: () => import('./views/auth/Login.vue')
				},
				{
					path: 'register',
					name: 'admin-register',
					component: () => import('./views/auth/Register.vue')
				},
			]
		}
	]
})

export default router