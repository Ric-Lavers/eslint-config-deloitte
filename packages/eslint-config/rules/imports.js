module.exports = {
	env: {
		es6: true,
	},

	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
	},

	plugins: [
		'import',
	],

	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.json', '.jsx'],
			},
		},
		'import/extensions': [
			'.js',
			'.jsx',
		],
		'import/core-modules': [
		],
		'import/ignore': [
			'node_modules',
			'\\.(coffee|scss|css|less|hbs|svg|json)$',
		],
	},

	rules: {
		// Static analysis:

		// ensure imports point to files/modules that can be resolved
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
		'import/no-unresolved': 'off',

		// ensure named imports coupled with named exports
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md#when-not-to-use-it
		'import/named': 'off',

		// ensure default import coupled with default export
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md#when-not-to-use-it
		'import/default': 'off',

		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/namespace.md
		'import/namespace': 'off',

		// Helpful warnings:

		// disallow invalid exports, e.g. multiple defaults
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md
		'import/export': 'error',

		// do not allow a default import name to match a named export
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md
		'import/no-named-as-default': 'error',

		// warn on accessing default export property names that are also named exports
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md
		'import/no-named-as-default-member': 'error',

		// disallow use of jsdoc-marked-deprecated imports
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md
		'import/no-deprecated': 'off',

		// Forbid the use of extraneous packages
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
		'import/no-extraneous-dependencies': ['off', {
			devDependencies: true,
			optionalDependencies: false,
			peerDependencies: true,
		}],

		// Forbid mutable exports
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md
		'import/no-mutable-exports': 'error',

		// Module systems:

		// disallow require()
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md
		'import/no-commonjs': 'off',

		// disallow AMD require/define
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md
		'import/no-amd': 'error',

		// No Node.js builtin modules
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-nodejs-modules.md
		'import/no-nodejs-modules': 'off',

		// Style guide:

		// disallow non-import statements appearing before import statements
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/imports-first.md
		'import/imports-first': ['error', 'absolute-first'],

		// disallow duplicate imports
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
		'import/no-duplicates': 'error',

		// disallow namespace imports
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-namespace.md
		'import/no-namespace': 'off',

		// Ensure consistent use of file extension within the import path
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
		// TODO: enable when https://github.com/benmosher/eslint-plugin-import/issues/390 is resolved
		'import/extensions': ['off', 'never'],

		// Enforce a convention in module import order
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
		'import/order': ['off', {
			'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
			'newlines-between': 'never',
		}],

		// Require a newline after the last import/require in a group
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
		'import/newline-after-import': 'error',

		// Require modules with a single export to use a default export
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
		'import/prefer-default-export': 'error',

		// Restrict which files can be imported in a given folder
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-restricted-paths.md
		'import/no-restricted-paths': 'off',

		// Forbid modules to have too many dependencies
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/max-dependencies.md
		'import/max-dependencies': ['off', { max: 10 }],

		// Forbid import of modules using absolute paths
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md
		'import/no-absolute-path': ['off'],

		// This rule enforces that all exports are declared at the bottom of the file
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/exports-last.md
		'import/exports-last': 'off',

		// Reports when named exports are not grouped together in a single export declaration
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/group-exports.md
		'import/group-exports': 'off',

		// Prohibit default exports
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-default-export.md
		'import/no-default-export': 'off',
	},
};