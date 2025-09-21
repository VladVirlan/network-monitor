import { DiagnosticsResult } from "../types/diagnostics";
import { Stat } from "../types/stats";

export const diagnostics: DiagnosticsResult = {
    downloadSpeed: 92.4,
    uploadSpeed: 21.3,
    latency: 16,
    jitter: 3,
    publicIp: "203.0.113.45",
    localIp: "192.168.1.42",
    dnsTime: 27,
    packetLoss: 0.2,
};

export function mapDiagnosticsToStats(results: DiagnosticsResult): Stat[] {
    return [
        {
            title: "Download Speed",
            value: `${results.downloadSpeed} Mbps`,
            info: "Measured throughput from test server to your device.",
        },
        {
            title: "Upload Speed",
            value: `${results.uploadSpeed} Mbps`,
            info: "Measured throughput from your device to test server.",
        },
        {
            title: "Latency",
            value: `${results.latency} ms`,
            info: "Average round-trip time for packets.",
        },
        {
            title: "Jitter",
            value: `${results.jitter} ms`,
            info: "Variation in packet latency.",
        },
        {
            title: "Public IP",
            value: results.publicIp,
            info: "Your external-facing IP address.",
        },
        {
            title: "Local IP",
            value: results.localIp,
            info: "Your machine's internal network address.",
        },
        {
            title: "DNS Time",
            value: `${results.dnsTime} ms`,
            info: "Time taken to resolve a hostname.",
        },
        {
            title: "Packet Loss",
            value: `${results.packetLoss}%`,
            info: "Percentage of lost packets during the test.",
        },
    ];
}