import { Column } from "./Row";
import Row from "./Row";

interface Props<T extends object> {
    data: T[];
    columns: Column<T>[];
}

const Table = <T extends object>({ data, columns }: Props<T>) => {
    return (
        <div className="table-responsive">
            <table className="table table-sm table-bordered table-hover align-middle mb-0 rounded-table">
                <thead className="table-light">
                    <tr>
                        {columns.map((col, index) => (
                            <th key={index} className={col.className}>
                                {col.header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <Row key={index} item={item} columns={columns} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
