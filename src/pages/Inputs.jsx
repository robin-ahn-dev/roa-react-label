import React, { useState } from "react";
import { Input } from "../components/-components";
import { Moon } from "lucide-react";

function Inputs() {
    const [value, setValue] = useState("Hehe");

    return (
        <div className="roa-container-site flex flex-col items-center justify-center gap-3 !w-1/2 border-[1px] border-red-500 rounded-2xl">
            <Input type="text" placeholder="Normaler Input" value={value} onChange={(e) => setValue(e.target.value)} />
            <Input type="text" placeholder="Disabled Input" value={value} onChange={(e) => setValue(e.target.value)} disabled />
            <Input type="text" placeholder="Disabled Input" value={value} onChange={(e) => setValue(e.target.value)} label={"Email"} />
            <Input type="text" placeholder="Disabled Input" value={value} onChange={(e) => setValue(e.target.value)} button={"Senden"} />
            <Input type="file" placeholder="Disabled Input"/>
        </div>
    );
}

export default Inputs;
