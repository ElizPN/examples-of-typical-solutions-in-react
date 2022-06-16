import { contentfulConfig } from "../config/contentfulConfig";
import { PageRouter } from "./PageRouter";
import { jest } from "@jest/globals";
import { render, screen, waitFor, getByTestId } from "@testing-library/react";
import { HashRouter, Route, Routes } from "react-router-dom";

describe("PageRouter", () => {
  let fakeClient: any;
  beforeEach(() => {
    fakeClient = {
      getEntries: jest.fn().mockImplementationOnce(() =>
        Promise.resolve({
          items: [
            {
              fields: {
                title: "Changing elements in objects array",
                body: { content: [] },
              },
            },
          ],
        })
      ),
    };
  });

  it("should call getEntries and render title", async () => {
    render(
      <HashRouter>
        <PageRouter client={fakeClient} />
      </HashRouter>
    );
    expect(fakeClient.getEntries).toBeCalledTimes(1);
    expect(fakeClient.getEntries).toBeCalledWith({
      content_type: "page",
      "fields.slug": "/",
    });

    const titleElement = await waitFor(() => screen.getByTestId("title"));
    expect(titleElement.textContent).toBe("Changing elements in objects array");
  });
});
