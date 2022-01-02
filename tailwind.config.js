module.exports = {
  content: [
    "./components/*.js",
    "./pages/**/*.js",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            pre: false,
            code: false,
            "pre code": false,
            "code::before": false,
            "code::after": false
          },
        },
        dark: {
          css: {
            color: 'white',
            'h1,h2,h3,h4': {
              color: 'white',
            },
            strong: {
              color: 'white',
            },
            a: {
              color: theme('colors.indigo.400'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
}
