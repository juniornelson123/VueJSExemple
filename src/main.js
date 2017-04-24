import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import MyMenu from './MyMenu.vue'
import Card from './components/Card.vue'
import Buttons from './components/Buttons.vue'


var router = new VueRouter({
	routes: [
		{ path: "/", component: MyMenu },
		{ path: "/cards", component: Card },
		{ path: "/buttons", component: Buttons }
	]
})

Vue.use(VueResource)
Vue.use(VueRouter)

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
