/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#070a12',
          card: 'rgba(17, 24, 39, 0.7)',
          surface: '#111827',
          border: 'rgba(255, 255, 255, 0.1)',
        },
        tech: {
          blue: '#3b82f6',
          purple: '#8b5cf6',
          cyan: '#38bdf8',
          lightGrey: '#9ca3af',
          darkGrey: '#1f2937',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Fira Code', 'Consolas', 'monospace'],
      },
      backgroundImage: {
        'tech-gradient': 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
        'glow-radial': 'radial-gradient(circle at center, rgba(139, 92, 246, 0.15) 0%, rgba(59, 130, 246, 0.05) 50%, transparent 100%)',
      }
    },
  },
  plugins: [],
}
