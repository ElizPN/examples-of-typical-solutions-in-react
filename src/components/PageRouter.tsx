import Box from "@mui/material/Box";
import React, { ReactNode, useEffect, useState } from "react";
import { componentsMap } from "../example_components/componentsMap";
import { Page } from "./Page";
import { useLocation } from "react-router-dom";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { options } from "./CodeStyle";
import { Options } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";

type EntryContentful = {
  fields: {
    title: React.SetStateAction<string>;
    body: Document;
    nameComponent: React.SetStateAction<string>;
  };
};

interface ClientProps {
  client: {
    getEntries: (filters: {
      "fields.slug": string;
      content_type: string;
    }) => Promise<{
      items: [EntryContentful];
    }>;
  };
}

export function PageRouter({ client }: ClientProps) {
  const [titleState, setTitleState] = useState("");
  const [bodyState, setBodyState] = useState<ReactNode>();
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
      .then(function (entries) {
        entries.items.forEach(function (entry: EntryContentful) {
          setTitleState(entry.fields.title);

          const bodyRender: ReactNode = documentToReactComponents(
            entry.fields.body,
            options as Options
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
