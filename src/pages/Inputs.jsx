import React, { useState } from "react";
import { Input, Select, FileUpload } from "../components/-components";

function Inputs() {
    const [value, setValue] = useState("Hehe");
    const [switched, setSwitched] = useState(false);
    const [selectedValue, setSelectedValue] = useState("option1");
    const [selectedValueCol, setSelectedValueCol] = useState("option5");
    const [selectedValuee, setSelectedValuee] = useState(null);

    return (
        <div className="roa-container-site flex flex-col items-center justify-center gap-8 border-thin border-red-500 rounded-2xl">
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
            <FileUpload />
            <Input
                type="radio"
                options={[
                    { value: "option1", label: "Option 1" },
                    { value: "option2", label: "Option 2" },
                    { value: "option3", label: "Option 3" },
                ]}
                name="example-horizontal"
                value={selectedValue}
                onChange={(e) => setSelectedValue(e.target.value)}
                label="Choose an option (Horizontal)"
            />
            <Input
                type="radio-col"
                options={[
                    { value: "option4", label: "Option 4" },
                    { value: "option5", label: "Option 5" },
                    { value: "option6", label: "Option 6" },
                ]}
                name="example-column"
                value={selectedValueCol}
                onChange={(e) => setSelectedValueCol(e.target.value)}
                label="Choose an option (Column)"
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
