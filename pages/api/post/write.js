import { connectDB } from '@/util/database';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';

export default async function write(req, res) {
  const db = (await connectDB).db('board');
  let session = await getServerSession(req, res, authOptions);
  let post = req.body;
  if (session) {
    post.author = session.user.email;
    if (req.method === 'POST') {
      if (post.title === '') {
        return res.status(400).json('400 Bad Request : 게시글 제목이 없습니다');
      } else if (post.content === '') {
        return res.status(400).json('400 Bad Request : 게시글 내용이 없습니다');
      }
      try {
        await db.collection('post').insertOne(post);
        return res.status(200).redirect(302, '/list');
      } catch {
        return res.status(500).json('500 Internal Server Error');
      }
    }
  } else {
    return res.status(400).json('400 Bad Request');
  }
}
