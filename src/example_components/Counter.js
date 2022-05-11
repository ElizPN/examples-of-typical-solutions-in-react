import React, { useState } from "react";

export function Counter() {
  let [value1, setValue1] = useState(0);
  let [value2, setValue2] = useState(0);
  let [result1, setResult1] = useState(0);
  let [result2, setResult2] = useState(0);

  return (
    <div>
      <input
        value={value1}
        onChange={(event) => {
          setValue1(event.target.value);
        }}
      />
      <input
        value={value2}
        onChange={(event) => {
          setValue2(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setResult1(Number(value1) + Number(value2));
        }}
      >
        Count Sum
      </button>

      <button
        onClick={() => {
          setResult2(Number(value1) - Number(value2));
        }}
      >
        Count Product
      </button>
      <p>{result1}</p>
      <p>{result2}</p>
    </div>
  );
}
