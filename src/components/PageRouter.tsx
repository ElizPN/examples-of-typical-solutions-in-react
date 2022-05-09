import { Page } from "./Page";

var contentful = require("contentful");

export function PageRouter() {
  const client = contentful.createClient({
    space: "a4alnltpsauh",
    accessToken: "n_8u2e0aBdG_U7V2o6u1ClYynSy1MZeblGnrCXOuWhQ",
  });
  const entryId = "4KzAcNlgeLWb7WynZwVXDl";

  return <Page entryId={entryId} client={client} />;
}
