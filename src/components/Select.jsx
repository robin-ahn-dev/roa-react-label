import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

function Select({ options, label, onSelect, selectedValue }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (value) => {
        onSelect(value);
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block">
            <button
                onClick={toggleDropdown}
                className="flex flex-row items-center justify-center gap-2 outline-none border-thin border-r-borderLight dark:border-borderDark bg-cardbgLight dark:bg-cardbgDark px-4 py-2 rounded-normal text-sm font-medium"
            >
                {options.find((option) => option.value === selectedValue)
                    ?.label || "Select an option"}{" "}
                <div className="w-4 h-4 flex items-center justify-center">
                    <ChevronDown />
                </div>
            </button>
            {isOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-cardbgLight dark:bg-cardbgDark rounded-normal border-thin border-borderLight dark:border-borderDark">
                    {options.map((option, index) => (
                        <li
                            key={index}
                            onClick={() => handleSelect(option.value)}
                            className={`px-4 py-2 text-sm cursor-pointer hover:bg-cardbgLightHl/50 dark:hover:bg-cardbgDarkHl w-[96%] my-1 mx-auto rounded-lg ${
                                selectedValue === option.value
                                    ? "bg-cardbgLightHl/50 dark:bg-cardbgDarkHl"
                                    : ""
                            }`}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Select;
