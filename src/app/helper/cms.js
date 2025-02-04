import { createClient } from "contentful";

export const client = createClient({
  space: "hhp4ap9ig4h0",
  accessToken: "otDYLEhxUeeakPKP_Awm1HM_3-TSGCiegqgAyLDfdHA",
});

export async function getProfile() {
  try {
    const data = await client.getEntries({ content_type: "db", include: 2 }); // Fetch all entries
    // console.log({ data });

    // console.log(data.items.map((item) => item.fields));

    const result = data.items.map((item) => ({
      ...item.fields,
      id: item.sys.id,
    }));

    return result;

    // return data.items.map((item) => item.fields);
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
