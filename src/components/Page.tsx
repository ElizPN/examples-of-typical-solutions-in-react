import Box from "@mui/material/Box";
import { useState } from "react";
import { Body } from "./Body";
import { Counter } from "./Counter";

import { Title } from "./Title";

interface PageProps {
  entryId: string;
  client: {
    getEntry: (entryId: string) => Promise<void>;
  };
}

export function Page(props: PageProps) {
  const { entryId, client } = props;

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
