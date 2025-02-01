const sql = require('better-sqlite3');
const db = sql('projects.db');

const dummyProjects = [
  {
    id:1,
    title: 'Kelan Photography',
    slug: 'kelan-photography',
    description: 'Kelan Photography is a fictious online store where you can purchase photos.The user simply buys the picture and downloads the image to his device. The ideawith this project is for a photographer to be able to sell his captures. ',
    image: '/assets/kelanphotography.jpg',
    technologies: ['JavaScript', 'Vue.js', 'Vuex'],
    projectURL: 'https://kelanphotography.netlify.app/',
    githubURL: 'https://github.com/kevin-lane/kelan-photography-vue'
  },
  {
    id:2,
    title: 'Weather Vue',
    slug: 'weather-vue',
    description: 'A simple weather app built with TypeScript, Vue and TailwindCSS!',
    image: '/assets/weather-vue.jpg',
    technologies: ['TypeScript', 'Vue.js', 'TailwindCSS'],
    projectURL: 'https://kevinsweathervue.netlify.app/',
    githubURL: 'https://github.com/kevin-lane/Weather-Vue'
  }
];

db.prepare(`
  CREATE TABLE IF NOT EXISTS projects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    image TEXT NOT NULL,
    description TEXT NOT NULL,
    technologies JSON NOT NULL,
    projectURL TEXT NOT NULL,
    githubURL TEXT NOT NULL
  )
`).run();

async function initData() {
  const insertStmt = db.prepare(`
    INSERT OR IGNORE INTO projects (slug, title, image, description, technologies, projectURL, githubURL)
    VALUES (
      @slug,
      @title,
      @image,
      @description,
      @technologies,
      @projectURL,
      @githubURL
    )
  `);

  const updateStmt = db.prepare(`
    UPDATE projects
    SET title = @title,
        image = @image,
        description = @description,
        technologies = @technologies,
        projectURL = @projectURL,
        githubURL = @githubURL
    WHERE slug = @slug
  `);

  for(const project of dummyProjects) {
    insertStmt.run({
      ...project,
      technologies: JSON.stringify(project.technologies)
    });

    updateStmt.run({
      ...project,
      technologies: JSON.stringify(project.technologies)
    });
  }
}

initData();
