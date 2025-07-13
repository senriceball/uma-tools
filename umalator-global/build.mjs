import * as esbuild from 'esbuild';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { program } from 'commander';

program
	.option('--debug');

program.parse();
const options = program.opts();
const debug = !!options.debug;

const dirname = path.dirname(fileURLToPath(import.meta.url));

const redirectData = {
	name: 'redirectData',
	setup(build) {
		build.onResolve({filter: /^\.\.?(?:\/uma-skill-tools)?\/data\//}, args => ({
			path: path.join(dirname, args.path.split('/data/')[1])
		}));
		build.onResolve({filter: /skill_meta.json$/}, args => ({
			path: path.join(dirname, 'skill_meta.json')
		}));
		build.onResolve({filter: /umas.json$/}, args => ({
			path: path.join(dirname, 'umas.json')
		}));
	}
};

const mockAssertFn = debug ? 'console.assert' : 'function(){}';
const mockAssert = {
	name: 'mockAssert',
	setup(build) {
		build.onResolve({filter: /^assert$/}, args => ({
			path: args.path, namespace: 'mockAssert-ns'
		}));
		build.onLoad({filter: /.*/, namespace: 'mockAssert-ns'}, () => ({
			contents: 'module.exports={strict:'+mockAssertFn+'};',
			loader: 'js'
		}));
	}
};

await esbuild.build({
	entryPoints: ['../umalator/app.tsx'],
	bundle: true,
	minify: !debug,
	outfile: 'bundle.js',
	define: {CC_DEBUG: debug.toString(), CC_GLOBAL: 'true'},
	external: ['*.ttf'],
	plugins: [redirectData, mockAssert]
});
