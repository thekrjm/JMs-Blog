import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-between p-4 items-center">
      <Link href="/" className="text-2xl font-bold">
        {`JM's Blog`}
      </Link>
      <nav className="flex gap-4 font-medium">
        <Link href="/">home</Link>
        <Link href="/about">about</Link>
        <Link href="/posts">posts</Link>
        <Link href="/contact">contact</Link>
      </nav>
    </header>
  );
};

export default Header;
