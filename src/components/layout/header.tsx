'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="px-5 py-5 sticky top-0 z-50 border-b-2 border-b-slate-400 bg-white flex items-center justify-between">
      <Link className="-tracking-wider text-black" href={'/'}>
        HJINN
      </Link>

      <nav className="flex gap-3">
        <Link
          className={`text-lg no-underline cursor-pointer font-bold ${
            pathname === '/feed' ? 'text-emerald-300' : 'text-gray-400'
          }`}
          href={'/feed'}
        >
          피드
        </Link>
        <Link
          className={`text-lg no-underline cursor-pointer font-bold ${
            pathname === '/content' ? 'text-emerald-300' : 'text-gray-400'
          }`}
          href={'/content'}
        >
          콘텐츠
        </Link>
      </nav>
    </header>
  );
};

export default Header;
