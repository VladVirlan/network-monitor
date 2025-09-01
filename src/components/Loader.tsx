interface Props {
    message?: string;
    height?: string | number;
    spinnerColour?:
        | "primary"
        | "secondary"
        | "success"
        | "danger"
        | "warning"
        | "info"
        | "light"
        | "dark"
        | "link";
}

const Loader = ({
    message = "Loading...",
    height = 500,
    spinnerColour = "danger",
}: Props) => {
    return (
        <div
            className="d-flex flex-row justify-content-center align-items-center gap-3"
            style={{
                height: typeof height === "number" ? `${height}px` : height,
            }}
        >
            <div
                className={`spinner-border text-${spinnerColour} mb-2`}
                role="status"
            >
                <span className="visually-hidden">{message}</span>
            </div>
            <h5>{message}</h5>
        </div>
    );
};

export default Loader;
