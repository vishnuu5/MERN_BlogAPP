/** @type {import('tailwindcss').Config} */
import { join } from 'path';


export default {
  content: [join(__dirname, 'src/**/*.{html,js,jsx,ts,tsx}')],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwind-scrollbar'),
  ],
};
