import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function handleDelete(req, res) {
  const db = (await connectDB).db('board');

  if (req.method === 'DELETE') {
    await db.collection('post').deleteOne({ _id: new ObjectId(req.body) });
    return;
  }
}
