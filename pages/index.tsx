import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Card from '../components/Card';
import { MdOutlineFeed } from 'react-icons/md';
import { AiOutlineStar } from 'react-icons/ai';
import { BsClockHistory } from 'react-icons/bs';
import Search from '../components/Search';

const Home: NextPage = () => {
  return (
    <main>
      {/* search bar */}
      <Search />

      <h1 className='text-5xl text-emerald-800 font-bold text-center'>
        {'<'}_hackerNation_{'/>'}
      </h1>

      <div className='block w-1/2 mx-auto my-6'>
        <Image
          src={'/homepage.jpg'}
          width={480}
          height={480}
          alt='hackerNation'
          className='rounded-full'
        />
      </div>
      <h3 className='text-emerald-700 text-2xl font-semibold text-center'>
        Destination for programming {'&'} tech blogs
      </h3>
      <p className='text-slate-700 font-medium text-center my-4'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur,
        tempore! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui,
        asperiores!
      </p>

      <h3 className='text-slate-800 text-2xl font-semibold text-center capitalize'>
        Share your ideas with world
      </h3>

      <div className='flex justify-center my-6'>
        <Link href={'/new-blog'} passHref>
        <button className='btn-lg'>Get{'s'} started</button>
        </Link>
      </div>


      <div className='flex flex-col justify-center items-center gap-6 my-6 text-center'>
        <h2 className='text-3xl font-bold'>1000+ blogs uploaded by our community</h2>
        <Link href={'/feed'} passHref>
        <button className='btn-lg'>Explore amazing blogs</button>
        </Link>
      </div>
    </main>
  );
};

export default Home;
