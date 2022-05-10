import Box from "@mui/material/Box";
import { useState } from "react";
import { contentfulConfig } from "../config/contentfulConfig";
import { Counter } from "./Counter";
import { Page } from "./Page";

var contentful = require("contentful");

const configPage = {
  entryId: "4KzAcNlgeLWb7WynZwVXDl",
  componentExample: Counter,
};

export function PageRouter() {
  const client = contentful.createClient(contentfulConfig);

  const [titleState, setTitleState] = useState("");
  const [bodyState, setBodyState] = useState("");

  client.getEntry(configPage.entryId).then((entry: any) => {
    setTitleState(entry.fields.title);
    setBodyState(entry.fields.body.content[0].content[0].value);
  });

  return (
    <Box>
      <Page
        ComponentExampe={configPage.componentExample}
        title={titleState}
        body={bodyState}
      />
    </Box>
  );
}
