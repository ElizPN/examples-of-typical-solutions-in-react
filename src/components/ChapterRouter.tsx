import Box from "@mui/material/Box";
import { contentfulConfig } from "../config/contentfulConfig";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import createTheme from "@mui/material/styles/createTheme";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Button from "@mui/material/Button";
import { connect, ConnectedProps } from "react-redux";
import { mapDispatch, mapState, MenuItem } from "../app/map_state_dispatch";

type ListLinks = Record<"title" | "url" | "body", any>[];

type PropsFromRedux = ConnectedProps<typeof connector>;

interface ClientProps extends PropsFromRedux {
  client: { getEntries: ({}) => Promise<any> };
}

const connector = connect(mapState, mapDispatch);

export const ChapterRouter = ({ client, menuList }: ClientProps) => {
  const location = useLocation();
  const chapter = location.pathname;
  const [arrayLinksState, setArraylinksState] = useState<ListLinks>([]);

  useEffect(() => {
    client
      .getEntries({
        content_type: "menu",
        "fields.slug": chapter,
      })
      .then(function (entries: any) {
        const title = entries.items[0].fields.textMenu;
      });

    client
      .getEntries({
        content_type: "page",
        "fields.chapter": chapter,
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
        <Button role='link' to={elem.url} variant='outlined' component={Link}>
          {elem.title}
        </Button>
        <Box>{elem.body}</Box>
      </Stack>
    );
  });

  function filterByCurrentChapter(item: any) {
    if (item.url === chapter) {
      return true;
    }
  }

  const filteredMenu: MenuItem[] =
    menuList && menuList.menuList.filter(filterByCurrentChapter);

  const chapterTitle: string =
    filteredMenu && filteredMenu[0] ? filteredMenu[0]?.text : "";

  return (
    <div>
      <h1 data-testid='titleChapter'>{chapterTitle}</h1>
      <div>{arrayLinksRender}</div>
    </div>
  );
};

export default connector(ChapterRouter);
