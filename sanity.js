import { createClient } from "@sanity/client";

// Configuration required to retrieve data from Sanity.io
// We create a new client
export default createClient({
  projectId: "g98ubwh6",
  dataset: "production",
  apiVersion: "2023-05-03",
  useCdn: false,
});
