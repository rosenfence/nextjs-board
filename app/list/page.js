import { connectDB } from '@/util/database';
import Link from 'next/link';

export default async function List() {
  const db = (await connectDB).db('board');
  let posts = await db.collection('post').find().toArray();

  return (
    <div className='list-bg'>
      {posts.map((post, i) => {
        return (
          <div className='list-item' key={i}>
            <Link prefetch={false} href={`detail/${post._id}`} className='list-link'>
              <h4>{post.title}</h4>
            </Link>
            <p>{post.content}</p>
          </div>
        );
      })}
    </div>
  );
}
