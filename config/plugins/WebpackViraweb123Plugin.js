'use strict';

const validateOptions = require('schema-utils');
const PLUGIN_TITLE = 'ViraWeb123 Plugin';
const fs = require('fs');
const path = require('path');


// schema for options object
const schema = {
	type: 'object',
	properties: {
		test: {
			type: 'string'
		},
		root: {
			type: 'string'
		}
	}
};

/**

Create spa.json:

To enable the application be installed.

 */
class WebpackViraweb123Plugin {

	constructor(options = {}) {
		validateOptions(schema, options, PLUGIN_TITLE);
		this.root = options.root || './';
	}

	apply(compiler) {
		compiler.hooks.done.tap(PLUGIN_TITLE, (stats) => {
			/* stats is passed as an argument when done hook is tapped.  */
			//>> Create SPA json file
			let rawdata = fs.readFileSync(path.join(this.root, 'package.json'));
			let data = JSON.parse(rawdata);
			//>> to delete extra information
			delete data.bin;
			delete data.scripts;
			delete data.devDependencies;
			delete data.engine;
			//>> to add main data
			
			//>> wirte the file
			fs.writeFile(path.join(this.root, 'dist', 'spa.json'), JSON.stringify(data), 'utf-8', function() {

			});

			console.error('Hello World!');
		});
	}
};

module.exports = WebpackViraweb123Plugin;