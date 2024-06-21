/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";
import defaultColors from "tailwindcss/colors";

const colors = {
	...defaultColors,
	"green-dark": "#0D1408",
	"green-dark-card": "#13190F",
	"green-light": "#B6D9A1",
	"green-text": "#EEF6E8",
	"purple-dark": "#BE03FD",
	"purple-light": "#613078",
	"red-light": "#B84F73",
	error: "FF5050",
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
} as const;

export type Colors = typeof colors;
export type DefaultColors = typeof defaultColors;

const config: Config = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors,
			fontFamily: {
				pop: ["Poppins", "Helvetica", "Arial", "sans-serif"],
			},
			dropShadow: {
				"3xl": "15px 15px 4px rgba(0, 0, 0, 0.15)",
				border: "0 0 2px #EEF6E830",
				glass: ["15px 15px 4px rgba(0, 0, 0, 0.15)"],
				text: [
					"0 4px 4px rgba(0, 0, 0, 0.25)",
					"3px 3px 4px rgba(0, 0, 0, 0.25)",
				],
			},
			boxShadow: {
				border: "0 0 2px #ffffff20",
				glass: ["15px 15px 4px rgba(0, 0, 0, 0.15)"],
			},
			keyframes: {
				pinger: {
					"75%, 100%": {
						transform: "scale(1.5)",
						opacity: "0",
					},
				},
				scrollDown: {
					"0%,50%,100%": { transform: "translateY(0)" },
					"25%": { transform: "translateY(10px)" },
					"75%": { transform: "translateY(-10px)" },
				},
				wiggle: {
					"0%, 100%": {
						transform: "rotate(-5deg) scale(1.5) translateY(6px)",
					},
					"50%": { transform: "rotate(8deg) scale(1.5) translateY(4px)" },
				},
			},
			animation: {
				pinger: "pinger 1s ease-in-out infinite",
				scrollDown: "scrollDown 3s linear infinite",
				wiggle: "wiggle 5s ease-in-out infinite",
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [],
};

export default config;
