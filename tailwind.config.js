module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js",
    './src/**/*.{js,jsx}', 
    './public/index.html'],
  mode: ['jit'],
  theme: {
    extend: {
      gridTemplateRows: {
        '8': 'repeat(8, minmax(0, 1fr))',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
