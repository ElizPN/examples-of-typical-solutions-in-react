import { screen, render } from "@testing-library/react";
import { Header } from "./Header";

// Test suit
describe("Header", () => {
  it("should contain link to github", () => {
    // single test
    render(<Header title={""} />);
    const link: HTMLElement = screen.getByTestId("github-link-header");
    const hrefValue = link.getAttribute("href");
    expect(hrefValue).toEqual("https://github.com/ElizPN");
  });
});
