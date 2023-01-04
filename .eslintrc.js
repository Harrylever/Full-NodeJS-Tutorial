module.exports = {
	'env': {
		'browser': true,
		'commonjs': true,
		'es2021': true
	},
	'extends': 'eslint:recommended',
	'overrides': [
	],
	'parserOptions': {
		'ecmaVersion': 'latest'
	},
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		'no-multiple-empty-lines': [
			'error',
			{
				'max':    1,
				'maxEOF': 0 
			}
		],
		'space-before-function-paren': [
			'error',
			{
				'anonymous': 'always',
				'named': 'never'
			}
		],
		'eol-last': [
			'error',
			'always'
		],
		'no-multi-spaces': [
			'error',
			{
				'ignoreEOLComments': false
			}
		],
		'no-undef': [
			'warn'
		],
		'no-unused-vars': [
			'warn'
		]
	}
};
