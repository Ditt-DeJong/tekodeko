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
        primary: "#3D2B1F",
        "primary-light": "#5A4435",
        secondary: "#8B4513",
        accent: "#D4AF37",
        "accent-soft": "#E6B17E",
        "bg-vintage": "#FDFCF9",
        "bg-dark": "#1A1512",
        "text-main": "#2C241D",
        "text-muted": "#6B5E51",
        "text-light": "#F5E6D3",
      },
      fontFamily: {
        serif: ["Lora", "serif"],
        outfit: ["Outfit", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      backdropBlur: {
        '20': '20px',
      }
    },
  },
  plugins: [],
};
