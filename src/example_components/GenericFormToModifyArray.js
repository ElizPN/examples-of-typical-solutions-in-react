import React, { useState } from "react";

export function GenericFormToModifyArray() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const [currentEditElemIndex, setCurrentEditElemIndex] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const result = array.map((elem, index) => {
    return (
      <p
        key={index}
        onClick={() => {
          setCurrentEditElemIndex(index);
        }}
      >
        {elem}
      </p>
    );
  });

  function changeItem(event) {
    let arrayBeforeIndex = array.slice(0, currentEditElemIndex);
    let arrayAfterIndex = array.slice(currentEditElemIndex + 1);

    return setArray([
      ...arrayBeforeIndex,
      event.target.value,
      ...arrayAfterIndex,
    ]);
  }

  function addItem() {
    setArray([...array, inputValue]);
  }

  function changeValue(event) {
    setInputValue(event.target.value);
  }

  function stopEdit() {
    setCurrentEditElemIndex(null);
  }

  let input;
  if (currentEditElemIndex >= 0) {
    input = (
      <input
        value={array[currentEditElemIndex]}
        onChange={changeItem}
        onBlur={stopEdit}
      />
    );
  } else {
    input = (
      <input value={inputValue} onChange={changeValue} onBlur={addItem} />
    );
  }

  return (
    <div>
      {result}
      {input}
    </div>
  );
}
