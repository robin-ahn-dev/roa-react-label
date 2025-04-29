import React, { useState, useEffect } from "react";

// Icons
import { House, Home, Clock, AlignLeft } from "lucide-react";

import { Link } from "react-router-dom";
import { usePages } from "../hooks/usePages";
import ColorSwitch from "../modules/ColorSwitch";
import { Text, Button } from "../components/-components.js";

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
            <div className="bg-primarybg dark:bg-secondarybg w-full h-full absolute -top-5 left-0 -z-10"></div>
            <nav className="card rounded-2xl flex justify-between items-center px-2 py-2 !overflow-visible z-50">
                <ColorSwitch />
                <Text type="default" bold>{pageTitle}</Text>
                <div className="relative">
                    <Button
                        onlyIcon={<AlignLeft />}
                        onClick={() => setNavMenuOpen(!navMenuOpen)}
                    ></Button>
                    <div
                        className={`absolute -right-[9px] top-[70px] card bg-black px-2 py-2 sm:p-4 ${navMenuOpen ? "block" : "hidden"} z-50 bg-white dark:bg-black`}
                    >
                        <div className="flex flex-col gap-3 z-50 bg-white dark:bg-black">
                            {links.map(({ to, icon, text }, index) => (
                                <Link
                                    to={to}
                                    key={index}
                                    className={`w-[150px] h-[50px] flex flex-row items-center justify-center border-[1px] border-primary dark:border-secondary rounded-normal bg-white dark:bg-black text-black dark:text-white ${pageTitle == text ? "!bg-primary dark:!bg-secondary !text-secondarytext dark:!text-primarytext" : ""}`}
                                    onClick={() => (
                                        setPageTitle(text),
                                        setNavMenuOpen(false)
                                    )}
                                >
                                    <p className="block text-center">{text}</p>
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
