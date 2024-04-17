/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '992px',
      // => @media (min-width: 992px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1200px) { ... }

      '2xl': '1600px',
      // => @media (min-width: 1480px) { ... }
    },
    extend: {
      colors: {
        'tiber': '#15403f',
        'vi': '#ee4697',
        'khaki': '#FFF8F4',
        'coffee': '#866163',
        'swamp': '#535C53',
        'shell': '#ddd7cc',
      },
      fontFamily: {
        source: ['Source Serif 4', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  corePlugins: {
    container: false
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '575px',
          },
          '@screen md': {
            maxWidth: '767px',
          },
          '@screen lg': {
            maxWidth: '991px',
          },
          '@screen xl': {
            maxWidth: '1199px',
          },
          '@screen 2xl': {
            maxWidth: '1570px',
          },
        }
      })
    }
  ]
}

