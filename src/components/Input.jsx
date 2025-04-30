import React from "react";
import Button from "./Button";

function Input({
    type = "text",
    options = [],
    switch: switchProp,
    label,
    placeholder,
    button,
    value,
    onChange,
    disabled = false,
    className = "",
    full = false,
    bold = false,
    name,
    checked,
}) {
    const baseClass =
        "text-sm rounded-normal px-4 py-2 bg-cardbgLight dark:bg-cardbgDark border-thin border-borderLight dark:border-borderDark focus:outline-none";
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
                        <input type="checkbox" className="mr-2" checked={checked} onChange={onChange} />
                        {options[0]}
                    </label>
                ) : type === "radio" ? (
                    options.map((option, index) => (
                        <label
                            key={index}
                            className="flex items-center text-sm text-primarytext dark:text-secondarytext cursor-pointer"
                        >
                            <input
                                type="radio"
                                className="mr-2"
                                name={name}
                                value={option.value}
                                checked={value === option.value}
                                onChange={onChange}
                            />
                            {option.label}
                        </label>
                    ))
                ) : type === "switch" ? (
                    <label className="relative inline-flex items-center cursor-pointer outline-none border-none">
                        <input
                            type="checkbox"
                            className="sr-only peer outline-none border-none"
                            checked={checked}
                            onChange={onChange}
                        />
                        <div className="w-11 h-6 bg-cardbgLightHl peer-focus:outline-none rounded-full peer dark:bg-cardbgDarkHl peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-cardbgLight after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accentbg"></div>
                        <span className="ml-3 text-sm text-primarytext dark:text-secondarytext">{switchProp}</span>
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