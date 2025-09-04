import type { ReactNode } from "react";
import { Colour } from "../types/colours.ts";

interface Props {
    children: ReactNode;
    dismissible?: boolean;
    colour?: Colour;
    onClose: () => void;
}

const getIcon = (colour: Props["colour"]) => {
    switch (colour) {
        case "primary":
            return "ℹ️";
        case "secondary":
            return "🔔";
        case "success":
            return "✅";
        case "warning":
            return "⚠️";
        case "danger":
            return "🚨";
        case "info":
            return "💡";
        case "light":
        case "dark":
        default:
            return "";
    }
};

const Alert = ({
    children,
    dismissible = false,
    colour = "primary",
    onClose,
}: Props) => {
    return (
        <div
            className={`alert alert-${colour} ${
                dismissible ? "alert-dismissible" : ""
            } fixed-top d-flex align-items-center m-3`}
            role="alert"
        >
            <span className="me-2">{getIcon(colour)}</span>
            <span className="flex-grow-1">{children}</span>
            {dismissible && (
                <button className="btn-close ms-2" onClick={onClose}></button>
            )}
        </div>
    );
};

export default Alert;
