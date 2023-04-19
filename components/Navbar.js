import Link from 'next/link';

export default function Navbar() {
  return (
    <div className='navbar'>
      <Link prefetch={false} href='/' className='navbar-link'>
        🏠
      </Link>
      <Link prefetch={false} href='/list' className='navbar-link'>
        📃
      </Link>
    </div>
  );
}
