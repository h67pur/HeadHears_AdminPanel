/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",

    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                'white': '#ffffff',
                'blue': {
                    100: 'rgb(219 234 254)',
                    200: 'rgb(191 219 254)',
                    300: 'rgb(147 197 253)',
                    400: 'rgb(96 165 250)',
                    500: 'rgb(59 130 246)',
                    600: 'rgb(37 99 235)',
                    700: 'rgb(29 78 216)',
                    800: 'rgb(30 64 175)',
                    850: 'rgb(27,56,150)',
                    900: 'rgb(27,52,124)',
                    950: 'rgb(23 37 84)',
                },
            }
        },
    },
    plugins: [require('tailwindcss-primeui')],
}
