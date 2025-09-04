import { Diagnostic } from "../types/diagnostics.ts";
import { Column } from "../components/table/Row.tsx";
import {
    getLatencyStatus,
    getStatusBadge,
    getOnlineBadge,
    getJitterStatus,
    getPacketLossStatus,
} from "./diagnosticsStats.ts";

export const diagnosticColumns: Column<Diagnostic>[] = [
    {
        key: "ip",
        header: "IP Address",
    },
    {
        key: "online",
        header: "Status",
        className: "d-none d-md-table-cell",
        render: (online: boolean) => {
            const badgeClass = getOnlineBadge(online);
            return (
                <span className={`badge ${badgeClass}`}>
                    {online ? "Online" : "Offline"}
                </span>
            );
        },
    },
    {
        key: "latency",
        header: "Latency (ms)",
        render: (value: number) => {
            const status = getLatencyStatus(value);
            const badgeClass = getStatusBadge(status);
            return <span className={`badge ${badgeClass}`}>{value} ms</span>;
        },
    },
    {
        key: "jitter",
        header: "Jitter (ms)",
        className: "d-none d-lg-table-cell",
        render: (value: number) => {
            const status = getJitterStatus(value);
            const badgeClass = getStatusBadge(status);
            return <span className={`badge ${badgeClass}`}>{value} ms</span>;
        },
    },
    {
        key: "packetLoss",
        header: "Packet Loss",
        className: "d-none d-md-table-cell",
        render: (value: number) => {
            const status = getPacketLossStatus(value);
            const badgeClass = getStatusBadge(status);
            return <span className={`badge ${badgeClass}`}>{value}%</span>;
        },
    },
    {
        key: "bandwidth",
        header: "Bandwidth",
        className: "d-none d-lg-table-cell",
        render: (value: number) => <span>{value} Mbps</span>,
    },
    {
        key: "lastSeen",
        header: "Last Seen",
        className: "d-none d-lg-table-cell",
        render: (value: string) => <span>{value}</span>,
    },
];
