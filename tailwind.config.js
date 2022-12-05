/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            transitionProperty: {
                width: 'width',
                padding: 'padding',
            },
            boxShadow: {
                '3xl': '0 0 7px rgba(0, 0, 0, 0.9)',
            },
            keyframes: {
                fadeUp: {
                    from: { transform: 'translateY(100px);' },
                    to: { transform: 'translateY(0px);' },
                },
                fadeDown: {
                    from: { transform: 'translateY(-1000px);' },
                    to: { transform: 'translateY(0px);' },
                },
                scale: {
                    from: { transform: 'scale(3);', opacity: '0' },
                    to: { transform: 'translateX(-50%);', opacity: '1' },
                },
                down: {
                    from: { height: '100vh;' },
                    to: { height: '0' },
                },
                lighting: {
                    from: { opacity: '0' },
                    to: { opacity: '1' },
                },
                fadeLeft: {
                    '0%': { transform: 'translateX(-100%);', opacity: '0' },
                    '50%': { opacity: '0' },
                    '100%': { transform: 'translateX(0);', opacity: '1' },
                },
                blinkCursor: {
                    '0%,75%': {
                        opacity: '1',
                        animationTimingFunction: 'steps(3)',
                    },
                    '76%,100%': {
                        opacity: '0',
                        animationTimingFunction: 'steps(3)',
                    },
                },
                typing: {
                    '0%,90%,100%': {
                        width: '0',
                        animationTimingFunction: 'steps(4)',
                    },
                    '30%,60%': {
                        width: '100px',
                        animationTimingFunction: 'steps(4)',
                    },
                },
            },
            animation: {
                fadeUp: 'fadeUp 0.5s ease-in-out',
            },
        },
    },

    plugins: [require('tailwindcss-animation-delay')],
};
