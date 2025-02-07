import { createClient } from "contentful";

export const client = createClient({
  space: process.env.NEXT_PUBLIC_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_ACCESSTOKEN,
});

export async function getProject() {
  try {
    const data = await client.getEntries({ content_type: "projects" }); // Fetch all entries
    // console.log({ data });

    // console.log(data.items.map((item) => item.fields));
    // console.log("ProjectCall", data);

    const result = data.items.map((item) => ({
      ...item.fields,
      id: item.sys.id,
    }));

    return result;
    // return data.items.map((item) => item.fields)
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
