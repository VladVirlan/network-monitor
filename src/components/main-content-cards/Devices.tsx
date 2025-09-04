import { Device } from "../../types/devices.ts";
import { devices } from "../../stats/devicesStats.ts";
import { deviceColumns } from "../../stats/deviceColumns.tsx";
import Table from "../table/Table.tsx";

const Devices = () => {
    return (
        <div className="mt-4">
            <h1 className="mb-4">Devices</h1>
            <div className="border shadow-sm rounded-3">
                <div className="bg-danger text-white px-3 py-2 rounded-top">
                    <h5 className="mb-0">Connected Devices</h5>
                </div>
                <Table<Device> data={devices} columns={deviceColumns} />
            </div>
        </div>
    );
};

export default Devices;
