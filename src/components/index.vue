<template>
	<div>
	<!-- header -->
	<component-header></component-header>
	<!-- product -->
	<component-product></component-product>
	</div>
</template>
<script>
	import cardHeader from './header.vue';
	import products from './product/products.vue';
	export default  {
		data() {
			return {}
		},
		components: {
			'component-header': cardHeader,
			'component-product': products,
		}
	}
</script>