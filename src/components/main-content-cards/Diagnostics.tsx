import { Stat } from "../../types/stats";
import DiagnosticsCard from "../diagnostics-components/DiagnosticsCard";
import DiagnosticsStatGroup from "../diagnostics-components/DiagnosticsStatGroup";
import useDiagnostics from "../hooks/useDiagnostics";
import { mapDiagnosticsToStats } from "../../stats/diagnosticsStats";

const Diagnostics = () => {
    const { isTesting, results, runTest } = useDiagnostics();
    const stats: Stat[] = results ? mapDiagnosticsToStats(results) : [];

    return (
        <div className="container py-4">
            <h2 className="mb-4 fw-bold">Network Diagnostics</h2>

            <DiagnosticsCard
                isTesting={isTesting}
                download={results?.downloadSpeed ?? null}
                upload={results?.uploadSpeed ?? null}
                latency={results?.latency ?? null}
                onRunTest={runTest}
            />

            <DiagnosticsStatGroup isTesting={isTesting} stats={stats} />
        </div>
    );
};

export default Diagnostics;
