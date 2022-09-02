/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    // screens: {
    //   sm: '480px',
    //   md: '768px',
    //   lg: '976px',
    //   xl: '1440px',
    // },
    extend: {
      colors: {
        primaryDark: 'hsl(26, 100%, 55%)',
        primaryLight: 'hsl(25, 100%, 94%)',
        secondaryDark: 'hsl(220, 13%, 13%)',
        secondaryLight: 'hsl(219, 9%, 45%)',
        tertiaryDark: 'hsl(220, 14%, 75%)',
        tertiaryLight: 'hsl(223, 64%, 98%)',
        white: 'hsl(0, 0%, 100%)',
        black: 'hsl(0, 0%, 0%)',
      },
    },
  },
  plugins: [],
}
