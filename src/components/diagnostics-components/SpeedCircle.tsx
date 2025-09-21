import useCountUp from "../hooks/useCountUp";
import { Colour } from "../../types/colours";

interface Props {
    value: number | null;
    isTesting: boolean;
    colour?: Colour;
    unit: string;
    label: string;
}

const MAX_SPEED = 200;

const SpeedCircle = ({
    value,
    isTesting,
    colour = "danger",
    unit,
    label,
}: Props) => {
    const animatedValue = useCountUp(value ?? 0);
    const progress = Math.min((animatedValue ?? 0) / MAX_SPEED, 1);

    return (
        <div className="d-flex flex-column align-items-center">
            <div className="speed-gauge-wrapper">
                <div
                    className={`speed-gauge ${
                        isTesting ? "pulse-animate" : ""
                    }`}
                    style={
                        {
                            "--progress": progress,
                            "--progress-colour": `var(--bs-${colour})`,
                        } as React.CSSProperties
                    }
                ></div>

                <div
                    className="speed-marker"
                    style={
                        {
                            "--progress": progress,
                            "--progress-colour": `var(--bs-${colour})`,
                        } as React.CSSProperties
                    }
                ></div>
            </div>

            <div
                className="d-flex flex-column align-items-center"
                style={{
                    position: "absolute",
                    top: "30%",
                }}
            >
                <h3 className="fw-bold mb-0">
                    {isTesting ? "..." : animatedValue}
                </h3>
                <small className="text-muted">{unit}</small>
                <div className="mt-1 small text-muted">{label}</div>
            </div>
        </div>
    );
};

export default SpeedCircle;
