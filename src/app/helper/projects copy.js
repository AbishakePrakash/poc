import { createClient } from "contentful";

export const client = createClient({
  space: process.env.NEXT_PUBLIC_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_ACCESSTOKEN,
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
