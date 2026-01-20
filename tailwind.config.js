/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                // Default Theme (Blau)
                primary: "var(--color-primary)",
                primarytext: "var(--color-primarytext)",

                secondary: "var(--color-secondary)",
                secondarytext: "var(--color-secondarytext)",

                accent: "var(--color-accent)",
                accenttext: "var(--color-accenttext)",

                surfaceLight: "var(--color-surfaceLight)",
                surfaceLightText: "var(--color-surfaceLightText)",
                surfaceLightBg: "var(--color-surfaceLightBg)",
                surfaceLightBgText: "var(--color-surfaceLightBgText)",
                surfaceLightHl: "var(--color-surfaceLightHl)",
                surfaceLightHlText: "var(--color-surfaceLightHlText)",
                surfaceLightBorder: "var(--color-surfaceLightBorder)",

                surfaceDark: "var(--color-surfaceDark)",
                surfaceDarkText: "var(--color-surfaceDarkText)",
                surfaceDarkBg: "var(--color-surfaceDarkBg)",
                surfaceDarkBgText: "var(--color-surfaceDarkBgText)",
                surfaceDarkHl: "var(--color-surfaceDarkHl)",
                surfaceDarkHlText: "var(--color-surfaceDarkHlText)",
                surfaceDarkBorder: "var(--color-surfaceDarkBorder)",
            },
            borderRadius: {
                normal: "var(--border-radius-normal)",
                card: "var(--border-radius-card)",
            },
            borderWidth: {
                thin: "var(--border-width-thin)",
            },
        },
    },
    plugins: [],
};
