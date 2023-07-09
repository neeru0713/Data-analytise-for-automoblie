import React from "react";

const TableRow = ({ data }) => {
  return (
    <tr className="flex justify-between w-100 py-5 " key={data._id}>
      
      <td className="w-[10%]">{data.Make}</td>
              <td className="w-[10%]">{data.Model}</td>
              <td className="w-[10%]">{data.Variant}</td>
              <td className="w-[10%]">{data.Displacement}</td>
              <td className="w-[10%]">{data.Type}</td>
              <td className="w-[13%]">{data.ExShowroom_Price}</td>
              <td className="w-[13%]">{data.Fuel_Tank_Capacity}</td>
              <td className="w-[10%]">{data.Fuel_Type}</td>
              <td className="w-[10%]">{data.Body_Type}</td>
              <td className="w-[10%]">{data.City_Mileage}</td>
              <td className="w-[15%]">{data.ARAI_Certified_Mileage}</td>
    </tr>
  );
};

export default TableRow;