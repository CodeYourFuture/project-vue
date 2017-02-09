import Vue from 'vue'

import indexComponent from './../components/index.vue'
import cardHeader from './../components/header.vue'

const vm = new Vue({
	el: '#app',
	components: {
		'index': indexComponent,
		'card-header': cardHeader,
	}
});