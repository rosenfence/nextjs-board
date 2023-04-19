import { connectDB } from '@/util/database';
import Link from 'next/link';

export default async function List() {
  const db = (await connectDB).db('board');
  let posts = await db.collection('post').find().toArray();

  return (
    <div className='list-bg'>
      <div className='list-function'>
        <Link prefetch={false} href='/write' className='list-link'>
          📝
        </Link>
      </div>
      {posts.map((post, i) => {
        return (
          <div className='list-item' key={i}>
            <span className='list-item-left'>
              <Link prefetch={false} href={`detail/${post._id}`}>
                <h4>{post.title}</h4>
              </Link>
              <p>{post.content}</p>
            </span>
            <span className='list-item-right'>
              <Link href={`/edit/${post._id}`}>✏️</Link>
              <Link href={`/delete`}>🗑️</Link>
            </span>
          </div>
        );
      })}
    </div>
  );
}
