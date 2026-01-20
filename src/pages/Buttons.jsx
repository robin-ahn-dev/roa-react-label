import React from "react";
import { Button } from "../components/-components";
import { Moon } from "lucide-react";

function Buttons() {
    return (
        <div className="roa-container-site flex flex-col items-center justify-center gap-3 border-thin border-red-500 rounded-2xl">
            <Button text="Normaler Button" type="default" />
            <Button text="Outline Button" type="default" outline />
            <Button text="Error Button" type="error" />
            <Button text="Warning Button" type="warning" />
            <Button text="Success Button" type="success" />
            <Button text="Accent Button" type="accent" />
            <Button text="Bold Button" type="default" bold />
            <Button text="Full Button" type="default" full />
            <Button text="IconLeft Button" type="default" iconLeft={<Moon />} />
            <Button
                text="IconRight Button"
                type="default"
                iconRight={<Moon />}
            />
            <Button text="OnlyIcon Button" type="default" onlyIcon={<Moon />} />
            <Button text="Disabled Button" type="default" disabled />
            <Button text="Loading Button" type="default" loading={true} />
        </div>
    );
}

export default Buttons;
