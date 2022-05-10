import Box from "@mui/material/Box";
import { Body } from "./Body";
import { Title } from "./Title";

interface PageProps {
  TemplatePage: React.FC;
  title: string;
  body: string;
}

export function Page(props: PageProps) {
  const { TemplatePage, title, body } = props;

  return (
    <Box>
      <Title title={title} />
      <TemplatePage />
      <Body body={body} />
    </Box>
  );
}
