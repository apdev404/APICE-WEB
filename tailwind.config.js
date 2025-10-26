/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'primary': '#06171E',
				'secondary': '#FD7D00', 
				'whiteColor': '#F5FBFF',
				'whiteBGLite': '#e7e8e8ff',
				'primaryFontColor': '#030b0fff',
				'greenAP': '#043939',
				'greenLight': '#034450',
			},
			fontFamily: {
				'sans': ['Inter', 'system-ui', 'sans-serif'],
				'heading': ['Poppins', 'sans-serif'],
				'alternative': ['Noto Sans', 'sans-serif'],
			},
		},
	},
	plugins: [
		require('daisyui')
	],
	daisyui: {
		themes: ["light", "dark"],
	},
}