/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			// COLORES GLOBALES
			colors: {
				'primary': '#06171E',
				'secondary': '#FD7D00',
				'whiteColor': '#F5FBFF' 
			},
			// FUENTES GLOBALES
			fontFamily: {
				'sans': ['Inter', 'system-ui', 'sans-serif'],
				'heading': ['Poppins', 'sans-serif'],
				'alternative': ['Noto Sans', 'sans-serif'],
			},
		},
	},
	plugins: [],
}