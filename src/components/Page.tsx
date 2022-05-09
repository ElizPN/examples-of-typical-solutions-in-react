import Box from "@mui/material/Box";
import { useState } from "react";
import { Body } from "./Body";
import { Title } from "./Title";

var contentful = require("contentful");

const client = contentful.createClient({
  space: "a4alnltpsauh",
  accessToken: "n_8u2e0aBdG_U7V2o6u1ClYynSy1MZeblGnrCXOuWhQ",
});

export function Page() {
  const [titleState, setTitleState] = useState("");
  const [bodyState, setBodyState] = useState("");

  client.getEntry("4KzAcNlgeLWb7WynZwVXDl").then((entry: any) => {
    setTitleState(entry.fields.title);
    setBodyState(entry.fields.body.content[0].content[0].value);
  });

  return (
    <Box>
      <Title titleState={titleState} />
      <Body bodyState={bodyState} />
    </Box>
  );
}
