  module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        margin: {
          'custom-left': '20px',
          'custom-left2':'24px',
          'custom-left3':'40px',
          'custom-left4':'60px'

        },
      },
      screens: {
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        "2xl": '1536px'

      },
    },
    plugins: [],
  }
