import { useState } from "react";

var contentful = require("contentful");

const client = contentful.createClient({
  space: "a4alnltpsauh",
  accessToken: "n_8u2e0aBdG_U7V2o6u1ClYynSy1MZeblGnrCXOuWhQ",
});

export function Title() {
  const [titleState, setTitleState] = useState("");

  client.getEntry("4KzAcNlgeLWb7WynZwVXDl").then((entry: any) => {
    setTitleState(entry.fields.title);
    console.log(titleState);
  });

  return <h2>{titleState}</h2>;
}
