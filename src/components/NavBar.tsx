interface Props {
    title: string;
    status: string;
    onToggle?: () => void;
    sidebarOpen?: boolean;
}

const NavBar = ({ title, status, onToggle, sidebarOpen }: Props) => {
    return (
        <nav className="navbar navbar-dark bg-danger px-3 px-md-4">
            <button
                className="btn btn-danger d-md-none me-3"
                onClick={onToggle}
            >
                {sidebarOpen ? "✕" : "☰"}
            </button>
            <span className="navbar-brand">{title}</span>
            <span className="text-white">{"Status: " + status}</span>
        </nav>
    );
};

export default NavBar;
