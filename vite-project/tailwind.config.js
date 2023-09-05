/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'BB': ['PretendardBlack'],
        'B': ['PretendardBold'],
        'SB': ['PretendardSemibold'],
        'R': ['PretendardRegular']
      },
      colors: {
        'gray100':'#FAFAFB',
        'gray200':'#D8DADF',
        'gray300':'#ACB0BA',
        'gray400':'#7F8694',
        'gray500':'#515761',
        'gray600':'#383C43',
        'gray700':'#2B2E34',
        'gray800':'#1E2024',
        'gray900':'#010101',
      },
    },
  },
  plugins: [],
}