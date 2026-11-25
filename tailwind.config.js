/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Plus Jakarta Sans"',
          '"Noto Sans SC"',
          '"PingFang SC"',
          '"Hiragino Sans GB"',
          '"Microsoft YaHei"',
          'system-ui',
          'sans-serif',
        ],
        mono: [
          '"JetBrains Mono"',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
      colors: {
        canvas: {
          light: '#FAF9F5',
          dark: '#0B0E11',
        },
        surface: {
          light: '#FFFFFF',
          dark: '#12161C',
        },
        ink: {
          light: '#16181D',
          dark: '#F3F4F6',
        },
        pine: {
          50: '#F0FDF9',
          100: '#CCFBF1',
          200: '#99F6E4',
          500: '#14B8A6',
          600: '#0D9488',
          700: '#0F766E',
          800: '#115E59',
          900: '#134E4A',
        },
      },
      boxShadow: {
        editorial: '0 1px 2px rgba(22, 24, 29, 0.04), 0 8px 24px -12px rgba(22, 24, 29, 0.08)',
        'editorial-hover': '0 2px 6px rgba(22, 24, 29, 0.06), 0 18px 36px -14px rgba(15, 118, 110, 0.14)',
      },
    },
  },
  plugins: [],
};
