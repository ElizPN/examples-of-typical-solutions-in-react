import Box from "@mui/material/Box";
import { useState } from "react";
import { Body } from "./Body";
import { Counter } from "./Counter";

import { Title } from "./Title";

var contentful = require("contentful");

const client = contentful.createClient({
  space: "a4alnltpsauh",
  accessToken: "n_8u2e0aBdG_U7V2o6u1ClYynSy1MZeblGnrCXOuWhQ",
});

interface PageProps {
  entryId: string;
}

export function Page(props: PageProps) {
  const { entryId } = props;

  const [titleState, setTitleState] = useState("");
  const [bodyState, setBodyState] = useState("");

  client.getEntry(entryId).then((entry: any) => {
    setTitleState(entry.fields.title);
    setBodyState(entry.fields.body.content[0].content[0].value);
  });

  return (
    <Box>
      <Title titleState={titleState} />
      <Counter />
      <Body bodyState={bodyState} />
    </Box>
  );
}
