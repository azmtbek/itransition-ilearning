import React from 'react';
import ThemeButton from './theme-button';
import Link from 'next/link';

function Header() {
  return (
    <header className='sticky py-3 w-full border-b-2'>
      <div className='flex justify-around items-center'>
        <ThemeButton />
        <div></div>
        <Link href="/">Logout</Link>
      </div>
    </header>
  );
}

export default Header;