'use client';
import Link from 'next/link';

export default function ListItem({ posts }) {
  return (
    <>
      {posts.map((post, i) => {
        return (
          <div className='list-item' key={i}>
            <span className='list-item-left'>
              <Link prefetch={false} href={`detail/${post._id.toString()}`}>
                <h4>{post.title}</h4>
              </Link>
              <p>{post.content}</p>
            </span>
            <span className='list-item-right'>
              <Link href={`/edit/${post._id.toString()}`}>✏️</Link>
              <button
                onClick={(e) => {
                  fetch('/api/delete', { method: 'DELETE', body: post._id })
                    .then((res) => res.json())
                    .then(() => {
                      e.target.parentElement.parentElement.style.opacity = 0;
                      setTimeout(() => {
                        e.target.parentElement.parentElement.style.display = 'none';
                      }, 1000);
                    });
                }}
              >
                🗑️
              </button>
            </span>
          </div>
        );
      })}
    </>
  );
}
