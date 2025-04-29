import React from "react";
import { Text, Button, Card } from "../components/-components";

function App() {
    return (
        <div className="roa-container-site h-full mx-auto flex flex-col items-center justify-center gap-6">
            <Card className="flex items-center justify-center flex-col">
                <Text type="h1" bold center>
                    Herzlich Willkommen beim
                </Text>
                <Text
                    type="h1"
                    color="accent"
                    bold
                    center
                    className="mt-1 mb-5"
                >
                    Roa React Label !
                </Text>
                <Button type={"primary"} text={"Durchsuche alle Komponenten"} />
            </Card>
        </div>
    );
}

export default App;
