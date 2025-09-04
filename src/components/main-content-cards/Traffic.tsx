import LineChartCard from "../charts/LineChartCard";
import PieChartCard from "../charts/PieChartCard";
import { lineChartData, pieChartData } from "../../stats/trafficStats";

const Traffic = () => {
    return (
        <div className="container mt-4">
            <h1 className="mb-4">Traffic Visualisation</h1>
            <div className="d-flex flex-wrap gap-4 mb-4">
                {lineChartData.map((data) => (
                    <div className="flex-grow-1 flex-shrink-1 chart-card">
                        <LineChartCard {...data} />
                    </div>
                ))}
            </div>

            <div className="d-flex flex-wrap gap-4">
                {pieChartData.map((data) => (
                    <div className="flex-grow-1 flex-shrink-1 chart-card">
                        <PieChartCard {...data} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Traffic;
