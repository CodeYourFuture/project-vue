<template>
	<section class="products">
		<card-product v-for="product in products"
					  :product="product"></card-product>
	</section>
</template>

<style scoped>
	.products{width: 1200px; margin: 30px auto; font-size: 0;}
</style>

<script>
	import product from './card-product.vue'
	export default  {
		data() {
			return {
				products: [
					{
						tag : '出境游',
						name: '欧洲14国1日游',
					},
					{
						tag : '自由行',
						name: '南极40年游',
					},
					{
						tag : '出境游',
						name: '欧洲14国1日游',
					},
					{
						tag : '自由行',
						name: '南极40年游',
					},
					{
						tag : '出境游',
						name: '欧洲14国1日游',
					},
					{
						tag : '自由行',
						name: '南极40年游',
					},
					{
						tag : '出境游',
						name: '欧洲14国1日游',
					},
					{
						tag : '自由行',
						name: '南极40年游',
					},
					{
						tag : '出境游',
						name: '欧洲14国1日游',
					},
					{
						tag : '自由行',
						name: '南极40年游',
					},
				]
			}
		},
		components: {
			'card-product': product
		}
	}
</script>