import React, { useState } from "react";

export function GenericFormToModifyArray2() {
  const [array, setArray] = useState([5, 4, 3, 2, 1]);
  const [changeIndex, setChangeIndex] = useState(null);
  const [value, setValue] = useState("");

  const result = array.map((elem, index) => {
    return (
      <p key={index} onClick={() => startEdit(index)}>
        {elem}
      </p>
    );
  });
  function startEdit(index) {
    setChangeIndex(index);
    setValue(changeIndex === 0 || changeIndex ? array[changeIndex] : "");
  }

  function changeHandler(event) {
    setValue(event.target.value);
    if (changeIndex) {
      let arrayBeforeIndex = array.slice(0, changeIndex);
      let arrayAfterIndex = array.slice(changeIndex + 1);
      setArray([...arrayBeforeIndex, event.target.value, ...arrayAfterIndex]);
    }
  }

  function blurHendlel(event) {
    if (!changeIndex) {
      setArray([...array, value]);
    } else {
      setChangeIndex(null);
    }
    setValue("");
  }

  return (
    <div>
      {result}
      <input value={value} onChange={changeHandler} onBlur={blurHendlel} />
    </div>
  );
}
