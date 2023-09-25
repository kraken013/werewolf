import Link from 'next/link';

export function Navbar(){
  return (
    <nav className="nav flex-row">
        <Link href="/">
        </Link>
        <Link href="/about">
            About
        </Link>
        <Link href="/contact">
            Contact
        </Link>

    </nav>
  );
};
