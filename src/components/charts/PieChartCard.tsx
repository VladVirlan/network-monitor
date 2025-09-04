import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export interface PieChartProps<T extends { name: string; value: number }> {
    title: string;
    data: T[];
    colours?: string[];
    loading?: boolean;
}

const DEFAULT_COLOURS = ["#0d6efd", "#198754", "#ffc107", "#dc3545", "#6f42c1"];

const PieChartCard = <T extends { name: string; value: number }>({
    title,
    data,
    colours = DEFAULT_COLOURS,
    loading = false,
}: PieChartProps<T>) => {
    const isEmpty = !loading && data.length === 0;

    return (
        <div className="card shadow-lg rounded-3">
            <div className="card-body">
                <h5 className="card-title mb-4 fw-semibold">{title}</h5>

                {loading ? (
                    <Skeleton height={320} />
                ) : isEmpty ? (
                    <div className="text-center text-muted py-5">
                        No traffic data available
                    </div>
                ) : (
                    <ResponsiveContainer width="100%" height={320}>
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={({
                                    name,
                                    percent,
                                }: {
                                    name?: string;
                                    percent?: number;
                                }) =>
                                    `${name ?? ""}: ${
                                        percent ? (percent * 100).toFixed(0) : 0
                                    }%`
                                }
                                outerRadius={110}
                                dataKey="value"
                            >
                                {data.map((_, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={colours[index % colours.length]}
                                    />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                )}
            </div>
        </div>
    );
};

export default PieChartCard;
