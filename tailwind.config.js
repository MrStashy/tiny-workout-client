/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'tiny-orange': '#D06010',
        'form-font': '#F5F5F5'
      },
      width: {
        'login-form': '331px',
        'logo': '79px'
      },
      height: {
        'login-form': '43px',
        'logo': '43px'
      },
      backgroundImage: {
        'app-bg': "url('src/assets/img/bg-image.JPG')"
      },
      fontFamily: {
        'inter': ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
};
