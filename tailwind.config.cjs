/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        footer: "0 -1px 2px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
