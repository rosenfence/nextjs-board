import { connectDB } from '@/util/database';
import bcrypt from 'bcrypt';

export default async function signup(req, res) {
  if (req.method === 'POST') {
    let hash = await bcrypt.hash(req.body.password, 10);
    req.body.password = hash;

    let db = (await connectDB).db('post');
    await db.collection('user_cred').insertOne(req.body);
    return res.status(200).json('회원가입이 완료되었습니다');
  }
}
