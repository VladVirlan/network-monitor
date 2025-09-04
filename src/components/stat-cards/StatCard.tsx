import Tooltip from "../tooltip/Tooltip";
import { Stat } from "../../types/stats";

interface Props {
    stat: Stat;
}

const StatCard = ({ stat }: Props) => {
    return (
        <Tooltip text={stat.info || ""}>
            <div className="card bg-light text-dark border-danger shadow-sm flex-grow-1">
                <div className="card-body">
                    <h5 className="card-title">{stat.title}</h5>
                    <p className="card-text display-6">{stat.value}</p>
                </div>
            </div>
        </Tooltip>
    );
};

export default StatCard;
