import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-red-900 p-4 text-4xl border-b-2 border-black border-solid">
      <nav>
        <ul>
          <li className='flex justify-center'>
            <Link href="/">
              Dinheiro
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;