<template>
	<div class="login-wrap d-flex align-items-center p-5">
		<div class="login-card card bg-light mx-auto my-auto rounded-0">
			<div class="card-body">
				<div class="row">
					<div class="col-6 d-flex align-items-center">
						<img src="~@/assets/img/login/main-image.svg" alt="">
					</div>
					<div class="col-6">
						<h1 class="logo text-primary text-center mb-2">MetaWall</h1>
						<!-- tab-content -->
						<div v-for="item in tabs"
							:key="item.contentId" :id="item.contentId"
							class="tab-pane fade"
							:class="{ 'show active': currentPage === item.contentId }"
							:aria-labelledby="item.tabId">
							<template v-if="currentPage === item.contentId">
								<component :is="item.modal"></component>
							</template>
						</div>
						<!-- tabs -->
						<div class="text-center mt-3">
							<template v-for="(item, key) in tabs">
								<a :key="item.tabId"
									v-if="item.contentId !== currentPage"
									:id="item.tabId" data-toggle="tab"
									:href="`#${item.contentId}`"
									:aria-controls="item.contentId"
									:aria-selected="key === 0 ? true : false"
									@click.prevent="currentPage = item.contentId">
									{{ item.name }}
								</a>
							</template>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Login',
	components: {
		NavLogin: () => import('./components/Login.vue'),
		NavSignUp: () => import('./components/SignUp.vue')
	},
	data() {
		return {
			loginInfo: {
				email: '', // 帳號
				password: '' // 密碼
			},
			currentPage: 'login', // 預設登入頁
			tabs: [ // 切換登入or註冊
				{
					tabId: 'login-tab',
					contentId: 'login',
					name: '登入',
					modal: 'NavLogin'
				},
				{
					tabId: 'signup-tab',
					contentId: 'signup',
					name: '註冊帳號',
					modal: 'NavSignUp'
				}
			]
		};
	},
	mounted() {},
	methods: {}
};
</script>

<style lang="scss" scoped>
	.login-wrap {
		min-height: 100vh;
		.login-card {
			@include window-width;
			box-shadow: -8px 8px 0px rgba($black, 0.15);
			.card-body {
				padding: 4.5rem 3rem;
			}
		}
		.logo {
			@include metawall-logo;
			font-size: 60px;
		}
	}
</style>
