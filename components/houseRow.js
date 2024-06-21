import currencyFormatter from "../helpers/currencyFormatter";

const HouseRow = ({ house }) => {
  return (
    <tr>
      <td>{house.address}</td>
      <td>{house.country}</td>
      <td>{currencyFormatter.format(house.price)}</td>
    </tr>
  );
};

/*
 Destructuring the house
const HouseRow = ({ house: {address,country, price } }) => {
  return (
    <tr>
      <td>{address}</td>
      <td>{country}</td>
      <td>{currencyFormatter.format(price)}</td>
    </tr>
  );
};


*/

export default HouseRow;
