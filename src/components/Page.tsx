import Box from "@mui/material/Box";
import { Body } from "./Body";
import { Title } from "./Title";

interface PageProps {
  ComponentExampe: React.FC;
  title: string;
  body: string;
}

export function Page(props: PageProps) {
  const { ComponentExampe, title, body } = props;

  return (
    <Box>
      <Title title={title} />
      <ComponentExampe />
      <Body body={body} />
    </Box>
  );
}
