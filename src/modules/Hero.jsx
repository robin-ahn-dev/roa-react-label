import React from "react";
import { Text, Button, Card } from "../components/-components";
import { ArrowRight } from "lucide-react";

function Hero() {
    return (
        <div className="w-full">
            <div className="w-[500px] flex flex-col items-center justify-center h-[400px] mx-auto gap-4">
                <Text type="h1" bold center>
                    Hallo und Herzlich Willkommen zu meiner Webseite
                </Text>
                <Button type="default" text="Get Started" iconRight={<ArrowRight />} />
            </div>
        </div>
    );
}

export default Hero;
