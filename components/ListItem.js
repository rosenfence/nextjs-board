'use client';
import Link from 'next/link';

export default function ListItem({ posts }) {
  return (
    <>
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
    </>
  );
}
