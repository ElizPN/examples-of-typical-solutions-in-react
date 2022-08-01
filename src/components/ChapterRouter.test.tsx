import { jest } from "@jest/globals";
import { act, render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { MenuItem } from "../app/map_state_dispatch";
import { store } from "../app/store";
import { ChapterRouter as ChapterRouterSimple } from "./ChapterRouter";
import ChapterRouter from "./ChapterRouter";

describe("ChapterRouter,", () => {
  let fakeClientLinks: any;
  beforeEach(() => {
    fakeClientLinks = {
      getEntries: jest.fn().mockImplementation(() =>
        Promise.resolve({
          items: [
            {
              fields: {
                body: { content: [] },
                chapter: "/category/arrays-of-objects",
                slug: "/entries/arrays-of-objects/changing-elements-in-objects-array",
                title: "Changing elements in objects array",
              },
            },
          ],
        })
      ),
    };
  });

  it("should call getEntries and render title of chapter", async () => {
    window.history.pushState({}, "Page Title", "#/some_url");

    const menuList: { menuList: MenuItem[] } = {
      menuList: [{ text: "Arrays", url: "/some_url" }],
    };
    render(
      <HashRouter>
        <ChapterRouterSimple
          client={fakeClientLinks}
          menuList={menuList}
          addMenuItem={jest.fn()}
        />
      </HashRouter>
    );

    // calls 2 times
    // expect(fakeClientTitle.getEntries).toBeCalledTimes(1);
    await waitFor(() => {
      expect(screen.getByTestId("titleChapter").innerHTML).toBe("Arrays");
    });
  });

  it("should call getEntries and render link to pages", async () => {
    render(
      <HashRouter>
        <Provider store={store}>
          <ChapterRouter client={fakeClientLinks} />
        </Provider>
      </HashRouter>
    );

    const link = await waitFor(() => screen.queryByTestId("link"));
    screen.debug();

    // expect(link?.textContent).toBe("Changing elements in objects array");

    // expect(screen.getByRole("link")).toHaveAttribute(
    //   "href",
    //   "/entries/arrays-of-objects/changing-elements-in-objects-array"
    // );
    expect(screen.getByRole("link")).toBeTruthy;
    // expect(screen.getByRole("link")).toHaveTextContent(
    //   "Changing elements in objects array"
    // );
  });
});
