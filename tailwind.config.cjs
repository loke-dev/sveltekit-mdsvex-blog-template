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
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'ui-monospace', 'monospace'],
      },
      colors: {
        primary: "#FF295D",
        secondary: "#FFBA02",
        background: "#030E29",
        "background-faded": "#101254",
        "background-faded-hover": "#10125450",
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
      backgroundImage: {
        spots: `
          radial-gradient(circle at 10% 30%, rgb(255 41 93 / 0.25), transparent 35%),
          radial-gradient(circle at 95% 40%, rgb(255 186 2 / 0.25), transparent 35%),
          radial-gradient(circle at 35% 90%, rgb(255 41 93 / 0.25), transparent 35%),
          radial-gradient(circle at 60% 20%, rgb(255 186 2 / 0.20), transparent 20%)
        `,
        'radial-fade': 'radial-gradient(circle at center, transparent 10%, rgba(3, 14, 41, 0.1) 50%, rgba(3, 14, 41, 0.4) 100%)',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: '#efebe9',
            strong: {
              color: '#efebe9',
            },
            h1: {
              color: '#ffffff',
            },
            h2: {
              color: '#ffffff',
            },
            h3: {
              color: '#ffffff',
            },
            h4: {
              color: '#ffffff',
            },
            li: {
              color: '#efebe9',
            },
            a: {
              color: theme('colors.primary'),
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'initial',
              },
            },
            pre: {
              color: 'none',
              backgroundColor: '#001445',
            },
            code: {
              color: '#FF295D',
            },
          },
        },
      }),
      animation: {
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'fadeIn': 'fadeIn 0.8s ease-out',
        'grid-move': 'grid-move 30s linear infinite',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.1)' },
        },
        'fadeIn': {
          'from': { opacity: '0', transform: 'translateY(10px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'grid-move': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 30px' },
        },
      },
      rotate: {
        'x-5': 'rotateX(5deg)',
      },
      perspective: {
        '800px': '800px',
      },
      transformOrigin: {
        'top-center': 'center top',
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/aspect-ratio")],
  future: {
    hoverOnlyWhenSupported: true,
  },
}

module.exports = config
