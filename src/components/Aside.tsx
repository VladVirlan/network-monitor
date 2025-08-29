const Aside = () => {
    return (
        <nav className="nav flex-column">
            <a href="#overview" className="nav-link text-white">
                Overview
            </a>
            <a href="#devices" className="nav-link text-white">
                Devices
            </a>
            <a href="#traffic" className="nav-link text-white">
                Traffic
            </a>
            <a href="#ping" className="nav-link text-white">
                Diagnostics
            </a>
        </nav>
    );
};

export default Aside;
