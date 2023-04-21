import Link from 'next/link';
import LoginButton from './LoginButton';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import LogoutButton from './LogoutButton';

export default async function Navbar() {
  let session = await getServerSession(authOptions);

  return (
    <div className='navbar'>
      <Link prefetch={false} href='/' className='navbar-link'>
        🏠
      </Link>
      <Link prefetch={false} href='/list' className='navbar-link'>
        📃
      </Link>
      {session === null ? (
        <></>
      ) : (
        <Link prefetch={false} href='/' className='navbar-link'>
          {session.user.name}
        </Link>
      )}
      {session === null ? <LoginButton /> : <LogoutButton />}
    </div>
  );
}
