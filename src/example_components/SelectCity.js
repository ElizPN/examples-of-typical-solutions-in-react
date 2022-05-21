import React, { useState } from "react";

const cities = ["Stockholm", "Malmo", "Gnesta", "Gothenburg"];

export function SelectCity() {
  const [value, setValue] = useState("");

  const optionCities = cities.map((city, index) => {
    return <option key={index}>{city}</option>;
  });

  return (
    <div>
      <select
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      >
        {optionCities}
      </select>

      <p> Your choice: {value}</p>
    </div>
  );
}
