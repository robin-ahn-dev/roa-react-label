/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#479eef",
                primarytext: "#ffffff",

                secondary: "#0060ba",
                secondarytext: "#ffffff",

                accent: "#9b00ba",
                accenttext: "#ffffff",

                surfaceLight: "#ffffff",
                surfaceLightText: "#000000",
                surfaceLightBg: "#ffffff",
                surfaceLightBgText: "#000000",
                surfaceLightHl: "#e1e2e6",
                surfaceLightHlText: "#000000",
                surfaceLightBorder: "#d4d4d8",

                surfaceDark: "#1b1b1b",
                surfaceDarkText: "#ffffff",
                surfaceDarkBg: "#1b1b1b",
                surfaceDarkBgText: "#ffffff",
                surfaceDarkHl: "#27272a",
                surfaceDarkHlText: "#ffffff",
                surfaceDarkBorder: "#27272a",
            },
            borderRadius: {
                normal: "10px",
            },
            borderWidth: {
                thin: "1px",
            },
        },
    },
    plugins: [],
};
