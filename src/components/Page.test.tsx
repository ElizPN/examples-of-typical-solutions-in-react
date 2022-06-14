import { Page } from "./Page";
import { render, screen } from "@testing-library/react";

describe(" Page component ", () => {
  test("reneder Page componenet ", () => {
    render(<Page title={"hello"} body={""} />);
    // const title = screen.queryByTestId("title");

    // expect(title).toHaveTextContent("hello");
    expect(screen.queryByTestId("title")?.textContent).toEqual("hello");
  });
});
