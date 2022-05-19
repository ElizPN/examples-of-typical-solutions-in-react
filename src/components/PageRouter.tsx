import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import { contentfulConfig } from "../config/contentfulConfig";
import { componentsMap } from "../example_components/componentsMap";
import { Page } from "./Page";
import { useLocation } from "react-router-dom";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import SyntaxHighlighter from "react-syntax-highlighter";
import { obsidian } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ChapterRouter } from "./ChapterRouter";

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

          const options = {
            renderNode: {
              [BLOCKS.PARAGRAPH]: (
                node: { content: string | any[] },
                children:
                  | string
                  | number
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | React.ReactFragment
                  | null
                  | undefined
              ) => {
                if (
                  node.content.length === 1 &&
                  node.content[0].marks.find(
                    (x: { type: string }) => x.type === "code"
                  )
                ) {
                  return <div>{children}</div>;
                }
                return <p>{children}</p>;
              },
            },
            renderMark: {
              [MARKS.CODE]: (text: string) => {
                return (
                  <SyntaxHighlighter
                    language='javascript'
                    style={obsidian}
                    showLineNumbers
                  >
                    {text}
                  </SyntaxHighlighter>
                );
              },
            },
          };

          const bodyRender: any = documentToReactComponents(
            entry.fields.body,
            options as any
          );
          setBodyState(bodyRender);

          setComponenetNameState(entry.fields.nameComponent);
        });
      });
  }, [slug]);

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
