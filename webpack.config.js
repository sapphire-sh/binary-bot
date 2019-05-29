const path = require('path');

const webpack = require('webpack');

const nodeExternals = require('webpack-node-externals');

const rootPath = path.resolve(__dirname, '.');
const srcPath = path.resolve(rootPath, 'src');
const distPath = path.resolve(rootPath, 'dist');

const config = require('./config.json');

const env = process.env.NODE_ENV === 'development' ? 'development' : 'production';

const __dev = process.env.NODE_ENV === 'development';
const __test = process.env.NODE_ENV === 'test';

module.exports = {
	'entry': path.resolve(srcPath, 'index.ts'),
	'output': {
		'path': distPath,
		'filename': 'index.js',
	},
	'module': {
		'rules': [
			{
				'test': /\.tsx?$/,
				'include': srcPath,
				'use': [
					{
						'loader': 'ts-loader',
						'options': {
							'transpileOnly': __dev,
							'experimentalWatchApi': __dev,
						},
					},
				],
			},
		],
	},
	'plugins': [
		new webpack.DefinePlugin({
			'__dev': __dev,
			'__test': __test,
			'__config': JSON.stringify(config),
		}),
		new webpack.ProgressPlugin(),
	],
	'mode': env,
	'devtool': false,
	'resolve': {
		'extensions': [
			'.ts',
			'.tsx',
			'.js',
			'.json',
		],
		'alias': {
			'~': srcPath,
		},
	},
	'target': 'node',
	'node': {
		'__dirname': true,
	},
	'optimization': {
		'minimize': false,
		'removeAvailableModules': false,
		'removeEmptyChunks': false,
		'splitChunks': false,
	},
	'externals': [
		nodeExternals(),
	],
};
