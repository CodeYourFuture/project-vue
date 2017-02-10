<template>
	<section class="products">
		<card-product v-for="product in products"
					  ></card-product>
	</section>
</template>

<style scoped>
	.products{width: 1200px; margin: 30px auto;  border: 1px solid #eee;}
</style>

<script>
	import product from './card-product.vue'
	export default  {
		data() {
			return {
				products: [
					{
						tag : '',
						name: '欧洲14国1日游',
					},
					{
						tag : '',
						name: '欧洲14国1日游',
					},
				]
			}
		},
		components: {
			'card-product': product
		}
	}
</script>