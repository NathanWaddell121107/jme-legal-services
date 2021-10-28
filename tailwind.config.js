const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	darkMode: false,
	mode: 'jit',
	plugins: [],
	purge: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				cyan: colors.cyan,
				emerald: colors.emerald,
				fuchsia: colors.fuchsia,
				orange: colors.orange,
				rose: colors.rose,
				sky: colors.sky,
				teal: colors.teal,
				violet: colors.violet
			},
			fontFamily: {
				sans: ['Inter var', ...defaultTheme.fontFamily.sans]
			}
		},
		fontSize: {
			'2xl': '1.5rem',
			'3xl': '1.875rem',
			'4xl': '2.25rem',
			'5xl': '3rem',
			'6xl': '4rem',
			base: '1rem',
			lg: '1.125rem',
			sm: '0.875rem',
			xl: '1.25rem',
			xs: '0.75rem'
		}
	},
	variants: {}
}
