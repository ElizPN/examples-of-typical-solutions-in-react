import { Button } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { indexof } from "stylis";
import { contentfulConfig } from "../config/contentfulConfig";

var contentful = require("contentful");

type ListLinks = Record<"text" | "url", string>[];

export const Menu: FC = () => {
  const [arrayMenuState, setArrayMenuState] = useState<ListLinks>([]);

  const client = contentful.createClient(contentfulConfig);

  useEffect(() => {
    client
      .getEntries({
        content_type: "menu",
      })
      .then(function (entries: any) {
        const arrayMenu: ListLinks = entries.items.map(
          (elem: { fields: { textMenu: string; slug: string } }) => {
            const itemMenu = {
              text: elem.fields.textMenu,
              url: elem.fields.slug,
            };

            return itemMenu;
          }
        );
        setArrayMenuState(arrayMenu);
      });
  }, []);

  // if (!arrayMenuState.length) {
  //   return <p>Loading...</p>;
  // }

  const arrayMenuRender = arrayMenuState.map((elem, index) => {
    return (
      <Button key={index} to={elem.url} variant='outlined' component={Link}>
        {elem.text}
      </Button>
    );
  });

  return <>{arrayMenuRender}</>;
};
