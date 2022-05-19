import React, { useState } from "react";

export function IncreaseArray() {
  let [array, setArray] = useState([1, 2, 3, 4, 5]);

  // let result = array.map((elem, index) => {
  //   return <p key={index}>{elem}</p>;
  // });

  // let newArr = Object.assign([], array);
  // newArr.push(6);

  return (
    <div>
      <p>{array}</p>
      <button
        onClick={() => {
          setArray([...array, 6]);
        }}
      >
        BTN
      </button>
    </div>
  );
}
