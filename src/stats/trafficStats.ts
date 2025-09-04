import { LineChartProps } from "../components/charts/LineChartCard.tsx";
import { PieChartProps } from "../components/charts/PieChartCard.tsx";
import { BandwidthPoint, ProtocolPoint, LatencyPoint, PacketLossPoint, ConnectionPoint, ApplicationPoint } from "../types/trafficTypes.ts";

export const bandwidthData: BandwidthPoint[] = [
  { time: "10:00", bandwidth: 95 },
  { time: "10:05", bandwidth: 220 },
  { time: "10:10", bandwidth: 160 },
  { time: "10:15", bandwidth: 310 },
  { time: "10:20", bandwidth: 180 },
  { time: "10:25", bandwidth: 140 },
  { time: "10:30", bandwidth: 200 },
  { time: "10:35", bandwidth: 280 },
  { time: "10:40", bandwidth: 175 },
  { time: "10:45", bandwidth: 260 },
  { time: "10:50", bandwidth: 190 },
  { time: "10:55", bandwidth: 230 },
];

export const protocolData: ProtocolPoint[] = [
  { name: "TCP", value: 70 },
  { name: "UDP", value: 26 },
  { name: "ICMP", value: 4 },
];

export const latencyData: LatencyPoint[] = [
  { time: "10:00", latency: 18 },
  { time: "10:05", latency: 20 },
  { time: "10:10", latency: 22 },
  { time: "10:15", latency: 35 },
  { time: "10:20", latency: 19 },
  { time: "10:25", latency: 21 },
  { time: "10:30", latency: 23 },
  { time: "10:35", latency: 27 },
  { time: "10:40", latency: 30 },
  { time: "10:45", latency: 24 },
  { time: "10:50", latency: 22 },
  { time: "10:55", latency: 20 },
];

export const packetLossData: PacketLossPoint[] = [
  { time: "10:00", loss: 0.0 },
  { time: "10:05", loss: 0.2 },
  { time: "10:10", loss: 0.0 },
  { time: "10:15", loss: 1.2 },
  { time: "10:20", loss: 0.1 },
  { time: "10:25", loss: 0.0 },
  { time: "10:30", loss: 0.3 },
  { time: "10:35", loss: 0.0 },
  { time: "10:40", loss: 0.8 },
  { time: "10:45", loss: 0.0 },
  { time: "10:50", loss: 0.5 },
  { time: "10:55", loss: 0.0 },
];

export const connectionData: ConnectionPoint[] = [
  { name: "Desktop", value: 35 },
  { name: "Mobile", value: 42 },
  { name: "Tablet", value: 14 },
  { name: "IoT", value: 28 },
  { name: "Server", value: 6 },
];

export const applicationData: ApplicationPoint[] = [
  { name: "Web Browsing", value: 28 },
  { name: "Streaming", value: 42 },
  { name: "Gaming", value: 12 },
  { name: "VoIP", value: 8 },
  { name: "Cloud/Sync", value: 7 },
  { name: "Other", value: 3 },
];

export const lineChartData: LineChartProps<any>[] = [
    {
      title: "Bandwidth Over Time",
      data: bandwidthData,
      xKey: "time",
      yKey: "bandwidth",
      yLabel: "Mbps",
      colour: "#dc3545",
    },
    {
      title: "Latency Over Time",
      data: latencyData,
      xKey: "time",
      yKey: "latency",
      yLabel: "ms",
      colour: "#ff6b6b",
    },
    {
      title: "Packet Loss Over Time",
      data: packetLossData,
      xKey: "time",
      yKey: "loss",
      yLabel: "%",
      colour: "#a71d2a",
    },
]

export const pieChartData: PieChartProps<any>[] = [
    { title: "Protocol Distribution", data: protocolData },
    { title: "Device Connections", data: connectionData },
    { title: "Application Usage", data: applicationData },
];
