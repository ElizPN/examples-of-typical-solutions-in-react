import { screen, render, waitFor } from "@testing-library/react";
import { Menu } from "./Menu";
import { jest } from "@jest/globals";

import "@testing-library/jest-dom/extend-expect";
import { HashRouter } from "react-router-dom";

describe("Menu", () => {
  let fakeClient: any;
  beforeEach(() => {
    fakeClient = {
      getEntries: jest.fn().mockImplementationOnce(() =>
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

  test("should call getEntries and render menu", async () => {
    render(
      <HashRouter>
        <Menu client={fakeClient} />
      </HashRouter>
    );
    expect(fakeClient.getEntries).toBeCalledTimes(1);
    screen.debug();
    const menu = await waitFor(() => screen.queryByTestId("menu"));
    console.log(menu);

    expect(menu?.textContent).toBe("Arrays of objects");
  });
});
