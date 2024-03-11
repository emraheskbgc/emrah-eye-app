/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'daire1-bg': "url('/assets/images/daire1.png')",
        'daire2-bg': "url('/assets/images/daire2.png')",
        'daire3-bg': "url('/assets/images/daire3.jpeg')",
      },
      
    },
    colors:{
      grayHead:"#606060",
      grayIcon:"#ffffff"
    }
  },
  plugins: [],
};
