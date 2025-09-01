import { Section } from "../types/sections";
import { sectionLinks } from "../config/sectionLinks";

interface Props {
    activeSection: Section;
    setActiveSection: (section: Section) => void;
}

const Aside = ({ activeSection, setActiveSection }: Props) => {
    return (
        <nav className="nav flex-column gap-1">
            {sectionLinks.map((link) => (
                <button
                    key={link.id}
                    onClick={() => setActiveSection(link.id)}
                    className={`btn btn-link nav-link text-start ${
                        activeSection === link.id
                            ? "active text-white"
                            : "text-white-50"
                    }`}
                >
                    {link.label}
                </button>
            ))}
        </nav>
    );
};

export default Aside;
