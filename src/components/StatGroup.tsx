import { Stat } from "../types/stats";
import StatCard from "./StatCard";

interface Props {
    stats: Stat[];
}

const StatGroup = ({ stats }: Props) => {
    return (
        <div className="d-flex flex-wrap justify-content-start gap-3">
            {stats.map((stat, i) => (
                <StatCard key={i} stat={stat} />
            ))}
        </div>
    );
};

export default StatGroup;
