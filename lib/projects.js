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

    //Short-if to handle undefined images, if there is no images or image corrupt
    const imageUrl = item.fields.image ? 'https:' + item.fields.image[0].fields.file.url : '';

    return {
      id: item.sys.id,
      title,
      description,
      slug,
      liveDemo,
      gitHub,
      image: imageUrl,
    };
  });
}
