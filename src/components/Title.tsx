interface TitleProps {
  title: string;
}

export function Title(props: TitleProps) {
  const { title } = props; // title : title

  return <h2>{title}</h2>;
}
