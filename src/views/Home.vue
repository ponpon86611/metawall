<template>
	<div class="home-wrap d-flex flex-column">
		<div class="row">
			<div class="col-12 col-md-7">
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
				<template v-if="posts.length === 0">
					<div class="rounded-card card">
						<div class="card-header bg-transparent border-bottom">
							<span class="browser-icon bg-danger rounded-circle d-inline-block me-2"></span>
							<span class="browser-icon bg-secondary rounded-circle d-inline-block me-2"></span>
							<span class="browser-icon bg-success rounded-circle d-inline-block"></span>
						</div>
						<div class="card-body">
							<p class="text-black-50 text-center py-3">目前尚無動態，新增一則貼文吧！</p>
						</div>
					</div>
				</template>
				<template v-else>
					<div class="rounded-card card mb-3" v-for="post in posts" :key="post.id">
						<div class="card-header bg-transparent pt-3 border-0">
							<div class="d-flex align-items-center">
								<img :src="getPictureUrl(post.headshot)" class="headshot">
								<div class="d-flex flex-column ms-3">
									<a href="#" class="fw-bold">{{ post.name }}</a>
									<small class="text-black-50">{{ post.date }}</small>
								</div>
							</div>
						</div>
						<div class="card-body">
							<p v-html="post.content" class="mb-3"></p>
							<img :src="getPictureUrl(post.picture)" class="w-100 mb-3">
							<a href="#" class="text-decoration-none" v-if="post.thumbs_up > 0">
								<i class="bi bi-hand-thumbs-up text-primary fs-5"></i>
								{{ post.thumbs_up }}
							</a>
							<a href="#" class="text-decoration-none text-black-50" v-else>
								<i class="bi bi-hand-thumbs-up fs-5"></i>
								成為第一個按讚的朋友
							</a>
							<div class="d-flex align-items-center mt-3">
								<img src="~@/assets/img/user-head.png" class="headshot me-2">
								<div class="input-group">
									<input type="text" class="form-control rounded-0" placeholder="留言..." aria-describedby="search">
									<button class="btn btn-primary shadow-none rounded-0 px-4" type="button">
										留言
									</button>
								</div>
							</div>
							<!-- 用戶回覆 -->
							<ul v-if="post.messages.length > 0" class="mt-3">
								<li v-for="message in post.messages" :key="message.id" class="mb-3">
									<div class="message-card card border-0">
										<div class="card-body">
											<div class="d-flex">
												<img :src="getPictureUrl(message.headshot)" class="headshot">
												<div class="d-flex flex-column ms-3 pt-2">
													<a href="#" class="fw-bold">{{ message.name }}</a>
													<small class="text-black-50">{{ message.date }}</small>
													<p v-html="message.content" class="mt-2"></p>
												</div>
											</div>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</template>
				<!-- TODO: delete -->
				<small class="d-block mt-3">
					<a href="#" @click.prevent="addPost()" class="text-black-50 me-2">有貼文</a>
					<a href="#" @click.prevent="posts = []" class="text-black-50">沒貼文</a>
				</small>
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
	name: 'Home',
	components: {
		Sidebar: () => import('../components/Sidebar.vue'),
		SidebarSm: () => import('../components/SidebarSm.vue')
	},
	data() {
		return {
			posts: []
		};
	},
	methods: {
		addPost() {
			this.posts = [
				{
					id: 1,
					headshot: 'user-head.png',
					name: '邊緣小杰',
					date: '2022/1/10 12:00',
					content: '外面看起來就超冷....<br>我決定回被窩繼續睡....>.<',
					picture: 'post-picture.png',
					thumbs_up: 12,
					messages: [
						{
							id: 111,
							headshot: 'user-head.png',
							name: '希琳',
							date: '2022/1/11 10:00',
							content: '真的～我已經準備冬眠了'
						},
						{
							id: 222,
							headshot: 'user-head.png',
							name: '波吉',
							date: '2022/1/11 10:00',
							content: '會嗎？我沒穿衣服都不覺得冷'
						}
					]
				},
				{
					id: 2,
					headshot: 'user-head.png',
					name: '米卡莎',
					date: '2022/1/10 12:00',
					content: '搶到想要的 NFT 啦！ya~~',
					picture: 'post-picture-2.png',
					thumbs_up: 0,
					messages: []
				}
			];
		},
		getPictureUrl(path) {
			return require(`@/assets/img/${path}`);
		}
	}
};
</script>

<style lang="scss" scoped>
	.home-wrap {
		.headshot {
			width: 50px;
			height: 50px;
		}
		small {
			font-size: 12px;
		}
		.browser-icon {
			width: 9px;
			height: 9px;
			border: 1px solid $gray-700;
		}
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
		.message-card {
			background-color: rgba($gray-300, 0.3);
		}
	}
</style>
