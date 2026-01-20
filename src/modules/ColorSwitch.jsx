import React, { useState, useEffect } from "react";

// Icons
import { Sun, Moon } from "lucide-react";

// Components
import { Button } from "../components/-components.js";

function ColorSwitch() {
    const [darkMode, setDarkMode] = useState(() => {
        // Initial state aus localStorage lesen
        const savedMode = localStorage.getItem("colormode");
        if (savedMode === "dark") {
            return true;
        } else if (savedMode === "light") {
            return false;
        }
        // Fallback: System-Präferenz
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    });

    useEffect(() => {
        // Initial dark class setzen basierend auf state
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, []);

    const handleColorSwitch = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        
        // localStorage speichern
        localStorage.setItem("colormode", newDarkMode ? "dark" : "light");
        
        // DOM aktualisieren
        if (newDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };

    return (
        <Button
            onlyIcon={darkMode ? <Moon /> : <Sun />}
            onClick={handleColorSwitch}
        ></Button>
    );
}

export default ColorSwitch;
