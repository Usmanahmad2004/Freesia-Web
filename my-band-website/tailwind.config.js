/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
      extend: {
        colors: {
          
        },
        fontFamily: {
          'sans': ['Outfit', 'sans-serif'],
          'display': ['Outfit', 'sans-serif'], // For headings/titles
          'mono': ['Fira Mono', 'monospace'],
        },
        animation: {
          'fade-in': 'fadeIn 1.5s ease-out',
          'slide-up': 'slideUp 0.6s ease-out',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          slideUp: {
            '0%': { transform: 'translateY(20px)', opacity: '0' },
            '100%': { transform: 'translateY(0)', opacity: '1' },
          },
        },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'noise-pattern': "url('/images/noise.png')",
        }
      },
    },
    plugins: [],
  }