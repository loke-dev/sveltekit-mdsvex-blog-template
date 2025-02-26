const colors = require("tailwindcss/colors")

const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
      "8xl": "6rem",
    },
    extend: {
      colors: {
        primary: "#FF295D",
        secondary: "#FFBA02",
        background: "#030E29",
        "background--faded": "#101254",
        faded: "#c6c7c950",
        teal: colors.teal,
        cyan: colors.cyan,
        brown: {
          DEFAULT: "#795548",
          50: "#efebe9",
        },
      },
      screens: {
        "3xl": "1720px",
      },
      lineHeight: {
        hero: "4.5rem",
      },
      flex: {
        layout: "1 0 auto",
        1: "1",
      },
      backgroundImage: (theme) => ({
        spots: `
          radial-gradient(circle at 10% 30%, ${theme("colors.primary")}25, transparent 35%),
          radial-gradient(circle at 95% 40%, ${theme("colors.secondary")}25, transparent 35%),
          radial-gradient(circle at 35% 90%, ${theme("colors.primary")}25, transparent 35%),
          radial-gradient(circle at 60% 20%, ${theme("colors.secondary")}20, transparent 20%)
        `,
      }),
      typography: (theme) => ({
        DEFAULT: {
          css: {
            p: {
              color: "#efebe9",
            },
            strong: {
              color: "#efebe9",
            },
            h1: {
              color: "#ffffff",
            },
            h2: {
              color: "#ffffff",
            },
            h3: {
              color: "#ffffff",
            },
            h4: {
              color: "#ffffff",
            },
            li: {
              color: "#efebe9",
            },
            a: {
              color: theme("colors.primary"),
              textDecoration: "none",
              "&:hover": {
                textDecoration: "initial",
              },
            },
            pre: {
              color: "none",
            },
            code: {
              color: "#FFBA02",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/aspect-ratio")],
}

module.exports = config
