/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            'Montserrat': ['Montserrat'],
        },
        extend: {
            width: {
                "w-522": '522px',
            },
            height: {
               a4: '297mm',
            },
        },
    },
    plugins: [],
}

