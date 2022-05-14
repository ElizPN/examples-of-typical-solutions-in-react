import Box from "@mui/material/Box";
import { contentfulConfig } from "../config/contentfulConfig";
import { useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

var contentful = require("contentful");

type ListLinks = Record<"title" | "url", string>[];

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
          (elem: { fields: { title: string; slug: string } }) => {
            const link = {
              title: elem.fields.title,
              url: elem.fields.slug,
            };
            arrayList.push(link);
          }
        );

        setArraylinksState(arrayList);
      });
  }, []);

  if (!arrayLinksState.length) {
    return <p>Loading...</p>;
  }

  const arrayLinksRender: any = arrayLinksState.map((elem, index) => {
    return (
      <Button key={index} to={elem.url} variant='outlined' component={Link}>
        {elem.title}
      </Button>
    );
  });

  return <Box>{arrayLinksRender}</Box>;
}
