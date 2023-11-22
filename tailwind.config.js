/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            screens: {
                ldxs: { raw: "(max-height: 530px)" },
            },
            colors: {
                c_black: "#000000",
                c_purpleB: "#1b0b1b",
                c_purple: "#522151",
                c_purpleC: "#6A5ACD",
                c_pinkB: "#8c415d",
                c_pink: "#c67591",
                c_pinkC: "#ffa9c5",
            },
        },
        screens: {
            xs: "475px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
            "3xl": "1750px",
            "4xl": "1936px",
            "5xl": "2280px",
        },
    },
    plugins: [],
};
