/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        footer: "0 -1px 2px rgba(0, 0, 0, 0.05)",
      },
      gridTemplateColumns: {
        manage8: "repeat(8, minmax(8rem, 1fr))",
        manage7: "repeat(7, minmax(8rem, 1fr))",
        manage6: "repeat(6, minmax(8rem, 1fr))",
        manage5: "repeat(5, minmax(8rem, 1fr))",
        manage4: "repeat(4, minmax(8rem, 1fr))",
        manage3: "repeat(3, minmax(8rem, 1fr))",
        manage2: "repeat(2, minmax(8rem, 1fr))",
        manage1: "repeat(1, minmax(8rem, 1fr))",
      },
    },
  },
  plugins: [],
};
