import Tooltip from "../Tooltip";
import Tabs from "../Tabs";
import { groupedStats } from "../../stats/overviewStats";

const Overview = () => {
    return (
        <div className="container mt-4">
            <h1 className="mb-4">Overview</h1>

            <Tabs
                groups={Object.fromEntries(
                    Object.entries(groupedStats).map(([section, stats]) => [
                        section,
                        <div className="d-flex flex-wrap justify-content-start gap-3">
                            {stats.map((stat, index) => (
                                <Tooltip key={index} text={stat.info || ""}>
                                    <div
                                        key={index}
                                        className="card bg-light text-dark border-danger shadow-sm flex-grow-1"
                                    >
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                {stat.title}
                                            </h5>
                                            <p className="card-text display-6">
                                                {stat.value}
                                            </p>
                                        </div>
                                    </div>
                                </Tooltip>
                            ))}
                        </div>,
                    ])
                )}
            />
        </div>
    );
};

export default Overview;
