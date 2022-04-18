<template>
	<nav class="navbar fixed-top px-3 bg-white border-bottom">
		<div class="navbar-content d-flex align-items-center justify-content-between w-100 h-100">
			<h1 class="logo text-dark">
				<router-link :to="{ name: 'Home' }" class="text-black text-decoration-none">
					MetaWall
				</router-link>
			</h1>
			<div class="nav-item dropdown">
				<div class="nav-link dropdown-toggle d-flex align-items-center pe-0"
					id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
					<img src="~@/assets/img/user-head.png" alt="head" class="head d-block me-2">
					<a href="#" class="border-bottom p-0 text-black text-decoration-none">Member</a>
				</div>
				<ul class="dropdown-menu rounded-0 p-0 text-center" aria-labelledby="navbarDropdown">
					<li>
						<router-link :to="{ name: 'PersonalPage' }" class="dropdown-item text-decoration-none py-2 border-bottom">
							我的貼文牆
						</router-link>
					</li>
					<li>
						<router-link :to="{ name: 'Account' }" class="dropdown-item text-decoration-none py-2 border-bottom">
							修改個人資料
						</router-link>
					</li>
					<li>
						<router-link :to="{ name: 'Login' }" class="dropdown-item text-decoration-none py-2">
							登出
						</router-link>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	name: 'Navbar',
	data() {
		return {};
	},
	mounted() {
	},
	methods: {}
};
</script>

<style lang="scss" scoped>
	.navbar {
		height: $navbar-height;
		.navbar-content {
			@include window-width;
		}
		.nav-link {
			font-family: 'Azeret Mono', monospace;
			&::after {
				display: none
			}
			.head {
				width: 30px;
			}
		}
		.logo {
			@include metawall-logo;
			font-size: 26px;
		}
		.dropdown-menu {
			@include custom-border;
			box-shadow: 5px 5px 0 -2px white, 5px 5px 0 0px $black;
			.dropdown-item {
				&:hover, &:active {
					background-color: $gray-300;
					color: $black;
				}
			}
		}
	}
</style>
