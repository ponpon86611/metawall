const path = require('path');
const webpack = require('webpack');

module.exports = {
	publicPath: process.env.NODE_ENV === 'production'
		? '/metawall/'
		: '/',
	css: {
		sourceMap: true,
		loaderOptions: {
			sass: {
				prependData: '@import "@assets/sass/app.scss";'
			}
		}
	},
	chainWebpack: config => {
		config.module
			.rule('images')
			.use('url-loader')
			.loader('url-loader')
			.tap(options => Object.assign(options, { limit: 102400 })); // set the limit to 100kb instead;
	},
	configureWebpack: {
		resolve: {
			alias: {
				'@': path.resolve(__dirname, './src'),
				'@assets': path.resolve(__dirname, './src/assets'),
				'@components': path.resolve(__dirname, './src/components'),
				'@layout': path.resolve(__dirname, './src/layout'),
				'@router': path.resolve(__dirname, './src/router'),
				'@store': path.resolve(__dirname, './src/store'),
				'@views': path.resolve(__dirname, './src/views'),
				'jquery': path.resolve(__dirname, 'node_modules/jquery/dist/jquery')
			}
		},
		plugins: [
			new webpack.ProvidePlugin({
				jQuery: 'jquery',
				'window.jQuery': 'jquery',
			})
		]
	}
};
