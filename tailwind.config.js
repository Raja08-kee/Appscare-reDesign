/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep Futuristic Palette
        enterprise: "#020617", // Space Black/Navy
        connect: "#0ea5e9",    // API/Middleware Blue
        sync: "#8b5cf6",       // Integration Purple
        flow: "#22d3ee",       // Data Cyan

        // Legacy Support
        primary: {
          DEFAULT: '#0ea5e9',
          light: '#38bdf8',
          dark: '#0284c7',
        },
        tech: {
          bg: '#ffffff',
          surface: '#f8fafc',
          border: '#e2e8f0',
        }
      },
      animation: {
        'blob': 'blob 7s infinite',
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 40s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'data-flow': 'data-flow 3s linear infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        glow: {
          '0%, 100%': { opacity: 0.3, filter: 'blur(20px)' },
          '50%': { opacity: 0.6, filter: 'blur(40px)' },
        },
        'data-flow': {
          '0%': { 'stroke-dashoffset': '1000' },
          '100%': { 'stroke-dashoffset': '0' },
        }
      },
      backgroundImage: {
        'grid-white': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='white' stroke-opacity='0.05'%3E%3Cpath d='M0 .5H31.5V32'/%3E%3C/svg%3E\")",
      }
    },
  },
  plugins: [],
}