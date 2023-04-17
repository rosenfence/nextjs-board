export default function notice(req, res) {
  const today = new Date();

  const year = today.getFullYear();
  const month = ('0' + (today.getMonth() + 1)).slice(-2);
  const day = ('0' + today.getDate()).slice(-2);

  const hours = ('0' + today.getHours()).slice(-2);
  const minutes = ('0' + today.getMinutes()).slice(-2);
  const seconds = ('0' + today.getSeconds()).slice(-2);

  const response = `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분 ${seconds}초`;

  if (req.method === 'GET') {
    return res.status(200).json(response);
  }
}
