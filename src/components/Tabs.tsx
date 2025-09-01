import { useState, ReactNode } from "react";
import Tab from "./Tab";
import TabPanel from "./TabPanel";

interface Props {
    groups: Record<string, ReactNode>;
}

const Tabs = ({ groups }: Props) => {
    const [activeTab, setActiveTab] = useState(Object.keys(groups)[0]);

    return (
        <>
            <ul
                className="nav nav-pills gap-2 d-flex justify-content-center"
                role="tablist"
            >
                {Object.keys(groups).map((section, i) => (
                    <Tab
                        key={i}
                        label={section}
                        active={activeTab === section}
                        onClick={() => setActiveTab(section)}
                    />
                ))}
            </ul>

            <div className="tab-content mt-4">
                {Object.entries(groups).map(([section, content], i) => (
                    <TabPanel key={i} active={activeTab === section}>
                        {content}
                    </TabPanel>
                ))}
            </div>
        </>
    );
};

export default Tabs;
