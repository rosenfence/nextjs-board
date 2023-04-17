import Link from 'next/link';

export default function Navbar() {
  return (
    <div className='navbar'>
      <Link prefetch={false} href='/' className='navbar-link'>
        Main
      </Link>
      <Link prefetch={false} href='/list' className='navbar-link'>
        List
      </Link>
      <Link prefetch={false} href='/write' className='navbar-link'>
        Write
      </Link>
    </div>
  );
}
