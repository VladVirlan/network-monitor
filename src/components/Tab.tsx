interface Props {
    label: string;
    active: boolean;
    onClick: () => void;
}

const Tab = ({ label, active, onClick }: Props) => {
    return (
        <li className="nav-item" role="presentation">
            <button
                className={`btn rounded-pill px-3 py-2 ${
                    active
                        ? "active btn-danger text-white"
                        : "btn-light text-dark"
                }`}
                onClick={onClick}
                type="button"
                role="tab"
            >
                {label}
            </button>
        </li>
    );
};

export default Tab;
