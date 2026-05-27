module.exports = {
  content: ["./src/**/*.{ts,tsx,js,jsx}", "./app/**/*.{ts,tsx,js,jsx}", "./src/app/**/*.{ts,tsx}", "./src/pages/**/*.{ts,tsx}"] ,
  theme: {
    extend: {
      colors: {
        bg1: '#0b0b0c',
        bg2: '#141212',
        primary: '#D4AF37',
        accent: '#8B1E1E',
        danger: '#EF4444',
        surface: '#11100F',
        text: '#F6EBD9',
        muted: '#A99B8F'
      },
      boxShadow: {
        soft: '0 10px 30px rgba(2,6,23,0.12)',
        card: '0 18px 40px rgba(2,6,23,0.12)'
      },
      borderRadius: {
        xl: '20px'
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
}
