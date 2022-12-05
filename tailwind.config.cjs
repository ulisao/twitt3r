/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e40af",
        secondary: "#2d3748",
        accent: "#ed8936",
        muted: "#e2e8f0",
      },
    },
  },
  plugins: [],
};
