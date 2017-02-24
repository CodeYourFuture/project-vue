<template>
	<div class="main-panel">
		<div class="panel-cover"></div>
	</div>
</template>
<style scoped>
	.main-panel { position: relative; background: url('../assets/img/0204.jpg') no-repeat #666; background-size: cover; height: 100%; width: 100%; }
	.main-panel .panel-cover { position: absolute; left: 0; right: 0; top: 0; bottom: 0; background-color: rgba(68, 68, 68, 0.2); background-image: linear-gradient(140deg,rgba(68, 68, 68, 0.6) 20%, rgba(0, 0, 0, 0.9));  }
</style>
<script>
	require('../assets/style/reset.css');
	require('../assets/style/index.css');
	export default  {
		data() {
			return {
				title: '杨伦宾',
				subTitle: '文不能测字，武不能防身',
				links: [
					{
						name: '首页',
						link: 'blog'
					},
					{
						name: '关于我',
						link: 'about'
					},
					{
						name: '归档',
						link: 'archive'
					}
				]
			}
		}
	}
</script>