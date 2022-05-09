// interface ClientProps {
//   space: string;
//   accessToken: string;
// }

interface TitleProps {
  titleState: string;
}

export function Title(props: TitleProps) {
  const { titleState } = props;

  return <h2>{titleState}</h2>;
}
