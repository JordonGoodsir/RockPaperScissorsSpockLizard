/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], theme: {
    extend: {
      fontFamily: {
        sans: ["Barlow Semi Condensed", 'sans-serif']
      },
      screens: {
        'xl-1/2': '1366px',
      },
      maxWidth: {
        'xl-1/2': '1366px',
      },
      colors: {
        'DarkText': 'hsl(229, 25%, 31%)',
        'ScoreText': 'hsl(229, 64%, 46%)',
        'HeaderOutline': 'hsl(217, 16%, 45%)',
      },
      backgroundImage: {
        'RadialGradient': 'radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%))',
        'ScissorsGradient': 'linear-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))',
        'PaperGradient': 'linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))',
        'RockGradient': 'linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))',
        'LizardGradient': 'linear-gradient(hsl(261, 73%, 60%), hsl(261, 72%, 63%))',
        'SpockGradient': 'linear-gradient(hsl(189, 59%, 53%), hsl(189, 58%, 57%))',
      }
    },
  },
  plugins: [],
}