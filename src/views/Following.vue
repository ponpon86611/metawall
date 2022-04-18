<template>
	<div class="following-wrap d-flex flex-column">
		<div class="row">
			<div class="col-12 col-md-7">
				<h3 class="title py-3 border bg-white text-center mb-4">追蹤名單</h3>
				<div class="rounded-card card mb-3" v-for="item in followings" :key="item.id">
					<div class="card-body d-flex align-items-center">
						<img :src="getPictureUrl(item.headshot)" class="headshot">
						<div class="d-flex flex-column ms-3">
							<a href="#" class="fw-bold">{{ item.name }}</a>
							<small class="text-black-50">您已追蹤 {{ item.days }} 天！</small>
						</div>
						<small class="ms-auto">追蹤時間：{{ item.date }}</small>
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
			followings: [
				{
					id: 111,
					headshot: 'user-head.png',
					name: '波吉',
					days: 90,
					date: '2022/2/14 12:00'
				},
				{
					id: 222,
					headshot: 'user-head.png',
					name: '多魯米',
					days: 90,
					date: '2022/1/24 15:30'
				},
				{
					id: 333,
					headshot: 'user-head.png',
					name: '卡克',
					days: 90,
					date: '2022/1/10 14:20'
				},
				{
					id: 444,
					headshot: 'user-head.png',
					name: '希琳',
					days: 90,
					date: '2022/1/10 14:20'
				},
				{
					id: 555,
					headshot: 'user-head.png',
					name: '多瑪斯',
					days: 90,
					date: '2021/12/2 22:00'
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
