import ListItem from '@/components/ListItem';
import { connectDB } from '@/util/database';
import Link from 'next/link';

export default async function List() {
  const db = (await connectDB).db('board');
  let posts = await db.collection('post').find().toArray();
  let lists = posts.map((post) => {
    return {
      _id: post._id.toString(),
      title: post.title,
      content: post.content,
      author: post.author,
    };
  });

  return (
    <div className='list-bg'>
      <div className='list-function'>
        <Link prefetch={false} href='/write' className='list-link'>
          📝
        </Link>
      </div>
      <ListItem posts={lists} />
    </div>
  );
}
