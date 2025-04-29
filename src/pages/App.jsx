import React from "react";
import { Text } from "../components/-components";
import { Moon } from "lucide-react";

function App() {
    return (
        <div className="roa-container-site h-full mx-auto flex flex-col items-center justify-center gap-6">
            <Text type="h1" bold={true} center={true} clazzName="max-w-[400px]">
                Herzlich Willkommen beim Roa React Label
            </Text>
        </div>
    );
}

export default App;
