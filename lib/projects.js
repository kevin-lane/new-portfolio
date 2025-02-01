import sql from 'better-sqlite3';

const db = sql('projects.db');

export function getProjects(){
  return db.prepare('SELECT * FROM projects').all();
}
