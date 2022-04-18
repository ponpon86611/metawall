<template>
	<div class="personal-wrap d-flex flex-column">
		<div class="row">
			<div class="col-12 col-md-7">
				<div class="personal-card card mb-4">
					<div class="card-header d-flex align-items-center p-0 border-bottom-0">
						<div class="border-end">
							<img class="head-pic" :src="getPictureUrl(info.headshot)">
						</div>
						<div class="ms-3">
							<h6>{{ info.name }}</h6>
							<small>{{ info.follower }} 人追蹤</small>
						</div>
						<template v-if="is_follow">
							<button type="button" class="btn btn-secondary ms-auto me-3 py-1" @click="is_follow = !is_follow">
								追蹤
							</button>
						</template>
						<template v-else>
							<button type="button" class="btn btn-light ms-auto me-3 py-1" @click="is_follow = !is_follow">
								取消追蹤
							</button>
						</template>
					</div>
				</div>
				<!-- 搜尋欄 -->
				<div class="row mb-3">
					<div class="col-4">
						<select name="type" class="form-control form-select rounded-0">
							<option value="new">最新貼文</option>
						</select>
					</div>
					<div class="col-8">
						<div class="input-group">
							<input type="text" class="form-control rounded-0" placeholder="搜尋貼文" aria-describedby="search">
							<button class="btn btn-primary shadow-none rounded-0 px-3 py-0 fs-5" type="button">
								<i class="bi bi-search"></i>
							</button>
						</div>
					</div>
				</div>
				<!-- 貼文 -->
				<div class="rounded-card card mb-3" v-for="post in posts" :key="post.id">
					<div class="card-header bg-transparent pt-3 border-0">
						<div class="d-flex align-items-center">
							<img :src="getPictureUrl(info.headshot)" class="headshot rounded-circle border">
							<div class="d-flex flex-column ms-3">
								<a href="#" class="fw-bold">{{ info.name }}</a>
								<small class="text-black-50">{{ post.date }}</small>
							</div>
						</div>
					</div>
					<div class="card-body">
						<p v-html="post.content" class="mb-3"></p>
						<img v-if="post.picture" :src="getPictureUrl(post.picture)" class="w-100 mb-3">
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
			is_follow: false,
			info: {
				name: '阿爾敏',
				headshot: 'user-head-2.png',
				follower: '987,987'
			},
			posts: [
				{
					id: 1,
					date: '2022/1/10 12:00',
					content: '今天找到一張大海的照片<br>太美拉～～～',
					picture: 'post-picture-3.png'
				},
				{
					id: 2,
					date: '2022/1/10 12:00',
					content: '各位我有一個作戰計畫',
					picture: ''
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
	.personal-wrap {
		.personal-card {
			box-shadow: -5px 5px 0 -2px white, -5px 5px 0 0px $black;
		}
		.head-pic {
			width: 80px;
			height: 80px;
		}
		.headshot {
			width: 50px;
			height: 50px;
		}
	}
</style>
