import React from "react";

function Button({
    text,
    bold,
    full,
    iconLeft,
    iconRight,
    onlyIcon,
    type,
    disabled = false,
    onClick,
    loading = false,
    className = "",
    htmlType = "button",
}) {
    const baseClass =
        "text-sm rounded-normal flex items-center justify-center border";
    const sizeClass = onlyIcon ? "w-[50px] h-[50px] p-0" : "py-[7px] px-4";
    const fullClass = full ? "w-full" : "";
    const boldClass = bold ? "font-bold" : "";
    const disabledClass = disabled ? "opacity-50 cursor-not-allowed" : "";

    const typeStyles = {
        outline:
            "bg-transparent border-primarytext dark:text-white dark:border-white",
        success: "bg-green-500 text-white border-green-500",
        error: "bg-red-500 text-white border-red-500",
        warning: "bg-yellow-500 text-white border-yellow-500",
        default:
            "bg-primary dark:bg-secondary text-secondarytext border-primary dark:border-secondary dark:text-primarytext",
    };

    const typeClass = typeStyles[type] || typeStyles.default;

    const renderIcon = (icon) =>
        icon ? React.cloneElement(icon, { className: "w-5 h-5" }) : null;

    return (
        <button
            type={htmlType}
            onClick={onClick}
            disabled={disabled}
            className={`max-h-9 ${baseClass} ${sizeClass} ${fullClass} ${boldClass} ${typeClass} ${onlyIcon ? "max-h-[50px] min-h-[50px]" : ""} ${disabledClass} ${className}`}
        >
            {loading ? (
                <>
                    <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-3" />
                    Loading
                </>
            ) : onlyIcon ? (
                onlyIcon
            ) : (
                <>
                    {iconLeft && (
                        <div className="mr-2">{renderIcon(iconLeft)}</div>
                    )}
                    {text}
                    {iconRight && (
                        <div className="ml-2">{renderIcon(iconRight)}</div>
                    )}
                </>
            )}
        </button>
    );
}

export default Button;
