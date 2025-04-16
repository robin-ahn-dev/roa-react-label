/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#0E0E11",
                secondary: "#18181A",
                apple: {
                    50: "#f1fbea",
                    100: "#dff5d2",
                    200: "#c0ecaa",
                    300: "#98de78",
                    400: "#74cd4e",
                    500: "#54b32f",
                    600: "#469f26",
                    700: "#326d1e",
                    800: "#2b571d",
                    900: "#274a1d",
                    950: "#11280b",
                },
            },
        },
    },
    plugins: [],
};
