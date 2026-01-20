import React, { useState } from "react";
import { LogIn, UserPlus } from "lucide-react";
import { Card, Button, Input, Text } from "../components/-components";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isRegisterMode, setIsRegisterMode] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        // Simuliere API-Call
        setTimeout(() => {
            setIsLoading(false);
            alert(isRegisterMode ? "Registrierung erfolgreich!" : "Login erfolgreich!");
        }, 1500);
    };

    return (
        <div className="w-full max-w-md mx-auto">
            <Card className="flex flex-col gap-4">
                <div className="text-center">
                    <Text type="h2" bold center>
                        {isRegisterMode ? "Registrierung" : "Anmelden"}
                    </Text>
                    <Text type="small" color="muted" center className="mt-2">
                        {isRegisterMode 
                            ? "Erstelle ein neues Konto" 
                            : "Melde dich mit deinen Zugangsdaten an"}
                    </Text>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <Input
                        type="text"
                        label="E-Mail"
                        placeholder="deine@email.de"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        full
                    />

                    <Input
                        type="password"
                        label="Passwort"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        full
                    />

                    {!isRegisterMode && (
                        <div className="flex items-center justify-between">
                            <Input
                                type="checkbox"
                                options={["Angemeldet bleiben"]}
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                            />
                            <Text 
                                type="small" 
                                color="accent" 
                                className="cursor-pointer hover:underline"
                            >
                                Passwort vergessen?
                            </Text>
                        </div>
                    )}

                    <Button
                        type="default"
                        text={isRegisterMode ? "Registrieren" : "Anmelden"}
                        iconLeft={<LogIn />}
                        full
                        bold
                        loading={isLoading}
                        disabled={!email || !password}
                    />

                    <div className="flex items-center gap-2">
                        <div className="flex-1 h-px bg-surfaceLightBorder dark:bg-surfaceDarkBorder"></div>
                        <Text type="small" color="muted">oder</Text>
                        <div className="flex-1 h-px bg-surfaceLightBorder dark:bg-surfaceDarkBorder"></div>
                    </div>

                    <Button
                        type="accent"
                        text={isRegisterMode ? "Bereits ein Konto? Anmelden" : "Neues Konto erstellen"}
                        iconLeft={isRegisterMode ? <LogIn /> : <UserPlus />}
                        full
                        outline
                        onClick={() => setIsRegisterMode(!isRegisterMode)}
                    />
                </form>
            </Card>
        </div>
    );
}

export default LoginForm;
