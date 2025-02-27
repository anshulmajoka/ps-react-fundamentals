import React, { Fragment, useState } from "react";
import HouseRow from "./houseRow";
import currencyFormatter from "../helpers/currencyFormatter";

const houseArray = [
  {
    id: 1,
    address: "12 Valley of Kings, Geneva",
    country: "Switzerland",
    price: 900000,
  },
  {
    id: 2,
    address: "89 Road of Forks, Bern",
    country: "Switzerland",
    price: 500000,
  },
];

const HouseListV1 = () => {
  
  return (
    <Fragment>
      <div className="row mb-2">
        <h5 className="themeFontColor text-center">
          Houses currently on the market
        </h5>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Address</th>
            <th>Country</th>
            <th>Asking Price</th>
          </tr>
        </thead>
        <tbody>
          {houseArray.map((house) => (
            <tr key={house.id}>
              <td>{house.address}</td>
              <td>{house.country}</td>
              <td>{currencyFormatter.format(house.price)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </Fragment>
  );
};

export default HouseListV1;
