import { ReactNode } from "react";

export interface Column<T extends object> {
    key: keyof T;
    header: string;
    render?: (value: any, item: T) => ReactNode;
    className?: string;
}

interface Props<T extends object> {
    item: T;
    columns: Column<T>[];
}

const Row = <T extends object>({ item, columns }: Props<T>) => {
    return (
        <tr>
            {columns.map((col, index) => {
                return (
                    <td key={index} className={col.className}>
                        {col.render
                            ? col.render(item[col.key], item)
                            : String(item[col.key] ?? "-")}
                    </td>
                );
            })}
        </tr>
    );
};

export default Row;
