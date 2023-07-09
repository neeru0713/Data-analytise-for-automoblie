import React from "react";
import TableRow from "./TableRow";

const Table = ({ data }) => {
  return (
    <div className="h-[640px] w-[85%] bg-[#003951] border border-0 rounded-lg mt-8 ">
      <table className="flex flex-col font-semibold text-white text-md w-[100%] h-[100%] overflow-y-scroll p-4">
        <thead className="flex justify-between font-bold text-blue-50 text-[17px] text-xsw-[100%] ">
        <th className="w-[10%]">Make</th>
            <th className="w-[10%]">Model</th>
            <th className="w-[10%]">Variant</th>
            <th className="w-[10%]">Displacement</th>
            <th className="w-[10%]">Type</th>
            <th className="w-[13%]">Price</th>
            <th className="w-[13%]">Fuel Capacity</th>
            <th className="w-[10%]">Fuel Type</th>
            <th className="w-[10%]">Body Type</th>
            <th className="w-[10%]">City Mileage</th>
            <th className="w-[15%]">ARAI Certified Mileage</th>

        </thead>
        <tbody className="w-100">
          {data.map((rowData) => (
            <TableRow data={rowData} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;