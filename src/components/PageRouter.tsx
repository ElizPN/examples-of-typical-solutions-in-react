import Box from "@mui/material/Box";
import React, { useState } from "react";
import { contentfulConfig } from "../config/contentfulConfig";
import { componentsMap } from "./componentsMap";
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
  const [ComponentNameState, setComponenetNameState] = useState("");

  const component = componentsMap[ComponentNameState];

  client
    .getEntries({
      "fields.slug": "states-counter",
      content_type: "page",
    })
    .then(function (entries: any) {
      entries.items.forEach(function (entry: any) {
        setTitleState(entry.fields.title);
        setBodyState(entry.fields.body.content[0].content[0].value);
        setComponenetNameState(entry.fields.nameComponent);
      });
    });

  if (!component) {
    return <p>Loading...</p>;
  }

  return (
    <Box>
      <Page ComponentExampe={component} title={titleState} body={bodyState} />
    </Box>
  );
}
