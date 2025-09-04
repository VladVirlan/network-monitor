import { Diagnostic } from "../types/diagnostics.ts";

export const getOnlineBadge = (online: boolean) => {
    return online ? "bg-success" : "bg-secondary";
};

export const getStatusBadge = (status: "low" | "medium" | "high") => {
    switch (status) {
        case "low":
            return "bg-success";
        case "medium":
            return "bg-warning text-dark";
        case "high":
            return "bg-danger";
    }
};

export const getLatencyStatus = (latency: number) => {
    if (latency < 100) return "low";
    if (latency < 200) return "medium";
    return "high";
};

export const getJitterStatus = (jitter: number) => {
    if (jitter < 20) return "low";
    if (jitter < 50) return "medium";
    return "high";
};

export const getPacketLossStatus = (packetLoss: number) => {
    if (packetLoss === 0) return "low";
    if (packetLoss <= 5) return "medium";
    return "high";
};

export const diagnostics: Diagnostic[] = [
    {
        ip: "8.8.8.8",
        latency: 30,
        online: true,
        packetLoss: 0,
        jitter: 5,
        lastSeen: "Just now",
        bandwidth: 150,
    },
    {
        ip: "1.1.1.1",
        latency: 120,
        online: true,
        packetLoss: 2,
        jitter: 15,
        lastSeen: "Just now",
        bandwidth: 80,
    },
    {
        ip: "192.168.1.1",
        latency: 250,
        online: false,
        packetLoss: 10,
        jitter: 50,
        lastSeen: "15 minutes ago",
        bandwidth: 0,
    },
];
