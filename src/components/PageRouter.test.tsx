import { contentfulConfig } from "../config/contentfulConfig";
import { PageRouter } from "./PageRouter";
import { jest } from "@jest/globals";
import { render, screen } from "@testing-library/react";

// jest.mock("contentfulConfig");

describe("PageRouter", () => {
  let fakeClient: any;
  beforeEach(() => {
    fakeClient = {
      getEntries: jest.fn().mockImplementationOnce(() =>
        Promise.resolve({
          items: [
            {
              fields: { title: "Changing elements in objects array", body: {} },
            },
          ],
        })
      ),
    };
  });

  it("render title", () => {
    // contentfulConfig.get.mockReturnValue(fakeClient);
    render(
      <PageRouter
        client={{
          getEntries: function ({}: {}): Promise<any> {
            throw new Error("Function not implemented.");
          },
        }}
      />
    );
    expect(fakeClient.getEntries).toBeCalledTimes(1);

    screen.debug();
  });
});
