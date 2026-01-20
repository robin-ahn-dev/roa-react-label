import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Styles
import "./style.scss";

// Pages
import { App, Buttons, Texts, Inputs } from "./pages/-pages.js";
import { Navbar } from "./modules/-modules.js";
import { PagesProvider } from "./hooks/usePages.jsx";

const Main = () => {
    useEffect(() => {
        // Theme initialisieren
        const savedTheme = localStorage.getItem("theme");
        const theme = savedTheme || "default";
        document.documentElement.setAttribute("data-theme", theme);

        // Dark Mode initialisieren
        const savedMode = localStorage.getItem("colormode");
        const isDarkMode = window.matchMedia(
            "(prefers-color-scheme: dark)",
        ).matches;

        if (savedMode === "dark") {
            document.documentElement.classList.add("dark");
        } else if (savedMode === "light") {
            document.documentElement.classList.remove("dark");
        } else {
            // Fallback: System-Präferenz verwenden
            if (isDarkMode) {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
        }
    }, []);

    return (
        <Router>
            <PagesProvider>
                <Navbar />
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/texts" element={<Texts />} />
                    <Route path="/buttons" element={<Buttons />} />
                    <Route path="/inputs" element={<Inputs />} />
                </Routes>
            </PagesProvider>
        </Router>
    );
};

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Main />
    </StrictMode>,
);
