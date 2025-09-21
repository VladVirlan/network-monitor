import { Stat } from "../../types/stats";
import Loader from "../Loader";
import StatGroup from "../stat-cards/StatGroup";

interface Props {
    isTesting: boolean;
    stats: Stat[];
}

const DiagnosticsStatGroup = ({ isTesting, stats }: Props) => {
    if (isTesting) {
        return <Loader message="Running diagnostics..." height={150} />;
    }
    if (stats.length > 0) {
        return <StatGroup stats={stats} />;
    }
    return null;
};

export default DiagnosticsStatGroup;
