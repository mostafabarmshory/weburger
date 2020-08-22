'use strict';

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackViraWeb123Plugin = require('../../plugins/WebpackViraweb123Plugin');


module.exports = function(_path) {

	// return configuration
	return {
		context: _path,
		devtool: 'source-map',
		output: {
			publicPath: './',
			filename: '[name].[chunkhash].js'
		},
		plugins: [
			new WebpackViraWeb123Plugin({
				root: _path,
			}),
			new CleanWebpackPlugin({
				root: _path,
				dry: false,
				verbose: true,
				cleanOnceBeforeBuildPatterns: ['**/*'],
			}),
		],
		optimization: {
			minimize: false,
			removeEmptyChunks: true,
			/* Debug support */
			namedModules: true,
			moduleIds: 'natural',
			namedChunks: true,
		},
	};
};