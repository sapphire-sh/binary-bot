module.exports = {
	'rootDir': '.',
	'testEnvironment': 'node',
	'transform': {
		'^.+\\.tsx?$': 'ts-jest',
	},
	'testRegex': '(/__tests__/.*|(\\.|/)(test|spec))\\.(tsx?)$',
	'testPathIgnorePatterns': [
		"/node_modules/",
		"/dist/",
	],
	'moduleFileExtensions': [
		'ts',
		'tsx',
		'js',
		'jsx',
		'json',
		'node',
	],
	'moduleNameMapper': {
		'~/(.*)': '<rootDir>/src/$1',
	},
	'globals': {
		'__dev': true,
		'__test': true,
		'__config': {
			consumer_secret: 'consumer_secret',
			consumer_key: 'consumer_key',
			access_token: 'access_token',
			access_token_secret: 'access_token_secret',
		},
	},
};
