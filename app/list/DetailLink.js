'use client';
//useRouter를 사용한 Link button Component 만들기
import { useRouter } from 'next/navigation';

export default function DetailLink() {
  let router = useRouter();

  return (
    <button
      onClick={() => {
        router.push('/list');
      }}
    >
      버튼
    </button>
  );
}
