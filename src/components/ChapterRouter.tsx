import Box from "@mui/material/Box";
import { useLocation } from "react-router-dom";
import { ReactFragment, ReactNode, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import Button from "@mui/material/Button";
import { connect, ConnectedProps } from "react-redux";
import { mapDispatch, mapState, MenuItem } from "../app/map_state_dispatch";

type EntryChapterContentful = {
  fields: {
    title: string;
    slug: string;
    body: Document;
  };
};

type LinkType = {
  title: string;
  url: string;
  body: ReactNode;
};

type ListLinks = LinkType[];

type PropsFromRedux = ConnectedProps<typeof connector>;

interface ClientProps extends PropsFromRedux {
  client: {
    getEntries: ({}) => Promise<{ items: [EntryChapterContentful] }>;
  };
}

const connector = connect(mapState, mapDispatch);

export const ChapterRouter = ({ client, menuList }: ClientProps) => {
  const location = useLocation();
  const chapter = location.pathname;
  const [arrayLinksState, setArraylinksState] = useState<ListLinks>([]);

  useEffect(() => {
    client
      .getEntries({
        content_type: "page",
        "fields.chapter": chapter,
      })
      .then(function (entries: { items: [EntryChapterContentful] }) {
        const arrayList: ListLinks = entries.items.map(
          (elem: EntryChapterContentful) => {
            const body = documentToReactComponents(
              elem.fields.body
            ) as ReactFragment;
            const [firstLine] = Array.from(body);

            const article: LinkType = {
              title: elem.fields.title,
              url: elem.fields.slug,
              body: firstLine,
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

  const arrayLinksRender: JSX.Element[] = arrayLinksState.map((elem, index) => {
    return (
      <Stack mb={5} spacing={0.5} key={index}>
        <Button role='link' to={elem.url} variant='outlined' component={Link}>
          {elem.title}
        </Button>
        <Box>{elem.body}</Box>
      </Stack>
    );
  });

  function filterByCurrentChapter(item: MenuItem) {
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
