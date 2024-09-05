import antfu from '@antfu/eslint-config'

export default antfu({
	astro: true,
	stylistic: {
		indent: 'tab',
		quotes: 'single',
	},
	rules: {
		'antfu/top-level-function': 'off',
		'style/jsx-quotes': ['error', 'prefer-single'],
	},
})
