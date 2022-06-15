import { screen, render } from "@testing-library/react";
import { Menu } from "./Menu";

import "@testing-library/jest-dom/extend-expect";

describe("Test Menu", () => {
  test("test button", () => {
    render(<Menu />);
    const btn = screen.queryByTestId("button");
    screen.debug();

    expect(btn).toBeTruthy();
  });
});
