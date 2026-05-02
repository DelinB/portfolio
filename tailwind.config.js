// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        // Force all colors to be defined in RGB/hex
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        // add other color families as needed
      }
    }
  },
  experimental: {
    optimizeUniversalDefaults: true
  }
}