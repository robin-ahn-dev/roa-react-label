import React from "react";

function Input({
    type = "text",
    placeholder,
    value,
    onChange,
    disabled = false,
    error = false,
    success = false,
    warning = false,
    className = "",
    iconLeft,
    iconRight,
    full = false,
    bold = false,
}) {
    const baseClass = "text-sm rounded-normal border px-4 py-2 focus:outline-none focus:ring-2";
    const fullClass = full ? "w-full" : "";
    const boldClass = bold ? "font-bold" : "";
    const disabledClass = disabled ? "opacity-50 cursor-not-allowed" : "";

    const statusStyles = {
        error: "border-red-500 focus:ring-red-200",
        success: "border-green-500 focus:ring-green-200",
        warning: "border-yellow-500 focus:ring-yellow-200",
        default: "border-gray-300 focus:ring-gray-200 dark:border-gray-600 dark:focus:ring-gray-700",
    };

    const getStatusClass = () => {
        if (error) return statusStyles.error;
        if (success) return statusStyles.success;
        if (warning) return statusStyles.warning;
        return statusStyles.default;
    };

    const renderIcon = (icon) =>
        icon ? React.cloneElement(icon, { className: "w-5 h-5" }) : null;

    return (
        <div className={`relative ${fullClass}`}>
            {iconLeft && (
                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                    {renderIcon(iconLeft)}
                </div>
            )}
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                disabled={disabled}
                className={`${baseClass} ${fullClass} ${boldClass} ${getStatusClass()} ${disabledClass} ${className} ${iconLeft ? "pl-10" : ""} ${iconRight ? "pr-10" : ""}`}
            />
            {iconRight && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    {renderIcon(iconRight)}
                </div>
            )}
        </div>
    );
}

export default Input; 