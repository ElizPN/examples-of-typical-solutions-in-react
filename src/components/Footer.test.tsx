import { screen, render } from "@testing-library/react";
import Footer from "./Footer";

// Test suite
describe("Footer", () => {
  it("should contain link to github", () => {
    // Single test
    render(<Footer />);
    const link: HTMLAnchorElement = screen.getByTestId("github-link");
    const hrefValue = link.getAttribute("href");
    expect(hrefValue).toEqual("https://github.com/ElizPN");
  });
});
