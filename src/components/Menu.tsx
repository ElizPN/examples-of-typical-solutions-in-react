import { Button } from "@mui/material";
import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { indexof } from "stylis";
import { contentfulConfig } from "../config/contentfulConfig";

var contentful = require("contentful");

const arrayMenu = [
  {
    text: "Home",
    url: " /",
  },
  {
    text: "About",
    url: "/about",
  },
  {
    text: "States",
    url: "/category/states",
  },
  {
    text: "Arrays",
    url: "/category/arrays",
  },
];

export const Menu: FC = () => {
  // const client = contentful.createClient(contentfulConfig);

  // client
  //   .getEntries({
  //     // "fields.menuChapter": "About",
  //     content_type: "menu",
  //   })
  //   .then(function (entries: any) {
  //     entries.items.forEach(function (entry: any) {
  //       console.log(entry.fields);
  //     });
  //   });

  const [arrayMenuState, setArrayMenuState] = useState(arrayMenu);

  const arrayMenuRender = arrayMenuState.map((elem, index) => {
    return (
      <Button key={index} to={elem.url} variant='outlined' component={Link}>
        {elem.text}
      </Button>
    );
  });

  return <>{arrayMenuRender}</>;
};
