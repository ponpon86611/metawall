<template>
	<div>
		<h2 class="text-center mb-4">註冊</h2>
		<form class="mb-4 pt-2">
			<div class="mb-3 w-100">
				<input type="name" class="form-control rounded-0" placeholder="暱稱" v-model="info.name">
				<small v-if="errorMessage.name" class="text-danger d-block mt-1">{{ errorMessage.name }}</small>
			</div>
			<div class="mb-3 w-100">
				<input type="email" class="form-control rounded-0" placeholder="Email" v-model="info.email">
				<small v-if="errorMessage.email" class="text-danger d-block mt-1">{{ errorMessage.email }}</small>
			</div>
			<div class="mb-3 w-100">
				<input type="password" class="form-control rounded-0" placeholder="Password" v-model="info.password">
				<small v-if="errorMessage.password" class="text-danger d-block mt-1">{{ errorMessage.password }}</small>
			</div>
		</form>
        <button type="button" class="btn btn-primary w-100" @click="submitSignup()" :disabled="!formIsFinished">註冊</button>
	</div>
</template>

<script>
export default {
	name: 'NavSignUp',
	data() {
		return {
			info: {
				name: '', // 暱稱
				email: '', // 帳號
				password: '' // 密碼
			},
			errorMessage: {}
		};
	},
	computed: {
		formIsFinished() {
			return this.info.email && this.info.password && this.info.name;
		}
	},
	mounted() {},
	methods: {
		submitSignup() {
			this.errorMessage = {
				name: '暱稱至少 2 個字元以上',
				email: '帳號已被註冊，請替換新的 Email！',
				password: '密碼需至少 8 碼以上，並中英混合'
			};
		}
	}
};
</script>

<style lang="scss" scoped></style>
