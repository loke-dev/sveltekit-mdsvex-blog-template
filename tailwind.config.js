import typography from '@tailwindcss/typography';
import aspectRatio from '@tailwindcss/aspect-ratio';

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{html,js,svelte,ts,md,svx}"],
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
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        tertiary: '#4b2ec6',
        background: 'var(--color-background)',
        "background-faded": "#101254",
        "background-faded-hover": "#10125450",
        "background-code": "#001445",
        faded: "#c6c7c950",
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
        'grid-pattern': `
          linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
        `,
        'footer-glow': `
          linear-gradient(90deg,
            rgba(255, 41, 93, 0.7),
            rgba(255, 186, 2, 0.7),
            rgba(75, 46, 198, 0.7),
            rgba(255, 41, 93, 0.7)
          )
        `,
        'header-glow': `
          linear-gradient(90deg,
            rgba(255, 41, 93, 0.7),
            rgba(255, 186, 2, 0.7),
            rgba(75, 46, 198, 0.7),
            rgba(255, 41, 93, 0.7)
          )
        `,
        'gradient-primary': `
          linear-gradient(90deg, #FF295D, #FFBA02, #4b2ec6, #FF295D)
        `,
        'radial-gradient': 'radial-gradient(circle at center, var(--tw-gradient-from) 0%, var(--tw-gradient-via) 70%, var(--tw-gradient-to) 100%)',
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
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'initial',
              },
            },
          },
        },
      }),
      animation: {
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'fadeIn': 'fadeIn 0.8s ease-out',
        'grid-move': 'grid-move 30s linear infinite',
        'float-code': 'float-code 15s ease-in-out infinite',
        'pulse': 'pulse 4s infinite ease-in-out',
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
        'float-code': {
          '0%': { opacity: '0', transform: 'translateZ(-50px) translateY(0) translateX(0) rotate(0deg)' },
          '20%': { opacity: '0.7' },
          '50%': { transform: 'translateZ(50px) translateY(-20px) translateX(20px) rotate(5deg)', opacity: '0.7' },
          '80%': { opacity: '0.7' },
          '100%': { transform: 'translateZ(-50px) translateY(0) translateX(0) rotate(0deg)', opacity: '0' },
        },
        'pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
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
      backgroundSize: {
        '300-100': '300% 100%',
        '30px': '30px 30px',
      },
      boxShadow: {
        'glow-primary': '0 0 20px rgba(255, 41, 93, 0.3)',
        'glow-secondary': '0 0 20px rgba(255, 186, 2, 0.3)',
      },
      zIndex: {
        '-1': '-1',
      },
      animationDelay: {
        '1s': '-1s',
        '2s': '-2s',
        '3s': '-3s',
        '4s': '-4s',
        '5s': '-5s',
        '6s': '-6s',
        '7s': '-7s',
        '8s': '-8s',
        '9s': '-9s',
        '10s': '-10s',
        '12s': '-12s',
        '14s': '-14s',
        '16s': '-16s',
        '18s': '-18s',
      },
      textShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.2)',
        'md': '0 2px 8px rgba(0, 0, 0, 0.2)',
        'lg': '0 4px 12px rgba(0, 0, 0, 0.2)',
        'xl': '0 8px 16px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [
    typography,
    aspectRatio,
    function ({ addUtilities, theme }) {
      const animationDelays = theme('animationDelay', {});
      const utilities = Object.entries(animationDelays).map(([key, value]) => ({
        [`.animation-delay-${key}`]: { animationDelay: value },
      }));

      addUtilities(utilities);
    },
    function ({ addUtilities, theme }) {
      const textShadows = theme('textShadow', {});
      const utilities = Object.entries(textShadows).map(([key, value]) => ({
        [`.text-shadow-${key}`]: { textShadow: value },
      }));

      addUtilities(utilities);
    },
    function ({ addUtilities }) {
      addUtilities({
        '.transform-style-preserve-3d': {
          'transform-style': 'preserve-3d',
        },
      });
    }
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
};

export default config;