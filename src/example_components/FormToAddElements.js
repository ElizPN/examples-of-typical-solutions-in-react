import React, { useState } from "react";
import { nanoid } from "nanoid";

function id() {
  return nanoid();
}

const initProds = [
  { id: id(), name: "prod1", catg: "catg1", cost: 100 },
  { id: id(), name: "prod2", catg: "catg2", cost: 200 },
  { id: id(), name: "prod3", catg: "catg3", cost: 300 },
];

function getInitObject() {
  return {
    id: id(),
    name: "",
    catg: "",
    cost: "",
  };
}

export function FormToAddElements() {
  const [prodArray, setProdArray] = useState(initProds);
  const [obj, setObj] = useState(getInitObject());

  const initProdsList = prodArray.map((elem) => {
    return (
      <tr key={elem.id}>
        <td>{elem.name}</td>
        <td>{elem.catg}</td>
        <td>{elem.cost}</td>
      </tr>
    );
  });

  function addElement() {
    setProdArray([...prodArray, obj]);
    setObj(getInitObject());
  }

  function changeProperty(prop, event) {
    setObj({ ...obj, [prop]: event.target.value });
  }

  return (
    <div>
      <table>
        <tbody>{initProdsList}</tbody>
      </table>

      <input
        value={obj.name}
        onChange={(event) => changeProperty("name", event)}
      />
      <input
        value={obj.catg}
        onChange={(event) => changeProperty("catg", event)}
      />
      <input
        value={obj.cost}
        onChange={(event) => changeProperty("cost", event)}
      />
      <button onClick={addElement}>add element</button>
    </div>
  );
}
