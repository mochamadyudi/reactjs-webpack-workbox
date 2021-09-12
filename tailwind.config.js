
const { colors: defaultColors } = require('tailwindcss/defaultTheme')
const colors = {
  ...defaultColors,
  ...{
    "red-lighter": {
      "100": "#ffd6da",
      "400": "#f05851",
    },

    "yellow":{
      "default":"#ffeb3b",
      "50": "#fffde7",
      "100": "#fff9c4",
      "200": "#fff59d",
      "300": "#fff176",
      "400": "#ffee58",
      "500": "#ffeb3b",
      "600": "#fdd835",
      "700": "#fbc02d",
      "800": "#f9a825",
      "900": "#f57f17",
      "100-accent": "#ffff8d",
      "200-accent": "#ffff00",
      "300-accent": "#ffea00",
      "400-accent": "#ffd600",
    },
    "cyan":{
      "default": "#00bcd4",
      "50": "#cdf5fa",
      "100": "#b2ebf2",
      "200": "#80deea",
      "300": "#4dd0e1",
      "400": "#26c6da",
      "500": "#00bcd4",
      "600": "#00acc1",
      "700": "#0097a7",
      "800": "#00838f",
      "900": "#00b8d4",
      "100-accent": "#006064",
      "200-accent": "#84ffff",
      "300-accent": "#18ffff",
      "400-accent": "#00e5ff",
    },
    "scheme": {
      "primary": "#1f2d3d",
      "primary-light":"#323e4f",
      "secondary": "#3c4858",
      "secondary_hover": "#596573",


      "yellow": "#F1CC00",
      "orange": "#FF4800",
      "green": "rgb(104, 214, 57)",
      "gray": "#3e3e3e",
      "red": "rgb(217,46,82)",
      "red-light": "rgb(232, 93, 117)",
      "dark-green": "#2bcdb1",
      "dark-blue": "#00016B",
      "green-85": "rgba(114,204,185, .85)",
      "primary-hover": "#cd342d",
      "primary-pink": "#FFD6DA",
      "primary-custom": "#fff000",
      "primary-green": "#BEF0E0",
      "primary-yellow": "#F1CC00",
      "blue": "#3db4f2",
      "blue-light": "#53bdf5",
      "blue-dark": "#338cbc",
    },
  },
}
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html', './dist/*.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'pops': ['Poppins'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': 'var(--font-family)',
      'body': ['DIN2014', 'sans-serif'],
    },
    shadows: {
      'red': '0 2px 4px 0 rgba(255, 0, 0, 0.10)',
      'green': '0 2px 4px 0 rgba(0, 255, 0, 0.10)',
      'blue': '0 2px 4px 0 rgba(0, 0, 255, 0.10)',
      'custom-hex-color': '0 2px 4px 0 #af9cdd',
    },
    extend: {},
    colors: colors
  },
  extend:{
    animation: {
      fadeIn: "fadeIn 2s ease-in forwards"
    },
    keyframes: {
      fadeIn: {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 }
      }
    }
  },
  variants: {
    extend: {
      display: ['hover', 'focus']
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
  ],
}
