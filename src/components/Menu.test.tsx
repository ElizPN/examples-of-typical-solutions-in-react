import { screen, render, waitFor } from "@testing-library/react";
import { Menu } from "./Menu";
import { jest } from "@jest/globals";

import "@testing-library/jest-dom/extend-expect";
import { HashRouter, Link } from "react-router-dom";

describe("Menu", () => {
  let fakeClient: any;
  beforeEach(() => {
    fakeClient = {
      getEntries: jest.fn().mockImplementation(() =>
        Promise.resolve({
          items: [
            {
              fields: {
                textMenu: "Arrays of objects",
                slug: "/category/arrays-of-objects",
              },
            },
          ],
        })
      ),
    };
  });

  test("should call getEntries and render menu button", async () => {
    render(
      <HashRouter>
        <Menu client={fakeClient} />
      </HashRouter>
    );
    expect(fakeClient.getEntries).toBeCalledTimes(1);

    const menu = await waitFor(() => screen.queryByTestId("menu"));

    expect(menu?.textContent).toBe("Arrays of objects");

    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      "#/category/arrays-of-objects"
    );
  });
});
