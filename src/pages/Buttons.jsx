import React from "react";
import { Button } from "../components/-components";
import { Moon } from "lucide-react";

function Buttons() {
    return (
        <div className="roa-container-site flex flex-col items-center justify-center gap-3 !w-1/2 border-thin border-red-500 rounded-2xl">
            <Button text="Normaler Button" type="default" />
            <Button text="Outline Button" type="outline" />
            <Button text="Error Button" type="error" />
            <Button text="Warning Button" type="warning" />
            <Button text="Success Button" type="success" />
            <Button text="Bold Button" type="normal" bold />
            <Button text="Full Button" type="normal" full />
            <Button text="IconLeft Button" type="normal" iconLeft={<Moon />} />
            <Button
                text="IconRight Button"
                type="normal"
                iconRight={<Moon />}
            />
            <Button text="OnlyIcon Button" type="normal" onlyIcon={<Moon />} />
            <Button text="Disabled Button" type="normal" disabled />
            <Button text="Loading Button" type="normal" loading={true} />
        </div>
    );
}

export default Buttons;
