import { createClient } from "contentful";

export async function getData() {
  const client = createClient({
    space: "hhp4ap9ig4h0",
    accessToken: "otDYLEhxUeeakPKP_Awm1HM_3-TSGCiegqgAyLDfdHA",
  });

  try {
    const data = await client.getEntries({ content_type: "db" }); // Fetch all entries
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
