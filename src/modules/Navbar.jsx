import React, { useState, useEffect } from "react";

// Icons
import { House, Home, Clock, AlignLeft } from "lucide-react";

import { Link } from "react-router-dom";
import { usePages } from "../hooks/usePages";
import ColorSwitch from "../modules/ColorSwitch";
import { Button } from "../components/-components.js";

function Navbar() {
    const { pageTitle, setPageTitle } = usePages();
    const [navMenuOpen, setNavMenuOpen] = useState(false);

    // Links für Navigation
    const links = [
        { to: "/", icon: <House />, text: "Start" },
        { to: "/texts", icon: <Clock />, text: "Texts" },
        { to: "/buttons", icon: <Clock />, text: "Buttons" },
    ];

    return (
        <div className="fixed roa-container top-5 left-[50%] translate-x-[-50%] z-50">
            <div className="bg-white dark:bg-primary w-full h-full absolute -top-5 left-0 -z-10"></div>
            <nav className="card rounded-2xl flex justify-between items-center px-2 py-2 !overflow-visible z-50">
                <ColorSwitch />
                <div className="relative">
                    <Button
                        onlyIcon={<AlignLeft />}
                        onClick={() => setNavMenuOpen(!navMenuOpen)}
                    ></Button>
                    <div
                        className={`absolute -right-[9px] top-[70px] card bg-secondary px-2 py-2 sm:p-4 ${navMenuOpen ? "block" : "hidden"} z-50 bg-white dark:bg-primary`}
                    >
                        <div className="flex flex-col gap-3 transition-all duration-300 z-50 bg-white dark:bg-primary">
                            {links.map(({ to, icon, text }, index) => (
                                <Link
                                    to={to}
                                    key={index}
                                    className={`w-[50px] h-[50px] sm:w-[180px] sm:h-[60px] flex flex-row gap-5 items-center justify-center sm:justify-start border-[1px] border-apple-600 rounded-2xl bg-white dark:bg-primary text-black dark:text-white ${pageTitle == text ? "!bg-apple-500 !text-white" : ""}`}
                                    onClick={() => (
                                        setPageTitle(text),
                                        setNavMenuOpen(false)
                                    )}
                                >
                                    <div
                                        className={`sm:ml-5 ${pageTitle == text ? "text-white" : "text-apple-500 "}`}
                                    >
                                        {icon}
                                    </div>
                                    <p className="hidden sm:block text-center">
                                        {text}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
