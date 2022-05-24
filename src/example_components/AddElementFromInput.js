import React, { useState } from "react";

export function AddElementFromInput() {
  let [lettersArray, setLettersArray] = useState(["a", "b", "c", "d", "e"]);
  let [inputValue, setInputValue] = useState("");

  function addElement() {
    const newLettersArray = [...lettersArray, inputValue];
    setLettersArray(newLettersArray);
    setInputValue(" ");
  }

  return (
    <div>
      <input
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      />
      <button onClick={addElement}>Add element</button>

      <div>
        {lettersArray.map((elem, index) => (
          <p key={index}>{elem}</p>
        ))}
      </div>
    </div>
  );
}
