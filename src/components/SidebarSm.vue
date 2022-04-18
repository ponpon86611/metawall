<template>
	<div class="sidebar-sm-card border bg-light">
		<div class="py-2 px-5">
			<ul class="d-flex justify-content-between">
				<li>
					<router-link :to="{ name: 'PersonalPage' }"
						class="btn bg-white rounded-circle text-decoration-none shadow-none
							d-flex align-items-center justify-content-center p-0">
						<i class="bi bi-house-door fs-5"></i>
					</router-link>
				</li>
				<li>
					<router-link :to="{ name: 'Following' }"
						class="btn bg-white rounded-circle text-decoration-none shadow-none
							d-flex align-items-center justify-content-center p-0">
						<i class="bi bi-bell fs-5"></i>
					</router-link>
				</li>
				<li>
					<router-link :to="{ name: 'ThumbsUp' }"
						class="btn bg-white rounded-circle text-decoration-none shadow-none
							d-flex align-items-center justify-content-center p-0">
						<i class="bi bi-hand-thumbs-up fs-5"></i>
					</router-link>
				</li>
				<li>
					<router-link :to="{ name: 'Post' }"
						class="btn btn-primary rounded-circle text-decoration-none shadow-none
							d-flex align-items-center justify-content-center p-0">
						<i class="bi bi-plus-circle fs-5"></i>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: 'SidebarSm',
	data() {
		return {};
	},
	methods: {}
};
</script>

<style lang="scss" scoped>
	.sidebar-sm-card {
		position: fixed;
		z-index: 2000;
		bottom: 1rem;
		left: 1rem;
		right: 1rem;
		border-radius: 2rem;
		.btn {
			width: 3rem;
			height: 3rem;
		}
	}
</style>
