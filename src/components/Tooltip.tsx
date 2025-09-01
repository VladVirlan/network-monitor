import { ReactNode } from "react";
import "./Tooltip.css";

interface Props {
    text?: string | null;
    children: ReactNode;
}

const Tooltip = ({ text, children }: Props) => {
    return (
        <div className="tooltip-container">
            {children}
            {text && <span className="tooltip-text">{text}</span>}
        </div>
    );
};

export default Tooltip;
