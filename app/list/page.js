import ListItem from '@/components/ListItem';
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
      <ListItem posts={posts} />
    </div>
  );
}
