import Link from 'next/link';

export const Header = () => {
  return (
    <header className="flex flex-col items-center pt-8">
      <h1 className="text-4xl">Title</h1>
      <nav className="pt-4">
        <ul className="flex gap-2">
          <li>
            <Link href="/" className="block p-2 text-xl">
              Next
            </Link>
          </li>
          <li>
            <Link href="/" className="block p-2 text-xl">
              Node
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
