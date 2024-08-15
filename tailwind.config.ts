import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                primary: '#E0E0DB',
                secondary: '#609092',
                tertiary: '#384E77',
                quaternary: '#FFC000',
            },
            fontFamily: {
                degular: ['Degular', 'sans-serif'],
                acumin: ['Acumin Pro', 'sans-serif'],
            },
            backgroundImage: {
                project: "url('/assets/img/project-display.jpg')",
            },
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1.8rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '12rem',
            },
        },
    },
    plugins: [],
};
export default config;
