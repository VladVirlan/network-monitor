import { useState } from "react";
import { DiagnosticsResult } from "../../types/diagnostics";
import { diagnostics } from "../../stats/diagnosticsStats";

const useDiagnostics = () => {
const [isTesting, setIsTesting] = useState(false);
    const [results, setResults] = useState<DiagnosticsResult | null>(null);

    const runTest = async () => {
        setIsTesting(true);
        setResults(null);

        await new Promise((r) => setTimeout(r, 1500));

        setResults(diagnostics);
        setIsTesting(false);
    };

    return { isTesting, results, runTest };
}

export default useDiagnostics;