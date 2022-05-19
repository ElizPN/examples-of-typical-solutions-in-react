import { useState } from "react";

const arr = ["a", "b", "c", "d", "e"];

export function ArrayList() {
  const [arrayNotes, setArrayNotes] = useState(arr);

  const arrayList = arrayNotes.map(function (item, index) {
    return <li key={index}>{item}</li>;
  });

  return <ul>{arrayList}</ul>;
}
