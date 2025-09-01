import { Stat } from "../types/stats.ts";

export const stats: Stat[] = [
    // Overview / basic
    {
        title: "Active Devices",
        value: 24,
        info: "Devices currently connected to the network",
    },
    {
        title: "Total Packets Captured",
        value: 152340,
        info: "Packets captured since last scan",
    },
    {
        title: "Network Throughput",
        value: "850 Mbps",
        info: "Average network throughput over last 5 minutes",
    },
    {
        title: "Packet Loss",
        value: "0.4%",
        info: "Percentage of packets lost during transmission",
    },
    {
        title: "Latency (Avg)",
        value: "18 ms",
        info: "Average response time to gateway",
    },
    {
        title: "Latency (Min)",
        value: "12 ms",
        info: "Minimum response time to gateway",
    },
    {
        title: "Latency (Max)",
        value: "42 ms",
        info: "Maximum response time to gateway",
    },

    // Connections
    {
        title: "TCP Connections",
        value: 123,
        info: "Number of active TCP connections",
    },
    {
        title: "UDP Connections",
        value: 54,
        info: "Number of active UDP connections",
    },
    {
        title: "Failed Connection Attempts",
        value: 7,
        info: "Connections blocked by firewall or errors",
    },
    {
        title: "Port Scans Detected",
        value: 2,
        info: "Suspicious port scan attempts detected since last scan",
    },

    // Interfaces
    {
        title: "Interface eth0 Usage",
        value: "500 Mbps",
        info: "Current throughput on eth0",
    },
    {
        title: "Interface wlan0 Usage",
        value: "120 Mbps",
        info: "Current throughput on wlan0",
    },
    {
        title: "Interface eth0 Errors",
        value: 0,
        info: "Number of errors/dropped packets on eth0",
    },
    {
        title: "Interface wlan0 Errors",
        value: 3,
        info: "Number of errors/dropped packets on wlan0",
    },

    // Security / Devices
    {
        title: "New Devices Detected",
        value: 1,
        info: "Number of new devices since last scan",
    },
    {
        title: "MAC Changes Detected",
        value: 0,
        info: "Number of devices with changed MAC addresses",
    },
    {
        title: "Duplicate IPs",
        value: 0,
        info: "Number of duplicate IP addresses detected",
    },
    {
        title: "Blacklisted IP Hits",
        value: 0,
        info: "Packets received from known malicious IP addresses",
    },

    // Traffic / Protocols
    {
        title: "ICMP Packets",
        value: 42,
        info: "Number of ICMP packets observed",
    },
    { title: "ARP Packets", value: 15, info: "Number of ARP packets observed" },
    {
        title: "Top IP by Usage",
        value: "192.168.1.12",
        info: "Device consuming the most bandwidth",
    },
    {
        title: "Top Port Usage",
        value: "443",
        info: "Most active network port in the last scan",
    },

    // Bandwidth / throughput
    {
        title: "Bandwidth Usage (24h)",
        value: "320 GB",
        info: "Total bandwidth consumed in the last 24 hours",
    },
    {
        title: "Peak Throughput",
        value: "950 Mbps",
        info: "Highest observed network throughput during the last monitoring period",
    },
    {
        title: "Jitter",
        value: "5 ms",
        info: "Variation in latency for packets over last 5 minutes",
    },

    // Historical / last scan
    {
        title: "Last Scan Time",
        value: "5 minutes ago",
        info: "Time since last network scan completed",
    },
    {
        title: "Alerts Triggered",
        value: 2,
        info: "Number of alerts triggered since last scan",
    },
];

export const groupedStats = {
    Overview: stats.slice(0, 7),
    Connections: stats.slice(7, 11),
    Interfaces: stats.slice(11, 15),
    Security: stats.slice(15, 19),
    Traffic: stats.slice(19, 23),
    Bandwidth: stats.slice(23, 26),
    Historical: stats.slice(26, 28),
};
