// import sql from 'better-sqlite3';

// const db = sql('projects.db');

// export function getProjects(){
//   return db.prepare('SELECT * FROM projects').all();
// }

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
    return {
      id: item.sys.id,
      title,
      description,
      slug,
      liveDemo,
      gitHub,
      image: image?.fields?.file?.url || null,
    };
  });
}
