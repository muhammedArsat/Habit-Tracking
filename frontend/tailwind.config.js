/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            boxShadow: {
                'custom-light': '0 4px 12px rgba(0, 0, 0, 0.1)',
                'custom-dark': '0 4px 12px rgba(255, 255, 255, 0.2)',
            },
        },
    },
    plugins: [],
};
