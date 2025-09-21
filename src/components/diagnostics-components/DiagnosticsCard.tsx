import PingStat from "./PingStat";
import SpeedCircle from "./SpeedCircle";

interface Props {
    isTesting: boolean;
    download: number | null;
    upload: number | null;
    latency: number | null;
    onRunTest: () => void;
}

const DiagnosticsCard = ({
    isTesting,
    download,
    upload,
    latency,
    onRunTest,
}: Props) => {
    return (
        <div className="card bg-light text-dark border-danger shadow-sm text-center mb-4">
            <div className="card-body">
                <div className="d-flex justify-content-center gap-5 mb-4">
                    <SpeedCircle
                        value={download}
                        isTesting={isTesting}
                        unit="Mbps"
                        label="Download"
                    />

                    <SpeedCircle
                        value={upload}
                        isTesting={isTesting}
                        unit="Mbps"
                        label="Upload"
                    />
                </div>

                <PingStat isTesting={isTesting} latency={latency} />

                <button
                    className="btn btn-danger mt-3"
                    onClick={onRunTest}
                    disabled={isTesting}
                >
                    Run Test
                </button>
            </div>
        </div>
    );
};

export default DiagnosticsCard;
