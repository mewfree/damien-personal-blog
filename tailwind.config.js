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
            "code::before": {
              content: "''"
            },
            "code::after": {
              content: "''"
            },
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
