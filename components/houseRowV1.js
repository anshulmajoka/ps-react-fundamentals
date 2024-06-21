import React from "react";
import currencyFormatter from "../helpers/currencyFormatter";

const HouseRowV1 = ({ house }) => {
  return (
    <tr>
      <td>{house.address}</td>
      <td>{house.country}</td>
      <td>{currencyFormatter.format(house.price)}</td>
    </tr>
  );
};

const HouseRowV1Memo = React.memo(HouseRowV1);
export {HouseRowV1Memo};
// IF we use HouseRowV1Memo in house list it won't re-render again if ithas the same values

export default HouseRowV1;
