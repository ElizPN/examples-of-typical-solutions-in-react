import React, { useState } from "react";

export function EditArray() {
  const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
  const [editNum, setEditNum] = useState(null); // этот стейт хранит номер элемента массива который редактируется в данный момент

  const result = notes.map((elem, index) => {
    return (
      <p key={index} onClick={() => setEditNum(index)}>
        {elem}
      </p>
    );
  });

  function changeItem(event) {
    const arrayBeforeIndex = notes.slice(0, editNum);
    const arrayAfterIndex = notes.slice(editNum + 1);
    setNotes([...arrayBeforeIndex, event.target.value, ...arrayAfterIndex]);
  }

  return (
    <div>
      {result}
      <input
        value={editNum === 0 || editNum ? notes[editNum] : " "}
        onChange={changeItem}
      />{" "}
    </div>
  );
}
