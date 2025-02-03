import { createClient } from "contentful";

export const client = createClient({
  space: "hhp4ap9ig4h0",
  accessToken: "otDYLEhxUeeakPKP_Awm1HM_3-TSGCiegqgAyLDfdHA",
});

export async function getProject() {
  try {
    const data = await client.getEntries({ content_type: "projects" }); // Fetch all entries
    // console.log({ data });

    // console.log(data.items.map((item) => item.fields));

    return data.items.map((item) => item.fields);
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
