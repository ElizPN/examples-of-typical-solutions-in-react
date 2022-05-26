import React, { useState } from "react";
import { nanoid } from "nanoid";

// generate id
function id() {
  return nanoid();
}

const initProds = [
  { id: id(), name: "prod1", catg: "catg1", cost: 100 },
  { id: id(), name: "prod2", catg: "catg2", cost: 200 },
  { id: id(), name: "prod3", catg: "catg3", cost: 300 },
];

// generate object that we will add to array as new element.It will storage input's value.
//it must have same structure that elements of our array.

function getInitObj() {
  return {
    id: id(),
    name: "",
    catg: "",
    cost: "",
  };
}

export function GenerFormToModifyObjectsArray() {
  const [prodArray, setProdArray] = useState(initProds);
  const [currentEditElemIndex, setCurrentEditElemIndex] = useState(null);
  const [obj, setObj] = useState(getInitObj());

  // render array to table; create button to set state for id of currently changed elemet
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
    if (currentEditElemIndex) {
      return prodArray.reduce(
        (res, elem) => (elem.id === currentEditElemIndex ? elem[prop] : res),
        " "
      );
    } else {
      return obj[prop];
    }
  }

  // change item of array and set new state (with new item) to array;  set new state for object that will bw added as new element to array
  function changeItem(prop, event) {
    const newProdArray = prodArray.map((elem) =>
      elem.id === currentEditElemIndex
        ? { ...elem, [prop]: event.target.value }
        : elem
    );
    if (currentEditElemIndex) {
      setProdArray(newProdArray);
    } else {
      setObj({ ...obj, [prop]: event.target.value });
    }
  }

  // save item and clean input area
  function saveItem() {
    if (currentEditElemIndex) {
      setCurrentEditElemIndex(null);
    } else {
      setProdArray([...prodArray, obj]);
      setObj(getInitObj());
    }
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
      <button onClick={saveItem}>Save</button>
    </div>
  );
}
