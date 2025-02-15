import { createClient } from "contentful";

export const client = createClient({
  space: process.env.NEXT_PUBLIC_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_ACCESSTOKEN,
});

export async function getSingleProject(projectId) {
  try {
    console.log("Server", projectId);

    // const data = await client.getEntries({
    //   content_type: "projects", // Replace with your content type ID
    //   "fields.projectId": projectId, // Filtering by projectId field
    //   limit: 1,
    // });

    const data = await client.getEntries({
      content_type: "projects",
    });
    console.log(data.items[0]?.fields); // Check field names in Contentful

    // const data = await client.getEntry(projectId);

    console.log(data);
    return data;
    // return { ...data.fields, id: data.sys.id };
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
