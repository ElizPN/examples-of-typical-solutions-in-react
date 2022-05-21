import Box from "@mui/material/Box";

interface PageProps {
  title: string;
  body: string;
  ComponentExampe?: React.FC;
}

export function Page(props: PageProps) {
  const { ComponentExampe, title, body } = props;

  return (
    <Box>
      <h2>{title}</h2>
      {body}
      {/* if component exists, we use it */}
      {ComponentExampe && <ComponentExampe />}
    </Box>
  );
}
