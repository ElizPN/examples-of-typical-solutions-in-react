import React, { useState } from "react";

export function GenericFormToModifyArray() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const [changeIndex, setChangeIndex] = useState(null);
  const [value, setValue] = useState("");

  const result = array.map((elem, index) => {
    return (
      <p
        key={index}
        onClick={() => {
          setChangeIndex(index);
        }}
      >
        {elem}
      </p>
    );
  });

  function changeItem(event) {
    let arrayBeforeIndex = array.slice(0, changeIndex);
    let arrayAfterIndex = array.slice(changeIndex + 1);

    return setArray([
      ...arrayBeforeIndex,
      event.target.value,
      ...arrayAfterIndex,
    ]);
  }

  function addItem() {
    setArray([...array, value]);
  }

  function changeValue(event) {
    setValue(event.target.value);
  }

  function stopEdit() {
    setChangeIndex(null);
  }

  let input;
  if (changeIndex) {
    input = (
      <input
        value={array[changeIndex]}
        onChange={changeItem}
        onBlur={stopEdit}
      />
    );
  } else {
    input = <input value={value} onChange={changeValue} onBlur={addItem} />;
  }

  return (
    <div>
      {result}
      {input}
    </div>
  );
}
