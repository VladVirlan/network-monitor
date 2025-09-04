import { ReactNode } from "react";

interface Props {
    active: boolean;
    children: ReactNode;
}

const TabPanel = ({ active, children }: Props) => {
    return (
        <div
            className={`tab-pane fade ${active ? "show active" : ""}`}
            role="tabpanel"
        >
            {children}
        </div>
    );
};

export default TabPanel;
