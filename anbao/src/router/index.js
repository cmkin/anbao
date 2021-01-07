import Vue from 'vue'
import vueRouter from 'vue-router'
Vue.use(vueRouter)

const routes = [{
	path: '',
	component: () => import('_c/main/index'),
	children: [{
			path: '',
			redirect: 'index'
		},
		{
			path: 'index',
			component: () => import('_v/index/index'),
			meta: {
				title: "首页",
				noCheak: true
			}
		},
	]
}]


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
