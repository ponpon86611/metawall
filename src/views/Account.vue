<template>
	<div class="account-wrap d-flex flex-column">
		<div class="row">
			<div class="col-12 col-md-7">
				<h3 class="title py-3 border bg-white text-center mb-4">修改個人資料</h3>
				<ul class="ms-2 nav nav-tabs border-0" id="myTab" role="tablist">
					<li class="nav-item">
						<button class="nav-link border px-4 active" id="edit-name-tab" data-bs-toggle="tab" data-bs-target="#edit-name"
							type="button" aria-controls="edit-name" aria-selected="true">暱稱修改</button>
					</li>
					<li class="nav-item">
						<button class="nav-link border px-4" id="edit-password-tab" data-bs-toggle="tab" data-bs-target="#edit-password"
							type="button" aria-controls="edit-password" aria-selected="false">重設密碼</button>
					</li>
				</ul>
				<div class="tab-content rounded-card card">
					<!-- 暱稱修改 -->
					<div class="tab-pane fade show active" id="edit-name" aria-labelledby="edit-name-tab">
						<div class="card-body p-4 d-flex flex-column align-items-center">
							<img src="~@assets/img/user-head.png" class="headshot d-block mb-3">
							<button type="button" class="btn bg-black text-white rounded-0 shadow-none px-4 py-2">
								上傳大頭照
							</button>
							<form class="mt-3">
								<div class="mb-3">
									<label for="name" class="form-label">暱稱</label>
									<input type="text" class="form-control rounded-0" id="name" placeholder="請輸入暱稱"
										v-model="nameInfo.name">
								</div>
								<div class="mb-3">
									<label for="gender" class="form-label">性別</label>
									<div>
										<div class="form-check form-check-inline">
											<input class="form-check-input" type="radio" id="female" value="female" v-model="nameInfo.gender">
											<label class="form-check-label" for="female">女性</label>
										</div>
										<div class="form-check form-check-inline">
											<input class="form-check-input" type="radio" id="male" value="male" v-model="nameInfo.gender">
											<label class="form-check-label" for="male">男性</label>
										</div>
									</div>
								</div>
								<div v-if="errorMessage" class="text-danger text-center d-block mt-3">
									<small v-for="(item, index) in errorMessage" :key="`error_${index}`" class="d-block">
										{{ item }}
									</small>
								</div>
								<button type="button" class="btn btn-secondary w-100 mt-3">送出更新</button>
							</form>
						</div>
					</div>
					<!-- 重設密碼 -->
					<div class="tab-pane fade" id="edit-password" aria-labelledby="edit-password-tab">
						<div class="card-body p-4 d-flex flex-column align-items-center">
							<form>
								<div class="mb-3">
									<label for="password" class="form-label">輸入新密碼</label>
									<input type="text" class="form-control rounded-0" id="password" placeholder="請輸入新密碼"
										v-model="passwordInfo.password">
								</div>
								<div class="mb-3">
									<label for="confirm_password" class="form-label">再次輸入</label>
									<input type="text" class="form-control rounded-0" id="confirm_password" placeholder="再次輸入輸入新密碼"
										v-model="passwordInfo.confirm_password">
								</div>
								<button type="button" class="btn btn-secondary w-100 mt-3" :disabled="!formIsFinished">重設密碼</button>
							</form>
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
			nameInfo: {
				name: '邊緣小杰',
				gender: 'female'
			},
			errorMessage: [
				'1.圖片寬高比必需為 1:1，請重新輸入',
				'2.解析度寬度至少 300像素以上，請重新輸入'
			],
			passwordInfo: {
				password: '',
				confirm_password: ''
			}
		};
	},
	computed: {
		formIsFinished() {
			return this.passwordInfo.password && this.passwordInfo.confirm_password;
		}
	},
	methods: {
		getPictureUrl(path) {
			return require(`@/assets/img/${path}`);
		}
	}
};
</script>

<style lang="scss" scoped>
	.account-wrap {
		.title {
			box-shadow: -5px 5px 0 -2px white, -5px 5px 0 0px $black;
		}
		.nav-link {
			background-color: white;
			color: $black;
			&.active {
				background-color: $black;
				color: white;
			}
		}
		.headshot {
			width: 105px;
			height: 105px;
		}
		form {
			width: 320px;
		}
	}
</style>
