import React from "react";

function Card({ children, noPadding, className = "" }) {
    const baseClass = `${noPadding ? "" : "px-5 py-5"} box-shadow-[0_10px_20px_-12px_rgba(16,24,40,0.2)] border border-[#d4d4d8] dark:border-[#27272a] rounded-[1rem] bg-cardbgLight dark:bg-cardbgDark overflow-hidden`;

    return <div className={`${baseClass} ${className}`}>{children}</div>;
}

export default Card;
