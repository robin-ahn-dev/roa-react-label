import React from "react";

function Card({ children, noPadding, className = "" }) {
    const baseClass = `${noPadding ? "" : "px-5 py-5"} box-shadow-[0_10px_20px_-12px_rgba(16,24,40,0.2)] border border-surfaceLightBorder dark:border-surfaceDarkBorder rounded-card bg-surfaceLight dark:bg-surfaceDark overflow-hidden`;

    return <div className={`${baseClass} ${className}`}>{children}</div>;
}

export default Card;
