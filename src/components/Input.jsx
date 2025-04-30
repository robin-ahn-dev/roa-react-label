import React from "react";
import Button from "./Button";

function Input({
    type = "text",
    checkbox,
    label,
    placeholder,
    button,
    value,
    onChange,
    disabled = false,
    className = "",
    full = false,
    bold = false,
}) {
    const baseClass =
        "text-sm rounded-normal px-4 py-2 bg-white dark:bg-cardbg border-[1px] focus:outline-none";
    const fullClass = full ? "w-full" : "";
    const boldClass = bold ? "font-bold" : "";
    const disabledClass = disabled ? "opacity-50 cursor-not-allowed" : "";

    return (
        <div className={`relative ${fullClass} flex flex-col gap-[2px]`}>
            {label && (
                <label className="text-sm font-semibold mb-1">{label}</label>
            )}
            <div className="flex items-center gap-2">
                {type === "checkbox" ? (
                    <label className="flex items-center text-sm text-primarytext dark:text-secondarytext cursor-pointer">
                        <input type="checkbox" className="mr-2" />
                        {checkbox}
                    </label>
                ) : (
                    <input
                        type={type}
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                        disabled={disabled}
                        className={`${baseClass} ${fullClass} ${boldClass} ${disabledClass} ${className}`}
                    />
                )}
                {button && <Button text={button} />}
            </div>
        </div>
    );
}

export default Input;
