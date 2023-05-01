import { Button } from '@chakra-ui/react';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';

import Image from "next/image";

const Header = ({onOpen, btnRef}: {onOpen:any, btnRef:any}) => {
  return (
    <header className="bg-gradient-to-b from-purple-500 to-blue-500 p-4 text-4xl border-b-2 border-black border-solid shadow-lg">
      <nav className="flex items-center justify-between">
        
        <div ref={btnRef} onClick={onOpen}>
          <FaBars className="text-white cursor-pointer" />
        </div>

        <Link href="/" className="text-white text-center flex-1 text-6xl font-bold">Dinheiro</Link>
      </nav>
    </header>
  );
};

export default Header;