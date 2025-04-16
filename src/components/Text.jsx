import React from "react";

function getFontWeightClass(bold) {
    return bold ? "font-bold" : "font-normal";
}

function getTextAlignmentClass(center) {
    return center ? "text-center" : "text-left";
}

function getTextSizeClass(type) {
    switch (type) {
        case "h1":
            return "text-3xl";
        case "h2":
            return "text-2xl";
        default:
            return "text-base";
    }
}

function Text({ children, type, bold = false, center = false, clazzName = "" }) {
    const fontWeightClass = getFontWeightClass(bold);
    const textAlignClass = getTextAlignmentClass(center);
    const textSizeClass = getTextSizeClass(type);

    const textClass = `${fontWeightClass} ${textAlignClass} ${textSizeClass} ${clazzName}`.trim();

    return <p className={textClass}>{children}</p>;
}

export default Text;