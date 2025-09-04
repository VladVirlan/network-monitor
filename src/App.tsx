import { useState } from "react";
import NavBar from "./components/NavBar.tsx";
import Aside from "./components/Aside.tsx";
import MainContent from "./components/MainContent.tsx";
import Alert from "./components/Alert.tsx";
import { Section } from "./types/sections";
import { Colour } from "./types/colours.ts";

const title = "Network Monitor";
const status = "Connecting...";

const App = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<Section>("overview");
    const [alertVisibility, setAlertVisibility] = useState(false);
    const [alertColour, setAlertColour] = useState<Colour>("primary");
    const [alertMessage, setAlertMessage] = useState("Hello, user!");

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    return (
        <div className="d-flex flex-column min-vh-100">
            {alertVisibility && (
                <Alert
                    onClose={() => setAlertVisibility(false)}
                    dismissible={true}
                    colour={alertColour}
                >
                    {alertMessage}
                </Alert>
            )}

            <NavBar
                title={title}
                status={status}
                onToggle={toggleSidebar}
                sidebarOpen={sidebarOpen}
            />

            <div className="d-flex flex-grow-1">
                <aside
                    className={`sidebar d-md-block text-white p-3 ${
                        sidebarOpen ? "d-flex" : "d-none d-md-flex"
                    }`}
                >
                    <Aside
                        activeSection={activeSection}
                        setActiveSection={setActiveSection}
                    />
                </aside>
                <main className="flex-grow-1 bg-dark text-white p-3">
                    <MainContent
                        activeSection={activeSection}
                        triggerAlert={(colour: Colour, message: string) => {
                            setAlertColour(colour);
                            setAlertVisibility(true);
                            setAlertMessage(message);
                        }}
                    />
                </main>
            </div>
        </div>
    );
};

export default App;
