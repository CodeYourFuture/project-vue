<template>
	<div class="card-product">
		<a>
			<img class="pro-img" src="./image/pro.jpg">
		</a>
		<p class="tag">{{ product.tag }}</p>
		<a class="pro-name">{{ product.name }}</a>
	</div>
</template>

<style scoped>
	.card-product{display: inline-block; position: relative; width: 250px; height: 240px; margin: 20px; border: 1px solid #eee; font-size: 14px; cursor: pointer;}
	.card-product .pro-img {width: 100%;}
	.card-product .tag {position: absolute; top: 10px; left: 10px; height: 25px;  line-height: 25px; width: 50px; font-size: 12px; color: #fff; background: #30B230; border-radius: 15px; text-align: center;}
	.card-product .pro-name {display: block; padding: 10px; font-size: 14px; color: #333;}
</style>

<script>
	export default  {
		props: ['product'],
		data() {
			return {}
		}
	}
</script>