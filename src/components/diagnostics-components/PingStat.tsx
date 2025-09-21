import useCountUp from "../hooks/useCountUp";

interface Props {
    isTesting: boolean;
    latency: number | null;
}

const PingStat = ({ isTesting, latency }: Props) => {
    const animatedLatency = useCountUp(latency ?? 0);

    return (
        <div className="d-flex justify-content-center mt-2">
            <div className="text-center">
                <span className="fw-bold">
                    {isTesting ? "..." : animatedLatency}
                </span>
                <span className="text-muted small ms-1">{"ms Ping"}</span>
            </div>
        </div>
    );
};

export default PingStat;
