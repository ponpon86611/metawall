<template>
	<div class="following-wrap d-flex flex-column">
		<div class="row">
			<div class="col-12 col-md-7">
				<h3 class="title py-3 border bg-white text-center mb-4">我按讚的貼文</h3>
				<div class="rounded-card card mb-3" v-for="item in thumbsUp" :key="item.id">
					<div class="card-body d-flex align-items-center">
						<img :src="getPictureUrl(item.headshot)" class="headshot">
						<div class="d-flex flex-column ms-3">
							<a href="#" class="fw-bold">{{ item.name }}</a>
							<small class="text-black-50">發文時間：{{ item.date }}</small>
						</div>
						<div class="d-flex align-items-center ms-auto me-3">
							<a href="#" class="d-flex flex-column align-items-center me-4">
								<i class="bi bi-hand-thumbs-up text-primary fs-5"></i>
								<small class="text-black fw-bold">取消</small>
							</a>
							<router-link :to="{ name: 'PersonalPage' }" class="d-flex flex-column align-items-center">
								<i class="bi bi-arrow-right-circle text-black fs-5"></i>
								<small class="text-black fw-bold">查看</small>
							</router-link>
						</div>
					</div>
				</div>
			</div>
			<div class="col-12 col-md-5 d-none d-md-block">
				<Sidebar></Sidebar>
			</div>
			<div class="d-md-none">
				<SidebarSm></SidebarSm>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'Following',
	components: {
		Sidebar: () => import('../components/Sidebar.vue'),
		SidebarSm: () => import('../components/SidebarSm.vue')
	},
	data() {
		return {
			thumbsUp: [
				{
					id: 111,
					headshot: 'user-head.png',
					name: '愛爾敏',
					date: '2022/2/22 12:00'
				},
				{
					id: 222,
					headshot: 'user-head.png',
					name: '米卡莎',
					date: '2022/2/11 12:00'
				},
				{
					id: 333,
					headshot: 'user-head.png',
					name: '李維',
					date: '2022/1/22 12:00'
				},
				{
					id: 444,
					headshot: 'user-head.png',
					name: '米歇爾',
					date: '2022/1/14 12:00'
				},
				{
					id: 555,
					headshot: 'user-head.png',
					name: '愛爾敏',
					date: '2022/1/10 12:00'
				}
			]
		};
	},
	methods: {
		getPictureUrl(path) {
			return require(`@/assets/img/${path}`);
		}
	}
};
</script>

<style lang="scss" scoped>
	.following-wrap {
		.title {
			box-shadow: -5px 5px 0 -2px white, -5px 5px 0 0px $black;
		}
		.headshot {
			width: 50px;
			height: 50px;
		}
	}
</style>
