import { createClient } from "contentful";

export const client = createClient({
  space: process.env.NEXT_PUBLIC_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_ACCESSTOKEN,
});

export async function getProfile() {
  try {
    const data = await client.getEntries({
      content_type: "profile",
      include: 2,
    });
    return data.items.map((item) => ({ ...item.fields, id: item.sys.id }));
  } catch (error) {
    console.error("Error fetching profile data:", error);
    return null;
  }
}

export async function getProject() {
  try {
    const data = await client.getEntries({ content_type: "projects" });
    return data.items.map((item) => ({ ...item.fields, id: item.sys.id }));
  } catch (error) {
    console.error("Error fetching project data:", error);
    return null;
  }
}
