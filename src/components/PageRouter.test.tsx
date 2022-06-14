import { contentfulConfig } from "../config/contentfulConfig";
import { PageRouter } from "./PageRouter";

jest.mock("contentfulConfig");

describe("PageRouter", () => {
  let fields;
  beforeEach(() => {
    fields = {
      title: "Changing elements in objects array",
    };
  });

  test("render title", () => {});
});
