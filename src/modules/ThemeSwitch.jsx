import React, { useState, useEffect } from "react";

// Icons
import { Palette } from "lucide-react";

// Components
import { Button } from "../components/-components.js";

function ThemeSwitch() {
    const [theme, setTheme] = useState(() => {
        // Initial state aus localStorage lesen
        const savedTheme = localStorage.getItem("theme");
        return savedTheme || "default";
    });

    useEffect(() => {
        // Theme auf HTML-Element setzen
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const handleThemeSwitch = () => {
        const newTheme = theme === "default" ? "typo3" : "default";
        setTheme(newTheme);
    };

    return (
        <Button
            onlyIcon={<Palette />}
            onClick={handleThemeSwitch}
            title={`Theme: ${theme === "default" ? "Blau" : "Typo3"}`}
        ></Button>
    );
}

export default ThemeSwitch;
