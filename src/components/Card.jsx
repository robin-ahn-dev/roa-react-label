import React from "react";

function Card({ children, className = "" }) {
    const baseClass = "box-shadow-[0_10px_20px_-12px_rgba(16,24,40,0.2)] border border-[#d4d4d8] dark:border-[#27272a] rounded-[1rem] bg-white dark:bg-secondarybg overflow-hidden";

    return (
        <div className={`${baseClass} ${className}`}>
            {children}
        </div>
    );
}

export default Card; 