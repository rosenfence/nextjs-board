import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function Edit({ params }) {
  const db = (await connectDB).db('board');
  let posts = await db.collection('post').findOne({ _id: new ObjectId(params.postId) });

  return (
    <div className='p-20'>
      <h4>글수정</h4>
      <form action='/api/post/edit' method='POST'>
        <input name='title' defaultValue={posts.title} />
        <textarea name='content'>{posts.content}</textarea>
        <input name='_id' value={posts._id.toString()} className='hidden' />
        <button type='submit'>수정</button>
      </form>
    </div>
  );
}
