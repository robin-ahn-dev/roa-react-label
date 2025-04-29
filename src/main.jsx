import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Styles
import "./style.scss";

// Pages
import { App, Buttons, Texts } from "./pages/-pages.js";
import { Navbar } from "./modules/-modules.js";
import { PagesProvider } from "./hooks/usePages.jsx";

const Main = () => {
    useEffect(() => {
        const isDarkMode = window.matchMedia(
            "(prefers-color-scheme: dark)",
        ).matches;

        if (localStorage.getItem("colormode") == "dark") {
            document.documentElement.classList.add("dark");
        } else if (localStorage.getItem("colormode") == "light") {
            document.documentElement.classList.remove("dark");
        } else {
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
