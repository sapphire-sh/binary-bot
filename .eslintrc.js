module.exports = {
	'extends': 'eslint:recommended',
	'root': true,
	'parser': 'babel-eslint',
	'parserOptions': {
		'ecmaVersion': 6,
		'sourceType': 'module',
	},
	'env': {
		'es6': true,
		'node': true,
		'browser': true,
		'mocha': true,
	},
	'plugins': [
		'html',
	],
	'rules': {
		'indent': [
			'error',
			'tab',
			{
				'MemberExpression': 0,
			},
		],
		'strict': [
			'error',
			'safe',
		],
		'semi': [
			'error',
			'always',
		],
		'curly': [
			'error',
			'all',
		],
		'eqeqeq': [
			'error',
			'always',
		],
		'quotes': [
			'error',
			'single',
		],
		'quote-props': [
			'error',
			'always',
		],
		'array-bracket-newline': [
			'error',
			'always',
		],
		'array-element-newline': [
			'error',
			'always',
		],
		'object-curly-newline': [
			'error',
			'always',
		],
		'object-property-newline': [
			'error',
		],
		'brace-style': [
			'error',
			'stroustrup',
		],
		'comma-dangle': [
			'error',
			'always',
		],
		'comma-spacing': [
			'error',
			{
				'before': false,
				'after': true,
			},
		],
		'func-call-spacing': [
			'error',
			'never',
		],
		'newline-per-chained-call': [
			'error',
			{
				'ignoreChainWithDepth': 1,
			},
		],
		'no-multiple-empty-lines': [
			'error',
			{
				'max': 1,
				'maxBOF': 0,
			},
		],
		'eol-last': [
			'error',
		],
		'no-trailing-spaces': [
			'error',
		],
		'keyword-spacing': [
			'error',
			{
				'before': false,
				'after': false,
				'overrides': {
					'const': {
						'after': true,
					},
					'import': {
						'after': true,
					},
					'from': {
						'before': true,
						'after': true,
					},
					'else': {
						'after': true,
					},
					'return': {
						'after': true,
					},
					'case': {
						'after': true,
					},
				},
			},
		],
		'linebreak-style': [
			'error',
			'unix',
		],
		'unicode-bom': [
			'error',
			'never',
		],
		'no-console': [
			'off',
		],
		'no-unused-vars': [
			'off',
		],
	},
};
