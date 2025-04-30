import React, { useState } from "react";
import { Input, Select } from "../components/-components";

function Inputs() {
    const [value, setValue] = useState("Hehe");
    const [switched, setSwitched] = useState(false);
    const [selectedValue, setSelectedValue] = useState("option1");
    const [selectedValuee, setSelectedValuee] = useState(null);

    return (
        <div className="roa-container-site flex flex-col items-center justify-center gap-3 !w-1/2 border-thin border-red-500 rounded-2xl">
            <Input
                type="text"
                placeholder="Normaler Input"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <Input
                type="text"
                placeholder="Disabled Input"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                disabled
            />
            <Input
                type="text"
                placeholder="Disabled Input"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                label={"Email"}
            />
            <Input
                type="text"
                placeholder="Disabled Input"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                button={"Senden"}
            />
            <Input type="file" placeholder="Disabled Input" />
            <Input
                type="radio"
                options={[
                    { value: "option1", label: "Option 1" },
                    { value: "option2", label: "Option 2" },
                    { value: "option3", label: "Option 3" },
                ]}
                name="example"
                value={selectedValue}
                onChange={(e) => setSelectedValue(e.target.value)}
                label="Choose an option"
            />
            <Input
                type="switch"
                switch="Toggle Feature"
                checked={switched}
                onChange={(e) => setSwitched(e.target.checked)}
            />
            <Select
                options={[
                    { value: "option1", label: "Option 1" },
                    { value: "option2", label: "Option 2" },
                    { value: "option3", label: "Option 3" },
                ]}
                onSelect={(e) => setSelectedValuee(e)}
                selectedValue={selectedValuee}
            />
        </div>
    );
}

export default Inputs;
