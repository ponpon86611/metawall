import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		name: 'Login',
		path: '/login',
		component: () => import('@/views/Login/Index')
	},
	{
		path: '/',
		component: () => import('@/views/Index'),
		props: { posts: [] },
		children: [
			{
				name: 'Home',
				path: '/',
				component: () => import('@/views/Home')
			},
			{
				name: 'Following',
				path: '/following',
				component: () => import('@/views/Following')
			},
			{
				name: 'Account',
				path: '/account',
				component: () => import('@/views/Account')
			},
			{
				name: 'Post',
				path: '/post',
				component: () => import('@/views/Post')
			},
			{
				name: 'ThumbsUp',
				path: '/thumbs-up',
				component: () => import('@/views/ThumbsUp')
			},
			{
				name: 'PersonalPage',
				path: '/personal-page',
				component: () => import('@/views/PersonalPage')
			}
		]
	}
];

const router = new VueRouter({
	routes
});

export default router;
