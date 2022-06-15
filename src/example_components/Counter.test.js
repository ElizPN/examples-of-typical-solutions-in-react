import { screen, render, getByTestId } from "@testing-library/react";
import { Counter } from "./Counter";

import "@testing-library/jest-dom";

describe("Counter", () => {
  it("should render buttons", () => {
    render(<Counter />);

    expect(
      getByTestId(document.documentElement, "btn-sum")
    ).toBeInTheDocument();

    expect(
      getByTestId(document.documentElement, "btn-prod")
    ).toBeInTheDocument();
  });
});
