import React, { useState } from "react";

function getAverage(arr) {
  let sum = 0;
  let avarage;
  for (let elem of arr) {
    sum += elem;
  }

  avarage = sum / arr.length;
  return avarage;
}

export function BindingInputsToArray() {
  const [array, setArray] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const renderToInput = array.map((elem, index) => {
    return (
      <input
        key={index}
        value={elem}
        onChange={(event) => onChangeInput(index, event)}
      />
    );
  });

  function onChangeInput(index, event) {
    const araryBeforeIndex = array.slice(0, index);
    const arrayAfterIndex = array.slice(index + 1);
    return setArray([
      ...araryBeforeIndex,
      parseInt(event.target.value) || 0, // or we can use Number(event.target.value) || 0
      ...arrayAfterIndex,
    ]);
  }

  return (
    <div>
      {getAverage(array)}
      {renderToInput}
    </div>
  );
}
