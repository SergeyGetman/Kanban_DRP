/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mainBackgroundColor: '#595c64',
        columnBackgroundColor: '#42586d',
        modalWindowStyle: '#57595b',
      },
    },
  },
  plugins: [],
};
