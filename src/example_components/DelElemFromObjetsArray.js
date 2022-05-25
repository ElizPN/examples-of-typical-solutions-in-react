import React, { useState } from "react";
import { nanoid } from "nanoid";

function id() {
  return nanoid();
}

const initProds = [
  { id: id(), name: "apples", catg: "catg1", cost: 100 },
  { id: id(), name: "pears", catg: "catg2", cost: 200 },
  { id: id(), name: "potato", catg: "catg3", cost: 300 },
];

export function DelElemFromObjetsArray() {
  const [prodArray, setProdArray] = useState(initProds);

  function deleteElem(id) {
    const elemForRemuve = prodArray.filter((elem) => elem.id !== id);
    setProdArray(elemForRemuve);
  }

  //   if (elem.id !== id) {
  //     return true;
  //   }

  const tableProd = prodArray.map((elem) => {
    return (
      <tr key={elem.id}>
        <td>{elem.name}</td>
        <td>{elem.catg}</td>
        <td>{elem.cost}</td>
        <td>
          <button
            onClick={() => {
              deleteElem(elem.id);
            }}
          >
            delete
          </button>
        </td>
      </tr>
    );
  });

  return (
    <table>
      <tbody>{tableProd}</tbody>
    </table>
  );
}
