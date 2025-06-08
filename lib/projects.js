import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  environment: 'master',
});

export async function getProjects(){
 const entries = await client.getEntries({ content_type: 'project' });

  return entries.items.map((item) => {
    const { title, description, slug, liveDemo, gitHub, image } = item.fields;
    console.log(item.fields.image[0]?.fields?.file?.url);
    const imageUrl = 'https:' + item.fields.image[0].fields.file.url;
    console.log(imageUrl);

    return {
      id: item.sys.id,
      title,
      description,
      slug,
      liveDemo,
      gitHub,
      image: imageUrl || null,
    };
  });
}
