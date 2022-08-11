import { Page } from "./Page";
import { render, screen } from "@testing-library/react";

describe(" Page component ", () => {
  test("title and body render", () => {
    render(<Page title={"welcome"} body={"description"} />);
    const title = screen.getByTestId("title");
    const body = screen.getByTestId("body");

    expect(title?.textContent).toEqual("welcome");
    expect(body?.textContent).toEqual("description");
  });
});
