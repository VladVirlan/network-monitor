import { useState } from "react";
import NavBar from "./components/NavBar.tsx";
import Aside from "./components/Aside.tsx";
import MainContent from "./components/MainContent.tsx";
import "./App.css";

const title = "Network Monitor";
const status = "Connecting...";

const App = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    return (
        <div className="d-flex flex-column min-vh-100">
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
                    <Aside />
                </aside>
                <main className="flex-grow-1 bg-dark text-white p-3">
                    <MainContent />
                </main>
            </div>
        </div>
    );
};

export default App;
