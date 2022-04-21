<template>
	<div class="post-wrap d-flex flex-column">
		<Loading :active.sync="isLoading"></Loading>
		<div class="row">
			<div class="col-12 col-md-7">
				<h3 class="title py-3 border bg-white text-center mb-4">張貼動態</h3>
				<div class="rounded-card card">
					<div class="card-body p-4">
						<div class="mb-3">
							<label for="content" class="form-label">貼文內容</label>
							<textarea class="form-control rounded-0" rows="3" id="content" placeholder="輸入您的貼文內容"
								v-model="info.content"></textarea>
						</div>
						<div class="mb-3">
							<label for="upload-file" class="btn form-label bg-black text-white shadow-none py-1 mb-0">上傳圖片</label>
							<input class="form-control d-none" type="file" id="upload-file" accept="image/png, image/jpeg"
								ref="upload-file" @change="uploadFile()">
						</div>
						<div class="image-wrap border rounded overflow-hidden" v-show="imagePreview">
							<img :src="imagePreview" class="w-100">
						</div>
						<div v-if="errorMessage" class="text-danger text-center d-block mt-3">
							<small v-for="(item, index) in errorMessage" :key="`error_${index}`" class="d-block">
								{{ item }}
							</small>
						</div>
						<div class="submit-btn-wrap mx-auto">
							<button type="button" class="btn btn-secondary w-100 mt-3" :disabled="!info.content"
								@click="submitPost()">
								送出貼文
							</button>
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
	name: 'Post',
	components: {
		Sidebar: () => import('../components/Sidebar.vue'),
		SidebarSm: () => import('../components/SidebarSm.vue')
	},
	data() {
		return {
			info: { // TODO: userPhoto & image 放假資料
				userName: '王小明',
				userPhoto: 'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
				image: 'https://images.unsplash.com/photo-1531214159280-079b95d26139?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
				content: ''
			},
			imagePreview: '', // 圖片預覽
			errorMessage: [], // 錯誤訊息
			isLoading: false
		};
	},
	methods: {
		uploadFile() { // TODO: 上傳檔案-先放預覽圖
			const input = this.$refs['upload-file'];
			this.imagePreview = URL.createObjectURL(input.files[0]);
			input.files = new DataTransfer().files; // 清空 input，避免重複選同一檔案無法觸發 change 事件
		},
		submitPost() {
			this.isLoading = true;
			fetch('https://stormy-crag-81873.herokuapp.com/posts', {
				method: 'POST',
				body: JSON.stringify(this.info)
			})
				.then(res => res.json())
				.then(response => {
					if (response.status === 'success') {
						this.$router.push({ name: 'Home' });
					} else {
						const errArr = [];
						if (!response.error) {
							errArr.push(response.message);
						} else {
							errArr.push(`${response.message}：`);
							Object.values(response.error).forEach(item => {
								errArr.push(item.message);
							});
						}
						this.errorMessage = errArr;
					}
					this.isLoading = false;
				})
				.catch(() => {
					this.errorMessage = [ '系統異常' ];
					this.isLoading = false;
				});
		}
	}
};
</script>

<style lang="scss" scoped>
	.post-wrap {
		.title {
			box-shadow: -5px 5px 0 -2px white, -5px 5px 0 0px $black;
		}
		.submit-btn-wrap {
			width: 320px;
		}
		.custom-file-input {
			position: relative;
			z-index: 2;
			width: 100%;
			height: calc(1.5em + 0.75rem + 2px);
			margin: 0;
			overflow: hidden;
			opacity: 0;
		}
		.custom-file-label {
			white-space: nowrap;
			overflow-x: hidden;
		}
	}
</style>
