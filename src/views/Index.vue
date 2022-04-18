<template>
	<div id="main-container" class="main-container">
		<TheNavbar></TheNavbar>
		<div class="content px-3 px-md-0 py-3 py-md-5">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Template',
	components: {
		TheNavbar: () => import('@layout/TheNavbar.vue')
	},
	data() {
		return {};
	}
};
</script>

<style lang="scss" scoped>
	.content {
		margin-top: $navbar-height;
		margin-bottom: $navbar-height;
		@include window-width;
	}
</style>
