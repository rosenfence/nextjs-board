import { connectDB } from '@/util/database';

export default async function write(req, res) {
  const db = (await connectDB).db('board');

  if (req.method === 'POST') {
    let post = req.body;

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
}
