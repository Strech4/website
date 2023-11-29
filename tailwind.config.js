/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor:{
        "backgound": "#0D141F",
      },
      colors:{
        "high-contrast": "#C2F3FF",
        "low-contrast": "#75C7F0",
        'border': "#1F6692",
        "elm-bg": "#112840",
        "elm-hover": "#113555",
        "gradient-1": "#113555",
        "gradient-2": "#1B537B",
        "gradient-3": "#7CE2FE",
      },
      fontFamily:{
        oxy: ['var(--font-oxy)']
      },
      width:{
        "xxs": "180px"
      },
    },
  },
  plugins: [],
}
