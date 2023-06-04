/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
            "./*.{html,js}"],
  theme: {
    colors:{
    'page-back':'#ecf2ff',
    'white':'#ffffff',
    'red':'#ff5757',
    'orangey':'#ffb01f',
    'green':'	#00bd91',
    'cobalt':'#1125d4',
    'backgrad1':'hsla(252, 100%, 67%, 1)',
    'backgrad2':'hsla(252, 100%, 63%, 1)',
    'backgrad3':'hsla(241, 81%, 54%, 1)',
    'totalgrad':' linear-gradient(180deg, #7755FF 0%, #6943FF 0.01%, #2F2CE9 100%)'

    },
    extend: {
      fontFamily:{
        HankenGrotesk:['Hanken Grotesk','sans-serif']
      },
    },
  },
  plugins: [],
}

