'use strict';
var webpack = require('webpack');

module.exports = function(_path) {
	return {
		context: _path,
		devtool: 'source-map',
		devServer: {
			contentBase: './dist',
			clientLogLevel: 'debug',
			proxy: {
				'/api': {
					'changeOrigin': true,
					'cookieDomainRewrite': 'localhost',
					'target': 'http://test.viraweb123.ir'
				}
			}
		},
		plugins: [
			new webpack.HotModuleReplacementPlugin()
		]
	};
};
