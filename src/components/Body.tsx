interface BodyProps {
  body: string;
}

export function Body(props: BodyProps) {
  const { body } = props;

  return <p>{body}</p>;
}
