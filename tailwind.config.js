/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Luxury Fashion Editorial Typography
        'script': ['Great Vibes', 'Allura', 'cursive'], // For decorative script elements
        'serif-display': ['Playfair Display', 'Bodoni Moda', 'serif'], // High-contrast serif for headings
        'serif-body': ['Libre Baskerville', 'Times New Roman', 'serif'], // Classic serif for body text
        'sans-display': ['Oswald', 'Anton', 'sans-serif'], // Bold sans-serif for impact
        'sans-body': ['Montserrat', 'Source Sans Pro', 'sans-serif'], // Clean sans-serif for readability
        'sans-condensed': ['Oswald', 'Anton', 'sans-serif'], // Condensed for strong statements
      },
      colors: {
        // Luxury Fashion Editorial Color Palette
        cream: {
          50: '#FEFEFE',
          100: '#FDFCFA',
          200: '#FBF9F5',
          300: '#F8F7F2',
          400: '#F5F3ED',
          500: '#F2F0E8',
          600: '#E8E5DB',
          700: '#DED9CE',
          800: '#D4CDC1',
          900: '#CAC1B4',
        },
        charcoal: {
          50: '#F7F7F7',
          100: '#E8E8E8',
          200: '#D1D1D1',
          300: '#B8B8B8',
          400: '#9F9F9F',
          500: '#666666',
          600: '#4D4D4D',
          700: '#333333',
          800: '#1A1A1A',
          900: '#000000',
        },
        burgundy: {
          50: '#FDF7F7',
          100: '#F9E8E8',
          200: '#F2D1D1',
          300: '#E8B3B3',
          400: '#D98A8A',
          500: '#C85A5A',
          600: '#A52D2D',
          700: '#8B0000',
          800: '#6B0000',
          900: '#4B0000',
        },
        gold: {
          50: '#FFFEF7',
          100: '#FFFCE8',
          200: '#FFF8D1',
          300: '#FFF3B8',
          400: '#FFED9F',
          500: '#D4AF37',
          600: '#B8941F',
          700: '#9C7A0A',
          800: '#806000',
          900: '#644600',
        },
        // Subtle accent colors for interactive elements
        accent: {
          50: '#F8F5F0',
          100: '#F0E8D8',
          200: '#E8DBC0',
          300: '#E0CEA8',
          400: '#D8C190',
          500: '#D0B478',
          600: '#C8A760',
          700: '#C09A48',
          800: '#B88D30',
          900: '#B08018',
        }
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      }
    },
  },
  plugins: [],
}
