import { createClient } from "contentful";

export async function getAsset() {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_ACCESSTOKEN,
  });

  try {
    const data = await client.getAsset();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
