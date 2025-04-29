/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "primary": "#000000",
                "secondary": "#ffffff",
                "primarytext": "#000000",
                "secondarytext": "#ffffff",
                "primarybg": "#ffffff",
                "secondarybg": "#0e0e11",
            },
            borderRadius: {
                "normal": "10px",
            },
            
            // Theme Blue
            // colors: {
            //     "primary": "#2564eb",
            //     "secondary": "#2564eb",
            //     "primarytext": "#ffffff",
            //     "secondarytext": "#ffffff",
            //     "primarybg": "#ffffff",
            //     "secondarybg": "#000000",
            // },
            // borderRadius: {
            //     "normal": "100px",
            // },
        },
    },
    plugins: [],
};
