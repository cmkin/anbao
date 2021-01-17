import Vue from 'vue'
import vueRouter from 'vue-router'
Vue.use(vueRouter)

const routes = [{
		path: '',
		redirect: '/play'
	},
	{
		path: '/index',
		component: () => import('_v/index/index'),
		meta: {
			title: "首页",
			noCheak: true
		},
		children: [
			/* {
						path: '',
						redirect: 'index'
					},
					{
						path: 'index',
						component: () => import('_v/index/index'),
						
					}, */
		]
	}, {
		path: '/play',
		component: () => import('_v/play/index'),
		meta: {
			title: "",
			noCheak: true
		},
	},

	{
		path: '/invitation',
		component: () => import('_v/invitation/index'),
		meta: {
			title: "",
			noCheak: true
		},
	},



]


const router = new vueRouter({
	routes,
	scrollBehavior(to, from, savedPosition) {
		return {
			x: 0,
			y: 0
		}
	}
})



export default router
