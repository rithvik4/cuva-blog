import { readFileSync } from 'fs';
import path from 'path';

async function check() {
  const postsPath = path.join(process.cwd(), 'data/blog/posts.json');
  const postsData = readFileSync(postsPath, 'utf-8');
  const posts = JSON.parse(postsData).map(p => ({ title: p.title, slug: p.slug }));
  console.log(JSON.stringify(posts, null, 2));
  process.exit(0);
}
check();
