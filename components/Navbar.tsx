import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';

function Navbar() {
  return (
    <nav className='relative'>
      <div className='flex justify-between items-baseline py-2 px-4 border-b-2 border-slate-100'>
      <h1 className='text-sm font-semibold'>{'<'}_hN_{'/>'}</h1>
      <button>
        <GiHamburgerMenu />
      </button>
      </div>
      <ul className='hidden absolute top-0 right-0 z-20 flex-col gap-6 min-h-screen text-slate-800 font-semibold w-1/3 bg-slate-100 items-baseline py-6 px-4'>
        <button>
          <GrClose />
        </button>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/expolre'>
            <a>Explore</a>
          </Link>
        </li>
        <li>
          <Link href='/my-blogs'>
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
            <a>Sign out</a>
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
