import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function Detail({ params }) {
  const db = (await connectDB).db('board');
  let posts = await db.collection('post').findOne({ _id: new ObjectId(params.postId) });

  return (
    <div>
      <h1>상세페이지</h1>
      <h4>{posts.title}</h4>
      <p>{posts.content}</p>
    </div>
  );
}
