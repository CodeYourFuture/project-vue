<template>
	<div class="card-product">
	{{ product.tag }}
	</div>
</template>

<style scoped>
	.card-product{width: 200px; height: 150px; margin: 20px; border: 1px solid #eee;}
</style>

<script>
	export default  {
		props: ['product'],
		data() {
			return {}
		}
	}
</script>