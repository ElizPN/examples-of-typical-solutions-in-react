import Box from "@mui/material/Box";

interface PageProps {
  ComponentExampe: React.FC;
  title: string;
  body: string;
}

export function Page(props: PageProps) {
  const { ComponentExampe, title, body } = props;

  return (
    <Box>
      <h2>{title}</h2>
      <ComponentExampe />
      {body}
    </Box>
  );
}
