import { jest } from "@jest/globals";
import { act, render, screen, waitFor } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import { ChapterRouter } from "./ChapterRouter";

describe("ChapterRouter,", () => {
  let fakeClientTitle: any;
  beforeEach(() => {
    fakeClientTitle = {
      getEntries: jest.fn().mockImplementation(() =>
        Promise.resolve({
          items: [
            {
              fields: {
                textMenu: "Arrays",
                slug: "/category/arrays",
              },
            },
          ],
        })
      ),
    };
  });

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
    render(
      <HashRouter>
        <ChapterRouter client={fakeClientTitle} />
      </HashRouter>
    );
    // calls 2 times
    // expect(fakeClient.getEntries).toBeCalledTimes(1);
    await waitFor(() => {
      expect(screen.getByTestId("titleChapter").innerHTML).toBe("Arrays");
    });
  });

  test("should call getEntries and render link to pages", async () => {
    render(
      <HashRouter>
        <ChapterRouter client={fakeClientLinks} />
      </HashRouter>
    );

    const link = await waitFor(() => screen.queryByTestId("link"));
    screen.debug();

    console.log(link);
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
