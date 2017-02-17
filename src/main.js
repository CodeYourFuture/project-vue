require('./style/reset.css');

import Vue from 'vue';
import VueRouter from "vue-router";


import index from './components/index.vue';
import detail from './components/product/product-detail.vue';

Vue.use(VueRouter);
const routers = [
	{ path: '/', name: 'index', component: index },
	{ path: '/detail', name: 'detail', component: detail }
];

const router = new VueRouter({
	routes: routers
});

new Vue({
	router
}).$mount('#app');
