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
                green: {
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
                },
                gray: {
                    '900': '#121212'
                }
            },
            backgroundImage: {
                'gradient-black': 'linear-gradient(344deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)',
                'gradient-lightgreen': 'radial-gradient(circle, rgba(230,237,235,1) 0%, rgba(191,211,205,1) 100%)',
                'gradient-darkgreen': 'radial-gradient(circle, rgba(0,38,26,1) 0%, rgba(0,77,54,1) 100%)',
            }
        }
    },
    plugins: [
        require('flowbite/plugin')
    ],
}
