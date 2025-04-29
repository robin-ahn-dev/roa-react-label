import React from "react";
import Text from "../components/Text";
import Button from "../components/Button";
import { Moon } from "lucide-react";

function App() {
    return (
        <div className="roa-container-site h-full mx-auto flex flex-col items-center justify-center gap-6">
            <Text type="h1" bold={true} center={true} clazzName="max-w-[400px]">
                Herzlich Willkommen beim Roa React Label
            </Text>
            <Button text="Set Goal" type="normal" />
            <Button text="Set Goal" type="outline" />
            <Button text="Set Goal" type="success" />
            <Button text="Set Goal" type="warning" />
            <Button text="Set Goal" type="error" />
            <Button text="Set Goal" type="normal" full />
            <Button text="Set Goal" type="normal" onlyIcon={<Moon />} />
            <Button text="Set Goal" type="normal" iconLeft={<Moon />} />
            <Button text="Set Goal" type="normal" iconRight={<Moon />} />
            <Button text="Set Goal" type="normal" loading />
            <Button text="Set Goal" type="normal" disabled />
            <Button text="Set Goal" type="normal" className="bg-red-800" />
            <Button text="Click me!" type="normal" onClick={() => alert("Clicked!")} />
        </div>
    );
}

export default App;
