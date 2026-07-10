import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

async function check() {
  await mongoose.connect(process.env.MONGODB_URI);
  const db = mongoose.connection.useDb('blog');
  const Post = db.model('Post', new mongoose.Schema({}, { strict: false }));
  const posts = await Post.find({}, { title: 1, slug: 1 });
  console.log(JSON.stringify(posts, null, 2));
  process.exit(0);
}
check();
