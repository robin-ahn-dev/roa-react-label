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
                cardbg: "#151517",
            },
            borderRadius: {
                normal: "10px",
            },

            // Theme Blue
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
