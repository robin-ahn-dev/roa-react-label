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
    // Base Styles
    const baseInputClass = [
        "text-sm",
        "rounded-normal",
        "px-4",
        "py-2",
        "bg-surfaceLight",
        "dark:bg-surfaceDark",
        "text-surfaceLightText",
        "dark:text-surfaceDarkText",
        "border-thin",
        "border-surfaceLightBorder",
        "dark:border-surfaceDarkBorder",
        "focus:outline-none",
        full && "w-full",
        bold && "font-bold",
        disabled && "opacity-50 cursor-not-allowed",
        className,
    ]
        .filter(Boolean)
        .join(" ");

    const textClass = "text-sm text-surfaceLightText dark:text-surfaceDarkText";
    const labelClass = "text-sm font-semibold mb-1";
    const containerClass = `relative ${full ? "w-full" : ""} flex flex-col gap-[2px]`;

    // Render Functions
    const renderCheckbox = () => (
        <label className={`flex items-center ${textClass} cursor-pointer select-none`}>
            <input
                type="checkbox"
                className="mr-2"
                checked={checked}
                onChange={onChange}
                disabled={disabled}
            />
            {options[0]}
        </label>
    );

    const renderRadio = () =>
        options.map((option, index) => (
            <label
                key={index}
                className={`flex items-center ${textClass} cursor-pointer`}
            >
                <input
                    type="radio"
                    className="mr-2"
                    name={name}
                    value={option.value}
                    checked={value === option.value}
                    onChange={onChange}
                    disabled={disabled}
                />
                {option.label}
            </label>
        ));

    const renderRadioCol = () => (
        <div className="flex flex-col gap-2">
            {options.map((option, index) => (
                <label
                    key={index}
                    className={`flex items-center ${textClass} cursor-pointer`}
                >
                    <input
                        type="radio"
                        className="mr-2"
                        name={name}
                        value={option.value}
                        checked={value === option.value}
                        onChange={onChange}
                        disabled={disabled}
                    />
                    {option.label}
                </label>
            ))}
        </div>
    );

    const renderSwitch = () => (
        <label className="relative inline-flex items-center cursor-pointer outline-none border-none">
            <input
                type="checkbox"
                className="sr-only peer outline-none border-none"
                checked={checked}
                onChange={onChange}
                disabled={disabled}
            />
            <div className="w-11 h-6 bg-surfaceLightHl peer-focus:outline-none rounded-full peer dark:bg-surfaceDarkHl peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-surfaceLight dark:after:bg-surfaceDark after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            {switchProp && (
                <span className={`ml-3 ${textClass} select-none`}>{switchProp}</span>
            )}
        </label>
    );

    const renderTextInput = () => (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={disabled}
            className={baseInputClass}
        />
    );

    const renderInput = () => {
        switch (type) {
            case "checkbox":
                return renderCheckbox();
            case "radio":
                return renderRadio();
            case "radio-col":
                return renderRadioCol();
            case "switch":
                return renderSwitch();
            default:
                return renderTextInput();
        }
    };

    const isColumnLayout = type === "radio-col";
    const isRadioType = type === "radio" || type === "radio-col";
    const inputContainerClass = isColumnLayout
        ? "flex flex-col gap-2"
        : isRadioType
        ? "flex items-center gap-2 flex-wrap"
        : "flex items-center gap-2";

    return (
        <div className={containerClass}>
            {label && <label className={labelClass}>{label}</label>}
            <div className={inputContainerClass}>
                {renderInput()}
                {button && !isRadioType && <Button text={button} />}
            </div>
        </div>
    );
}

export default Input;