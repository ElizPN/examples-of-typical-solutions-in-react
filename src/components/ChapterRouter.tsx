import Box from "@mui/material/Box";
import { contentfulConfig } from "../config/contentfulConfig";
import { useLocation } from "react-router-dom";

var contentful = require("contentful");

export function ChapterRouter() {
  const client = contentful.createClient(contentfulConfig);

  const location = useLocation();

  const chapter = location.pathname;

  client
    .getEntries({
      "fields.chapter": chapter,
      content_type: "page",
    })
    .then(function (entries: any) {
      entries.items.forEach(function (entry: any) {});
    });

  return <Box>This is Chapter page</Box>;
}
