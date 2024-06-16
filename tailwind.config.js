/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"green-dark": "#0D1408",
				"green-light": "#B6D9A1",
				"green-text": "#B6D9A1",
				"purple-dark": "#BE03FD",
				"purple-light": "#613078",
				"red-light": "#B84F73",
				error: "FF5050",
				black: "#000000",
				white: "#FFFFFF",
				gray: {
					100: "#F7FAFC",
					200: "#EDF2F7",
					300: "#E2E8F0",
					400: "#CBD5E0",
					500: "#A0AEC0",
					600: "#718096",
					700: "#4A5568",
					800: "#2D3748",
					900: "#1A202C",
				},
			},
			fontFamily: {
				pop: ["Poppins", "Helvetica", "Arial", "sans-serif"],
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [],
};
