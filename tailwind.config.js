export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        trust: {
          high: { bg: '#E1F5EE', border: '#1D9E75', text: '#085041' },
          medium: { bg: '#FAEEDA', border: '#EF9F27', text: '#633806' },
          low: { bg: '#F1EFE8', border: '#888780', text: '#444441' },
        }
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}
