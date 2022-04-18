module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	extends: [
		'plugin:vue/essential',
		'@vue/standard'
	],
	parserOptions: {
		parser: 'babel-eslint'
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		indent: [ 'error', 'tab' ],
		'no-tabs': 'off',
		semi: [ 'error', 'always' ],
		'array-bracket-spacing': [ 'error', 'always' ],
		'space-before-function-paren': [ 'error', {
			anonymous: 'never',
			named: 'never',
			asyncArrow: 'always'
		} ],
		'no-extend-native': 'off',
		eqeqeq: [ 'error', 'smart' ]
	},
	globals: {
		$: true
	}
};
