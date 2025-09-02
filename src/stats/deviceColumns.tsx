import { Column } from "../components/Row";
import { Device } from "../types/devices";

export const deviceColumns: Column<Device>[] = [
    { key: "ip", header: "IP Address" },
    { key: "mac", header: "MAC Address", className: "d-none d-md-table-cell" },
    { key: "hostname", header: "Hostname" },
    { key: "vendor", header: "Vendor", className: "d-none d-lg-table-cell" },
    {
        key: "interface",
        header: "Interface",
        className: "d-none d-lg-table-cell",
    },
    { key: "os", header: "OS", className: "d-none d-lg-table-cell" },
    { key: "uptime", header: "Uptime", className: "d-none d-md-table-cell" },
    {
        key: "lastSeen",
        header: "Last Seen",
        className: "d-none d-lg-table-cell",
    },
    {
        key: "status",
        header: "Status",
        render: (value: string) => (
            <span
                className={`badge ${
                    value === "online" ? "bg-success" : "bg-secondary"
                }`}
            >
                {value.charAt(0).toUpperCase() + value.slice(1)}
            </span>
        ),
    },
    {
        key: "openPorts",
        header: "Open Ports",
        className: "d-none d-lg-table-cell",
        render: (ports: number[]) =>
            ports.length > 0 ? (
                <span className="text-nowrap">{ports.join(", ")}</span>
            ) : (
                <span className="text-muted">None</span>
            ),
    },
    { key: "ping", header: "Ping" },
];
