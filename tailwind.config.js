/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./public/**/*.html"],
	theme: {
		fontFamily: {
			title: ["Montserrat", "sans-serif"],
			serif: ["Georgia", "Times New Roman", "serif"],
			mono: ["Consolas", "Monaco", "monospace"],
		},
		extend: {
			colors: {
				link: "#0febda",
				textSecondary: "#D3CCCC",
				dark: "#02000C",
			},
		},
	},
	plugins: [],
};
