import { connectDB } from '@/util/database';

export default async function change(req, res) {
  const db = (await connectDB).db('board');

  if (req.method === 'PATCH') {
    let post = req.body;

    if (post.title === '') {
      return res.status(400).json('400 Bad Request : 변경할 제목을 적어주세요');
    } else if (post.content === '') {
      return res.status(400).json('400 Bad Request : 변경할 내용을 적어주세요');
    }
    try {
      await db.collection('post').insertOne(post);
      return res.status(200).redirect(302, '/list');
    } catch {
      return res.status(500).json('500 Internal Server Error');
    }
  }
}
