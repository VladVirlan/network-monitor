import { lazy } from "react";
import { Section } from "../types/sections";

export interface SectionLink {
    id: Section;
    label: string;
}

export const sectionLinks: SectionLink[] = [
    { id: "overview", label: "Overview" },
    { id: "devices", label: "Devices" },
    { id: "traffic", label: "Traffic" },
    { id: "diagnostics", label: "Diagnostics" },
];

export const sectionConfig: Record<Section, React.LazyExoticComponent<React.ComponentType>> = {
    overview: lazy(() => import("../components/main-content-cards/Overview")),
    devices: lazy(() => import("../components/main-content-cards/Devices")),
    traffic: lazy(() => import("../components/main-content-cards/Traffic")),
    diagnostics: lazy(() => import("../components/main-content-cards/Diagnostics")),
};