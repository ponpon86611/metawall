<template>
	<div class="sidebar-card card rounded-0">
		<div class="card-body p-4">
			<router-link :to="{ name: 'Post' }" class="btn btn-primary text-decoration-none w-100">
				張貼動態
			</router-link>
			<ul class="mt-4 ms-2">
				<li class="mb-3 fw-bold">
					<router-link :to="{ name: 'PersonalPage' }" class="link d-flex align-items-center text-decoration-none">
						<img src="~@/assets/img/user-head.png" alt="head" class="info-icon rounded-circle d-block me-3">
						邊緣小杰
					</router-link>
				</li>
				<li class="mb-3 fw-bold">
					<router-link :to="{ name: 'Following' }" class="link d-flex align-items-center text-decoration-none">
						<div class="info-icon rounded-circle border me-3 d-flex align-items-center justify-content-center">
							<i class="bi bi-bell fs-5"></i>
						</div>
						追蹤名單
					</router-link>
				</li>
				<li class="mb-3 fw-bold">
					<router-link :to="{ name: 'ThumbsUp' }" class="link d-flex align-items-center text-decoration-none">
						<div class="info-icon rounded-circle border me-3 d-flex align-items-center justify-content-center">
							<i class="bi bi-hand-thumbs-up fs-5"></i>
						</div>
						我按讚的文章
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Sidebar',
	data() {
		return {};
	},
	methods: {}
};
</script>

<style lang="scss" scoped>
	.sidebar-card {
		.link:hover {
			.info-icon {
				background-color: $primary;
				color: white;
			}
		}
		.info-icon {
			width: 50px;
			height: 50px;
			background-color: #E2EDFA;
		}
	}
</style>
