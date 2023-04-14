import { connectDB } from '@/util/database';

export default async function Home() {
  const client = await connectDB;
  const db = client.db('board');
  let result = await db.collection('post').find().toArray();

  return (
    <>
      <div>{result[0].title}</div>
      <div>{result[0].content}</div>
    </>
  );
}
