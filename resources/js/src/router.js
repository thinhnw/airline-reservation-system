import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: '/',
    routes: [
        {
            path: '/',
            component: () => import('./views/client/Index.vue'),
            redirect: '/home',
            children: [
                {
                    path: 'home',
                    name: 'home',
                    component: () => import('./views/client/home/Home.vue')
                },
                {
                    path: 'profile',
                    name: 'profile',
                    component: () => import('./views/client/profile/Profile.vue'),
                    beforeEnter: (to, from, next) => {
                        console.log(store.getters['auth/isLogged'])
                        if (store.getters['auth/isLogged']) next()
                        else next({name: 'login'})
                    }
                },
                {
                    path: 'checkout',
                    name: 'checkout',
                    component: () => import('./views/client/checkout/Checkout.vue'),
                    beforeEnter: (to, from, next) => {
                        console.log(store.getters['auth/isLogged'])
                        if (store.getters['auth/isLogged']) next()
                        else next({name: 'login'})
                    },
                },
                {
                    path: 'checkout-success',
                    name: 'checkout-success',
                    component: () => import('./views/client/checkout/CheckoutSuccess.vue'),
                    beforeEnter: (to, from, next) => {
                        console.log(store.getters['auth/isLogged'])
                        if (store.getters['auth/isLogged']) next()
                        else next({name: 'home'})
                    },
                },
                {
                    path: 'information/edit',
                    name: 'user-edit',
                    component: () => import('./views/client/user_information/UserEditInformation.vue')
                },
                {
                    path: '/contact-us',
                    name: 'contact-us',
                    component: () => import('./views/client/contact-us/ContactUs'),

                },
                {
                    path: '/about-us',
                    name: 'about-us',
                    component: () => import('./views/client/about-us/AboutUs'),

                },
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('./views/auth/Login.vue'),
            beforeEnter: (to, from, next) => {
                if (!store.getters['auth/isLogged']) next()
                else next({name: 'home'})
            }
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('./views/auth/Register.vue'),
            beforeEnter: (to, from, next) => {
                if (!store.getters['auth/isLogged']) next()
                else next({name: 'home'})
            }
        },
        {
            path: '/admin',
            name: 'admin',
            component: () => import('./views/admin/Index.vue'),
            children: [
                {
                    path: 'dashboard',
                    name: 'admin-dashboard',
                    component: () => import('./views/admin/dashboard/Dashboard.vue')
                },
                {
                    path: 'reservations',
                    name: 'admin-reservations',
                    component: () => import('./views/admin/reservations/Reservations.vue')
                },
                {
                    path: 'flights',
                    name: 'admin-flights',
                    component: () => import('./views/admin/flights/Flights.vue')
                },
                {
                    path: 'airports',
                    name: 'admin-airports',
                    component: () => import('./views/admin/airports/Airports.vue')
                },
                {
                    path: 'user',
                    name: 'admin-user',
                    component: () => import('./views/admin/user/User.vue')
                },
                {
                    path: 'customer-feedback',
                    name: 'customer-feedback',
                    component: () => import('./views/admin/customer_feedback/CustomerFeedback.vue')
                },
			]
		},
		{
			path: '/errors/not-authorized',
			name: 'errors-not-authorized',
			component: () => import('./views/errors/NotAuthorized.vue')
		}
	]
})


export default router
