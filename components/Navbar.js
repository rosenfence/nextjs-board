import Link from 'next/link';
import LoginButton from './LoginButton';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import LogoutButton from './LogoutButton';

export default async function Navbar() {
  let session = await getServerSession(authOptions);
  console.log(session);

  return (
    <div className='navbar'>
      <Link prefetch={false} href='/' className='navbar-link'>
        🏠
      </Link>
      <Link prefetch={false} href='/list' className='navbar-link'>
        📃
      </Link>
      {session === null ? <></> : <span>{session.user.name}</span>}
      {session === null ? <LoginButton /> : <LogoutButton />}
    </div>
  );
}
