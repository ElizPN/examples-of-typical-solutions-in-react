import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import { componentsMap } from "../example_components/componentsMap";
import { Page } from "./Page";
import { useLocation } from "react-router-dom";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { options } from "./CodeStyle";

interface ClientProps {
  client: { getEntries: ({}) => Promise<any> };
}

export function PageRouter({ client }: ClientProps) {
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

          const bodyRender: any = documentToReactComponents(
            entry.fields.body,
            options as any
          );

          setBodyState(bodyRender);

          setComponenetNameState(entry.fields.nameComponent);
        });
      });
  }, [slug]);

  return (
    <Box>
      <Page ComponentExample={component} title={titleState} body={bodyState} />
    </Box>
  );
}
