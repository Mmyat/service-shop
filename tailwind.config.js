/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Poppins',
    },
    extend: {
      animation: {
        spin: 'spin 1s linear infinite',
        slowspin: 'spin 1.5s linear infinite',
      },
      colors: {
        primary: '#3da9fc',
        Secondary:'#282162',
        tertiary:'#848191',
        light:'#fffff',
        dark: '#1E1E1E',
        btntext : "#001858",
        title : "#001858",
        paragraph: "#172c66",
        cardbg : "#90b4ce",
      }
    },
  },
  plugins: [],
}

