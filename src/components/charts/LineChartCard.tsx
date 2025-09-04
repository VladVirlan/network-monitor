import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export interface LineChartProps<T extends object> {
    title: string;
    data: T[];
    xKey: keyof T;
    yKey: keyof T;
    yLabel?: string;
    colour?: string;
    loading?: boolean;
}

const LineChartCard = <T extends object>({
    title,
    data,
    xKey,
    yKey,
    yLabel = "",
    colour = "#0d6efd",
    loading = false,
}: LineChartProps<T>) => {
    const isEmpty = !loading && data.length === 0;

    return (
        <div className="card shadow-lg rounded-3">
            <div className="card-body">
                <h5 className="card-title mb-3 fw-semibold">{title}</h5>

                {loading ? (
                    <Skeleton height={320} />
                ) : isEmpty ? (
                    <div className="text-center text-muted py-5">
                        No traffic data available
                    </div>
                ) : (
                    <ResponsiveContainer width="100%" height={320}>
                        <LineChart data={data}>
                            <CartesianGrid
                                strokeDasharray="3 3"
                                stroke="#dee2e6"
                            />
                            <XAxis dataKey={xKey as string} />
                            <YAxis
                                label={{
                                    value: yLabel,
                                    angle: -90,
                                    position: "insideLeft",
                                }}
                            />
                            <Tooltip />
                            <Legend />
                            <Line
                                type="monotone"
                                dataKey={yKey as string}
                                stroke={colour}
                                strokeWidth={2}
                                dot={{ r: 3 }}
                                activeDot={{ r: 6 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                )}
            </div>
        </div>
    );
};

export default LineChartCard;
