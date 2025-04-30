/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#18181a",
                secondary: "#ffffff",
                primarytext: "#18181a",
                secondarytext: "#ffffff",
                accenttext: "#2564eb",
                primarybg: "#ffffff",
                secondarybg: "#0e0e11",
                accentbg: "#2564eb",
                cardbgDark: "#151517",
                cardbgDarkHl: "#27272a",
                cardbgLight: "#ffffff",
                cardbgLightHl: "#e1e2e6",
                borderDark: "#27272a",
                borderLight: "#d4d4d8",
            },
            borderRadius: {
                normal: "10px",
            },
            borderWidth: {
                thin: "1px",
            },

            // Theme Green
            // colors: {
            //     primary: "#21c55e",
            //     secondary: "#21c55e",
            //     primarytext: "#ffffff",
            //     secondarytext: "#ffffff",
            //     accenttext: "#21c55e",
            //     primarybg: "#ffffff",
            //     secondarybg: "#0e0e11",
            //     cardbg: "#1c1918",
            // },
            // borderRadius: {
            //     normal: "100px",
            // },
        },
    },
    plugins: [],
};
