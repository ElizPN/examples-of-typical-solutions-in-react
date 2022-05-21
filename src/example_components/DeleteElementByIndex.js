import React, { useState } from "react";

export function DeleteElementByIndex() {
  const [array, setArray] = useState([1, 2, 3, 4, 5, 6]);

  const newArray = array.map((elem, index) => (
    <div key={index}>
      <p>{elem}</p>
      <button onClick={() => deleteElement(index)}>BTN</button>
    </div>
  ));

  function deleteElement(index) {
    const araryBeforeIndex = array.slice(0, index);
    const arrayAfterIndex = array.slice(index + 1);

    return setArray([...araryBeforeIndex, ...arrayAfterIndex]);
  }

  return <div>{newArray}</div>;
}
