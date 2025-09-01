import { Suspense } from "react";
import { Section } from "../types/sections";
import { sectionConfig } from "../config/sectionLinks";
import Loader from "./Loader";

interface Props {
    activeSection: Section;
}

const MainContent = ({ activeSection }: Props) => {
    const ActiveComponent = sectionConfig[activeSection];

    return (
        <div className="text-center">
            <Suspense fallback={<Loader />}>
                <ActiveComponent />
            </Suspense>
        </div>
    );
};

export default MainContent;
