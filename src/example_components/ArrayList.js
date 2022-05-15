import { useState } from "react";

const arr = ["a", "b", "c", "d", "e"];

export function ArrayList() {
  const [notes, setNotes] = useState(arr);

  const arrayList = notes.map(function (item, index) {
    return <li key={index}>{item}</li>;
  });

  return <ul>{arrayList}</ul>;
}
