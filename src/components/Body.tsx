interface BodyProps {
  bodyState: string;
}

export function Body(props: BodyProps) {
  const { bodyState } = props;

  return <p>{bodyState}</p>;
}
