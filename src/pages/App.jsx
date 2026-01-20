import React from "react";
import { Text, Button, Card } from "../components/-components";
import { Hero, LoginForm, Bildergallerie, BilderCarousel } from "../modules/-modules";

function App() {
    return (
        <div className="roa-container-site h-full mx-auto flex flex-col items-center gap-6">
            <Hero />
            <LoginForm />
            <Bildergallerie />
            <BilderCarousel />
        </div>
    );
}

export default App;
