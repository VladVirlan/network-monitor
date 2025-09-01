import Tabs from "../Tabs";
import { groupedStats } from "../../stats/overviewStats";
import StatGroup from "../StatGroup";

const Overview = () => {
    return (
        <div className="container mt-4">
            <h1 className="mb-4">Overview</h1>

            <Tabs
                groups={Object.fromEntries(
                    Object.entries(groupedStats).map(([section, stats]) => [
                        section,
                        <StatGroup stats={stats} />,
                    ])
                )}
            />
        </div>
    );
};

export default Overview;
