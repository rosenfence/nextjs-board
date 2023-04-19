export default function Write() {
  return (
    <div className='p-20'>
      <h4>글작성</h4>
      <form action='/api/post/write' method='POST'>
        <input name='title' placeholder='제목' />
        <textarea name='content' placeholder='내용' />
        <button type='submit'>작성</button>
      </form>
    </div>
  );
}
