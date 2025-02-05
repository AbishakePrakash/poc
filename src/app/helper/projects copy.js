import { createClient } from "contentful";

export const client = createClient({
  space: "hhp4ap9ig4h0",
  accessToken: "otDYLEhxUeeakPKP_Awm1HM_3-TSGCiegqgAyLDfdHA",
});

export async function getSingleProject(id) {
  try {
    const data = await client.getEntry(id); // Fetch all entries

    return { ...data.fields, id: data.sys.id };
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
