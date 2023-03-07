const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        '*.html',
        './js/app.js',
        './node_modules/flowbite/**/*.js'
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
            },
        },
        extend: {
            fontFamily: {
                primary: ['Inter', 'sans-serif'],
                secondary: ['DM Serif Text', 'serif']
            },
            colors: {
                'green': {
                    '50': '#f2f6f5', 
                    '100': '#e6edeb', 
                    '200': '#bfd3cd', 
                    '300': '#99b8af', 
                    '400': '#4d8272', 
                    '500': '#004d36', 
                    '600': '#004531', 
                    '700': '#003a29', 
                    '800': '#002e20', 
                    '900': '#00261a'
                }
            },
            backgroundImage: {
                main: 'url("/img/bg-main.webp")',
            }
        }
    },
    plugins: [
        require('flowbite/plugin')
    ],
}
