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
      gradientFrom: "13190F",
      gradientTo: "0D1408",
      backgroundImage: (theme) => ({
        "gradient-primary": `linear-gradient(to right, ${theme("colors.gradientFrom")}, ${theme("colors.gradientTo")})`,
      }),

      fontFamily: {
        pop: ["Poppins", "Helvetica", "Arial", "sans-serif"],
      },
      keyframes: {
        pinger: {
          "75%, 100%": {
            transform: "scale(1.5)",
            opacity: 0,
          },
        },
        scrollDown: {
          "0%,50%,100%": { transform: "translateY(0)" },
          "25%": { transform: "translateY(10px)" },
          "75%": { transform: "translateY(-10px)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        pinger: "pinger 1s ease-in-out infinite",
        scrollDown: "scrollDown 3s linear infinite",
        wiggle: "wiggle 10s ease-in-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};