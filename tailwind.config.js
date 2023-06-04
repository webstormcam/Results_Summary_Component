/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
            "./*.{html,js}"],
  theme: {
    colors:{
    'page-back':'#ecf2ff',
    'white':'#ffffff',
    'lightBlue':'#CAC9FF',
    'red':'#ff5757',
    'orangey':'#ffb01f',
    'green':'	#00bd91',
    'cobalt':'#1125d4',
    'backgrad1':'hsl(252, 100%, 67%)',
    'backgrad2':'hsl(241, 81%, 54%)',
    'circlegrad1':'hsla(256, 72%, 46%, 1)',
    'circlegrad2':'hsla(241, 72%, 46%, 0)',

    },
    extend: {
      fontFamily:{
        HankenGrotesk:['Hanken Grotesk','sans-serif']
      },
    },
  },
  plugins: [],
}

