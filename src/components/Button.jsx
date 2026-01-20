import React from "react";

function Button({
    // Type (zuerst)
    type = "default",
    
    // Varianten
    outline = false,
    bold = false,
    full = false,
    small = false,
    
    // Content
    text,
    iconLeft,
    iconRight,
    onlyIcon,
    
    // State
    disabled = false,
    loading = false,
    
    // Events & Config
    onClick,
    className = "",
    title,
}) {
    // Base Styles
    const baseStyles = "text-sm rounded-normal flex items-center justify-center border";
    
    // Type Styles (Grundfarbe)
    const typeStyles = {
        default: "bg-primary dark:bg-primary text-primarytext dark:text-primarytext border-primary dark:border-secondary",
        success: "bg-green-500 text-white border-green-500",
        error: "bg-red-500 text-white border-red-500",
        warning: "bg-yellow-500 text-white border-yellow-500",
        accent: "bg-accent text-accenttext border-accent",
    };
    
    // Outline Variante (überschreibt Type-Styles)
    const outlineStyles = outline 
        ? "bg-transparent border-surfaceLightBorder dark:border-surfaceDarkBorder text-surfaceLightText dark:text-surfaceDarkText"
        : typeStyles[type] || typeStyles.default;
    
    // Size & Layout
    const sizeStyles = onlyIcon 
        ? "w-[50px] h-[50px] p-0 max-h-[50px] min-h-[50px]" 
        : small ? "py-[4px] px-3 max-h-9" : "py-[7px] px-4 max-h-9";
    
    // Varianten kombinieren
    const variantStyles = [
        baseStyles,
        sizeStyles,
        outlineStyles,
        full && "w-full",
        bold && "font-bold",
        disabled && "opacity-20 cursor-not-allowed",
        className,
    ].filter(Boolean).join(" ");

    // Icon Rendering
    const renderIcon = (icon) =>
        icon ? React.cloneElement(icon, { className: "w-5 h-5" }) : null;

    // Content Rendering
    const renderContent = () => {
        if (loading) {
            return (
                <>
                    <div className="animate-spin w-5 h-5 border-2 border-primaryText dark:border-primaryText !border-t-transparent rounded-full mr-3" />
                    Loading
                </>
            );
        }
        
        if (onlyIcon) {
            return onlyIcon;
        }
        
        return (
            <>
                {iconLeft && <div className="mr-2">{renderIcon(iconLeft)}</div>}
                {text}
                {iconRight && <div className="ml-2">{renderIcon(iconRight)}</div>}
            </>
        );
    };

    return (
        <button
            onClick={onClick}
            disabled={disabled || loading}
            className={variantStyles}
            title={title}
        >
            {renderContent()}
        </button>
    );
}

export default Button;
