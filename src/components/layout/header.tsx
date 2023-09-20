'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="px-5 py-5 sticky top-0 z-50 border-b-2 border-border-color bg-black flex items-center justify-between sm:py-5 sm:px-5 md:px-8 lg:px-24 xl:px-40">
      <Link className="text-white text-xl tracking-widest" href={'/'}>
        HJINN
      </Link>

      <nav className="flex gap-3">
        <Link
          className={`text-lg no-underline cursor-pointer font-bold ${
            pathname === '/feed' ? 'text-primary-color' : 'text-disabled-color'
          }`}
          href={'/feed'}
        >
          피드
        </Link>
        <Link
          className={`text-lg no-underline cursor-pointer font-bold ${
            pathname === '/content'
              ? 'text-primary-color'
              : 'text-disabled-color'
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
