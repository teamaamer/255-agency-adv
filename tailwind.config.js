/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f4f2ee",
        light: "#fafaf9",
        dark: "#0e0e0e",
        "dark-charcoal": "#111111",
        "dark-gray": "#2d2d2d",
        "medium-gray": "#6b6b6b",
        "light-gray": "#e8e6e3",
        foreground: "#1a1a1a",
        white: "#ffffff",
        primary: "#ff3600",
        "primary-dark": "#e63000",
        secondary: "#fef701",
      },
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
        serif: ["Merriweather", "serif"],
        arabic: ["var(--font-Madani-Arabic-Font-Family)", "sans-serif"],
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1300px",
        "2xl": "1600px",
      },
      boxShadow: {
        xl: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
        "2xl": "0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        float: "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
