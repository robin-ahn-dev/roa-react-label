import React, { useState, useEffect } from "react";

// Icons
import { Sun, Moon } from "lucide-react";

// Components
import { Button } from "../components/-components.js";

function ColorSwitch() {
    const [darkMode, setDarkMode] = useState(false);

    const handleColorSwitch = () => {
        localStorage.setItem("darkMode", JSON.stringify(!darkMode));
        document.documentElement.classList.toggle("dark");
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        const darkModeSetting = JSON.parse(localStorage.getItem("darkMode"));
        if (darkModeSetting) {
            setDarkMode(true);
            document.documentElement.classList.add("dark");
        }
    }, []);

    return (
        <Button
            onlyIcon={darkMode ? <Moon /> : <Sun />}
            onClick={handleColorSwitch}
        ></Button>
    );
}

export default ColorSwitch;
