/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
            "./*.{html,js}"],
  theme: {
    colors:{
    'page-back':'#ecf2ff',
    'mobile-back':'#f4f7ff',
    'white':'#ffffff',
    'lightBlue':'#CAC9FF',
    'red':'#ff5757',
    'orangey':'#ffb01f',
    'green':'#00bd91',
    'cobalt':'#1125d4',
    'darkNavy':'#303B59',
    'backgrad1':'hsl(252, 100%, 67%)',
    'backgrad2':'hsl(241, 81%, 54%)',
    'circlegrad1':'hsla(256, 72%, 46%, 1)',
    'circlegrad2':'hsla(241, 72%, 46%, 0)',
    'redHue':'hsla(0, 100%, 67%, 0.1)',
    'yellowHue':'hsl(39, 100%, 56%,0.1)',
    'greenHue':'	hsl(166, 100%, 37%,0.1)',
    'cobaltHue':'hsl(234, 85%, 45%,0.1)',
    'darkHue':'hsl(224, 30%, 27%,0.4)',

    },
    extend: {
      fontFamily:{
        HankenGrotesk:['Hanken Grotesk','sans-serif']
      },
      maxWidth:{
        '420':'420px'
      }
    },
  },
  plugins: [],
}

