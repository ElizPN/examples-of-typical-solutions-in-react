import Box from "@mui/material/Box";
import { contentfulConfig } from "../config/contentfulConfig";
import { useLocation } from "react-router-dom";
import {
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useEffect,
  useState,
} from "react";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import createTheme from "@mui/material/styles/createTheme";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import Button from "@mui/material/Button";

var contentful = require("contentful");

type ListLinks = Record<"title" | "url" | "body", any>[];

const theme = createTheme();

export function ChapterRouter() {
  const client = contentful.createClient(contentfulConfig);
  const location = useLocation();
  const chapter = location.pathname;
  const [arrayLinksState, setArraylinksState] = useState<ListLinks>([]);
  const [titleChapter, setTitleChapter] = useState("uiuiui");

  useEffect(() => {
    client
      .getEntries({
        content_type: "menu",
        "fields.slug": chapter,
      })
      .then(function (entries: any) {
        const title = entries.items[0].fields.textMenu;
        setTitleChapter(title);
      });

    client
      .getEntries({
        "fields.chapter": chapter,
        content_type: "page",
      })
      .then(function (entries: any) {
        const arrayList: ListLinks = entries.items.map(
          (elem: { fields: { title: string; slug: string; body: any } }) => {
            const body = documentToReactComponents(elem.fields.body) as any;

            const article = {
              title: elem.fields.title,
              url: elem.fields.slug,
              body: body && body.length > 0 ? body[0] : "",
            };

            return article;
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
      <Stack mb={5} spacing={0.5} key={index}>
        <Button to={elem.url} variant='outlined' component={Link}>
          {elem.title}
        </Button>
        <Box>{elem.body}</Box>
      </Stack>
    );
  });

  return (
    <ThemeProvider theme={theme}>
      <h1>{titleChapter}</h1>
      {arrayLinksRender}
    </ThemeProvider>
  );
}
