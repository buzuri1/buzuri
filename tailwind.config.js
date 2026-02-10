/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'electric-blue': '#00FFFF',
                'dark-bg': '#000000',
                'card-bg': '#0a0a0a',
                'card-border': '#1a1a1a',
            },
            fontFamily: {
                sans: ['Manrope', 'sans-serif'],
                brand: ['Playwrite AU TAS', 'cursive'],
                display: ['Staatliches', 'sans-serif'],
            },
            animation: {
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 6s ease-in-out infinite',
                'gradient-border': 'gradient-border 3s ease infinite',
            },
        },
    },
    plugins: [],
}
