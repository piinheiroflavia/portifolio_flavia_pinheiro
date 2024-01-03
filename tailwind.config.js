/** @type {import('tailwindcss').Config} */
import aspectRatioPlugin from '@tailwindcss/aspect-ratio';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

    },
    colors:{
      paleta:{
        purple1: '#6100DB',
        purple2: '#9546DB',  
        purple3: '#ab47bc',
        bgfundoClaro: '#e2e8f0',
        
        //cor escura
        bgfundoEscuro: '#120e16'

      }
    }
  },
  plugins: [
    aspectRatioPlugin,
  ],
}
