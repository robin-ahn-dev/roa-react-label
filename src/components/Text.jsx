import React from "react";

function Text({
    children,
    type = "default",
    bold = false,
    center = false,
    className = "",
    color = "default",
}) {
    const baseClass = "text-sm";
    const boldClass = bold ? "font-bold" : "";
    const centerClass = center ? "text-center" : "";

    const typeStyles = {
        h1: "!text-3xl",
        h2: "!text-2xl",
        h3: "!text-xl",
        default: "!text-base",
        small: "!text-sm",
        tiny: "!text-xs",
    };

    const colorStyles = {
        default: "text-black dark:text-white",
        inverted: "text-white dark:text-black",
        primary: "text-blue-500 dark:text-blue-400",
        success: "text-green-500 dark:text-green-400",
        error: "text-red-500 dark:text-red-400",
        warning: "text-yellow-500 dark:text-yellow-400",
        muted: "text-gray-500 dark:text-gray-400",
    };

    const typeClass = typeStyles[type] || typeStyles.default;
    const colorClass = colorStyles[color] || colorStyles.default;

    return (
        <p className={`${baseClass} ${typeClass} ${boldClass} ${centerClass} ${colorClass} ${className}`}>
            {children}
        </p>
    );
}

export default Text;