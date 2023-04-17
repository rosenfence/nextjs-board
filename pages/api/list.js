import { connectDB } from '@/util/database';

export default async function list(req, res) {
  const db = (await connectDB).db('board');
  let posts = await db.collection('post').find().toArray();

  if (req.method === 'GET') {
    return res.status(200).json(posts);
  }
}
