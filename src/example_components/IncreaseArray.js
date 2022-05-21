import React, { useState } from "react";

export function IncreaseArray() {
  let [arrayNumbers, setArrayNumbers] = useState([1, 2, 3, 4, 5]);

  let newArr = Object.assign([], arrayNumbers);
  newArr.push(6);

  return (
    <div>
      <p>{arrayNumbers}</p>
      <button
        onClick={() => {
          // setArrayNumbers([...arrayNumbers, 6]);
          setArrayNumbers(newArr);
        }}
      >
        BTN
      </button>
    </div>
  );
}
