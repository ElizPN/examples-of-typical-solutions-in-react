interface TitleProps {
  title: string;
}

export function Title(props: TitleProps) {
  const { title } = props; // title : title
  console.log("this is title");

  return <h2>{title}</h2>;
}
