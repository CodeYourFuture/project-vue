require('./style/reset.css');

import Vue from 'vue'

import indexComponent from './components/index.vue'
import cardHeader from './components/header.vue'
import products from './components/product/products.vue'

const vm = new Vue({
	el: '#app',
	components: {
		'index': indexComponent,
		'component-header': cardHeader,
		'component-product': products,
	}
});