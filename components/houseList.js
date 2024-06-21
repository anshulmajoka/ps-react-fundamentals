import React, { useState } from "react";
import HouseRow from "./houseRow";

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

/*
Hooks are essential when working with function components in React. 
A hook is a function with a "use" prefix that encapsulates complexity, allowing the use of advanced functionality easily. 
Built-in hooks enable access to React's internal features, and custom hooks can also be created. 
Hooks must be imported like components. 
There are two main rules for using hooks: 
they should only be called at the top level, not conditionally or after early returns, to ensure consistent order of execution, 
and they must be called within a function component, except for custom hooks that can call other hooks. The most commonly used hook is the state hook.
*/

/*
Props are used to pass data from a parent to a child component, while state is internal data managed within a component. 
In React, JSX is used to instruct how to render data, which React then converts into HTML. 
To dynamically update the UI, state is necessary. 
When we modify the data (like adding a row to an array), React needs to know about these changes to update the UI. 
The state hook, `useState`, initializes the state and provides a way to update it through a setter function. 
This ensures React knows when the state changes and can re-render the UI accordingly.
To illustrate this, in a `HouseList` component, `useState` is used to manage the `houses` array. 
The state is initialized with the array, and the `setHouses` function updates it. When a button is added to the JSX to add a new house, an `addHouse` function is created. 
This function uses `setHouses` to add a new house to the array without directly modifying the existing state, ensuring React detects the change and updates the UI. 
Additionally, multiple state hooks can be used within a single component for different pieces of state. 
For example, a counter can be implemented using `useState` where `setCounter` is called to update the counter value. React efficiently manages these updates, ensuring the UI reflects the current state. 
In summary, state is essential for managing internal component data and updating the UI dynamically in React. The `useState` hook initializes state, provides a current state value, and includes a function to update the state. This mechanism ensures React can detect changes and update the UI as needed.
*/
const HouseList = () => {
  //  must be called at the top
  // [currentState, functionToChangeTheState] = userState(initialState);
  const [houses, setHouses] = useState(houseArray);
  const [counter, setCounter] = useState(0);
  

  const callCounter = () =>{
    
    setCounter((currentState)=> {
          return currentState+1;
    });

  }

  const addHouse = () => {
    // this must return the  new arrya
    setHouses([
      ...houses,
      {
        id: 3,
        address: "32 Valley Way, New York",
        country: "USA",
        price: 1000000,
      },
    ]);
  };

  return (
    <>
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
        {/* key is always used where the map is */}
        <tbody>
          {houses.map((h) => (
            <HouseRow key={h.id} house={h} />
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={addHouse}>
        Add
      </button>

      <button className="btn btn-primary" onClick={callCounter}>
        Count {counter}
      </button>
    </>
  );
};

export default HouseList;
