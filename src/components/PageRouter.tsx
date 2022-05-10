import Box from "@mui/material/Box";
import { useState } from "react";
import { Counter } from "./Counter";
import { Page } from "./Page";

var contentful = require("contentful");

export function PageRouter() {
  const client = contentful.createClient({
    space: "a4alnltpsauh",
    accessToken: "n_8u2e0aBdG_U7V2o6u1ClYynSy1MZeblGnrCXOuWhQ",
  });
  const entryId = "4KzAcNlgeLWb7WynZwVXDl";

  const [titleState, setTitleState] = useState("");
  const [bodyState, setBodyState] = useState("");

  client.getEntry(entryId).then((entry: any) => {
    setTitleState(entry.fields.title);
    setBodyState(entry.fields.body.content[0].content[0].value);
  });

  return (
    <Box>
      <Page TemplatePage={Counter} title={titleState} body={bodyState} />
    </Box>
  );
}
