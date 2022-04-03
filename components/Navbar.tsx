import Link from 'next/link';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';

function Navbar() {
  const [isCollpased, setIsCollpased] = useState(true);

  return (
    <nav className='relative'>
      <div className='flex justify-between items-baseline py-2 px-4 border-b-2 border-slate-100'>
        <Link href='/'>
          <a>
            <h1 className='text-sm font-semibold'>
              {'<'}_hN_{'/>'}
            </h1>
          </a>
        </Link>
        <button onClick={() => setIsCollpased(!isCollpased)}>
          <GiHamburgerMenu />
        </button>
      </div>
      <ul
        className={`${
          isCollpased ? 'hidden' : 'flex'
        } absolute top-0 right-0 z-20 flex-col gap-5 min-h-screen overflow-y-hidden text-slate-800 font-semibold w-1/3 bg-slate-100 items-baseline py-6 px-6 transition`}
      >
        <button onClick={() => setIsCollpased(!isCollpased)}>
          <GrClose />
        </button>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/explore'>
            <a>Explore</a>
          </Link>
        </li>
        <li>
          <Link href='/write-blog'>
            <a>Write blog</a>
          </Link>
        </li>
        <li>
          <Link href='/my-blogs'>
            <a>My blogs</a>
          </Link>
        </li>
        <li>
          <Link href='/bookmarks'>
            <a>Bookmarks</a>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href='/signin'>
            <a>Sign In</a>
          </Link>
        </li>
        <li>
          <Link href='/signup'>
            <a>Sign Up</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
