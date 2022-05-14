import React, { useState } from "react";

export function SelectCity() {
  let [value, setValue] = useState("");

  return (
    <div>
      <select
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      >
        <option>Stockholm</option>
        <option>Malmo</option>
        <option>Gnesta</option>
        <option>Gothenburg</option>
      </select>

      <p> Your choice: {value}</p>
    </div>
  );
}
