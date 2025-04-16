import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Icons
import { Sun, Moon } from "lucide-react";

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
        <div
            className="fixed w-[100px] h-[50px] top-10 right-4 flex rounded-2xl cursor-pointer bg-apple-600 dark:bg-apple-600 shadow-[-1px_1px_25px_rgba(0,0,0,0.3)]"
            onClick={handleColorSwitch}
        >
            <motion.div
                className="absolute w-[50px] h-[50px] rounded-2xl border-[3px] border-white bg-apple-500/10 dark:bg-apple-500/10"
                animate={{ x: darkMode ? 50 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
            <div className="w-[50px] h-[50px] flex items-center justify-center">
                <Sun size={22} color="#fff" />
            </div>
            <div className="w-[50px] h-[50px] flex items-center justify-center">
                <Moon size={22} color="#fff" />
            </div>
        </div>
    );
}

export default ColorSwitch;
