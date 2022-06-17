import { jest } from "@jest/globals";
import { render, screen, waitFor } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import { ChapterRouter } from "./ChapterRouter";

describe("ChapterRouter,", () => {
  let fakeClient: any;
  beforeEach(() => {
    fakeClient = {
      getEntries: jest.fn().mockImplementationOnce(() =>
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

  it("should call getEntries and render link text", () => {
    render(<ChapterRouter client={fakeClient} />);
    expect(fakeClient.getEntries).toBeCalledTimes(1);
  });
});
