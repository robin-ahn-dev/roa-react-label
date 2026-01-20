import React from "react";
import { Text } from "../components/-components";

function Texts() {
    return (
        <div className="roa-container-site flex flex-col justify-center gap-3 border-thin border-red-500 rounded-2xl">
            <Text type="h1" center>
                H1 Überschrift
            </Text>
            <Text type="h2" center>
                H2 Überschrift
            </Text>
            <Text type="h3" center>
                H3 Überschrift
            </Text>
            <Text type="h4" center>
                H4 Überschrift
            </Text>
            <Text type="default" center>
                default Text
            </Text>
            <Text type="small" center>
                small Text
            </Text>
            <Text type="tiny" center>
                tiny Text
            </Text>
            <Text type="h1" bold>
                Überschrift Bold
            </Text>
            <Text type="h1" bold center>
                Überschrift Bold Center
            </Text>
            <Text type="h2" bold center color="default">
                Überschrift Color Default
            </Text>
            <Text type="h2" bold center color="inverted">
                Überschrift Color Inverted
            </Text>
            <Text type="h2" bold center color="accent">
                Überschrift Color Accent
            </Text>
            <Text type="h2" bold center color="error">
                Überschrift Color Error
            </Text>
            <Text type="h2" bold center color="warning">
                Überschrift Color Warning
            </Text>
            <Text type="h2" bold center color="success">
                Überschrift Color Success
            </Text>
            <Text type="h2" bold center color="muted">
                Überschrift Color Muted
            </Text>
        </div>
    );
}

export default Texts;
