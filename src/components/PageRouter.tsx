import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import { contentfulConfig } from "../config/contentfulConfig";
import { componentsMap } from "../example_components/componentsMap";
import { Page } from "./Page";
import { useLocation } from "react-router-dom";

var contentful = require("contentful");

export function PageRouter() {
  const client = contentful.createClient(contentfulConfig);

  const [titleState, setTitleState] = useState("");
  const [bodyState, setBodyState] = useState("");
  const [ComponentNameState, setComponenetNameState] = useState("");

  const component = componentsMap[ComponentNameState];
  const location = useLocation();

  const slug = location.pathname;

  useEffect(() => {
    client
      .getEntries({
        "fields.slug": slug,
        content_type: "page",
      })
      .then(function (entries: any) {
        entries.items.forEach(function (entry: any) {
          setTitleState(entry.fields.title);
          setBodyState(entry.fields.body.content[0].content[0].value);
          setComponenetNameState(entry.fields.nameComponent);
        });
      });
  }, []);

  if (!component) {
    return <p>Loading...</p>;
  }

  return (
    <Box>
      Path is: {location.pathname}
      <Page ComponentExampe={component} title={titleState} body={bodyState} />
    </Box>
  );
}
