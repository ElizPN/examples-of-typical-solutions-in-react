import { useState } from "react";

var contentful = require("contentful");

const client = contentful.createClient({
  space: "a4alnltpsauh",
  accessToken: "n_8u2e0aBdG_U7V2o6u1ClYynSy1MZeblGnrCXOuWhQ",
});

export function Body() {
  const [bodyState, setBodyState] = useState("");

  client.getEntry("4KzAcNlgeLWb7WynZwVXDl").then((entry: any) => {
    setBodyState(entry.fields.body.content[0].content[0].value);

    console.log(bodyState);
  });

  return <p>{bodyState}</p>;
}
