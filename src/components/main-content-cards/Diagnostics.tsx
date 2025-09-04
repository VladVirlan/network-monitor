import Table from "../table/Table.tsx";
import { Diagnostic } from "../../types/diagnostics.ts";
import { diagnostics } from "../../stats/diagnosticsStats.ts";
import { diagnosticColumns } from "../../stats/diagnosticColumns.tsx";

const Diagnostics = () => {
    return (
        <div className="mt-4">
            <h1 className="mb-4">Diagnostics</h1>
            <div className="border shadow-sm rounded-3">
                <div className="bg-danger text-white px-3 py-2 rounded-top">
                    <h5 className="mb-0">Network Diagnostics</h5>
                </div>
                <Table<Diagnostic>
                    data={diagnostics}
                    columns={diagnosticColumns}
                />
            </div>
        </div>
    );
};

export default Diagnostics;
