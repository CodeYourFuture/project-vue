<template>
	<div class="card-product">
		<img src="./../../assets/product/pro.jpg">
		<p>{{ product.tag }}</p>
		<p>{{ product.name }}</p>
	</div>
</template>

<style scoped>
	.card-product{display: inline-block; width: 250px; height: 150px; margin: 20px; border: 1px solid #eee; font-size: 14px;}
</style>

<script>
	export default  {
		props: ['product'],
		data() {
			return {}
		}
	}
</script>