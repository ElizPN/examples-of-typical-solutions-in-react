import React, { useState } from "react";
import { nanoid } from "nanoid";

const initProds = [
  { id: id(), name: "prod1", catg: "catg1", cost: 100 },
  { id: id(), name: "prod2", catg: "catg2", cost: 200 },
  { id: id(), name: "prod3", catg: "catg3", cost: 300 },
];

function id() {
  return nanoid();
}

export function EditObjectArray() {
  const [prodArray, setProdArray] = useState(initProds);
  const [currentEditElemIndex, setCurrentEditElemIndex] = useState(null);

  const prodArrayList = prodArray.map((elem) => {
    return (
      <tr key={elem.id}>
        <td>{elem.name}</td>
        <td>{elem.catg}</td>
        <td>{elem.cost}</td>
        <td>
          <button onClick={() => setCurrentEditElemIndex(elem.id)}>
            Change
          </button>
        </td>
      </tr>
    );
  });

  function getValue(prop) {
    return prodArray.reduce((res, elem) => {
      if (elem.id === currentEditElemIndex) {
        return elem[prop];
      } else {
        return res;
      }
    }, "");
  }

  function changeItem(prop, event) {
    let newItem = prodArray.map((elem) => {
      if (elem.id === currentEditElemIndex) {
        return { ...elem, [prop]: event.target.value };
      } else {
        return elem;
      }
    });
    setProdArray(newItem);
  }

  const prop1Value = getValue("name");
  const prop2Value = getValue("catg");
  const prop3Value = getValue("cost");

  return (
    <div>
      <table>
        <tbody>{prodArrayList}</tbody>
      </table>
      <input
        value={prop1Value}
        onChange={(event) => changeItem("name", event)}
      ></input>
      <input
        value={prop2Value}
        onChange={(event) => changeItem("catg", event)}
      ></input>
      <input
        value={prop3Value}
        onChange={(event) => changeItem("cost", event)}
      ></input>
    </div>
  );
}
