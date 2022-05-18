import Box from "@mui/material/Box";
import { contentfulConfig } from "../config/contentfulConfig";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import createTheme from "@mui/material/styles/createTheme";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

var contentful = require("contentful");

type ListLinks = Record<"title" | "url" | "body", any>[];

// const theme = createTheme();
// theme.spacing(9);
// console.log(theme.spacing(9));

export function ChapterRouter() {
  const client = contentful.createClient(contentfulConfig);

  const location = useLocation();

  const chapter = location.pathname;

  const [arrayLinksState, setArraylinksState] = useState<ListLinks>([]);

  useEffect(() => {
    client
      .getEntries({
        "fields.chapter": chapter,
        content_type: "page",
      })
      .then(function (entries: any) {
        const arrayList: ListLinks = [];

        entries.items.map(
          (elem: { fields: { title: string; slug: string; body: any } }) => {
            const body = documentToReactComponents(elem.fields.body) as any;
            const article = {
              title: elem.fields.title,
              url: elem.fields.slug,
              body: body && body.length > 0 ? body[0] : "",
            };
            arrayList.push(article);
          }
        );

        setArraylinksState(arrayList);
      });
  }, [chapter]);

  if (!arrayLinksState.length) {
    return <p>Loading...</p>;
  }

  const arrayLinksRender: any = arrayLinksState.map((elem, index) => {
    return (
      <Stack spacing={2} key={index}>
        <Link href={elem.url} underline='hover'>
          {elem.title}
        </Link>
        {elem.body}
      </Stack>
    );
  });

  return <Box>{arrayLinksRender}</Box>;
}
