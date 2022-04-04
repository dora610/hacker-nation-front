import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Card from '../components/Card';
import { MdOutlineFeed } from 'react-icons/md';
import { AiOutlineStar } from 'react-icons/ai';
import { BsClockHistory } from 'react-icons/bs';

const Home: NextPage = () => {
  return (
    <main>
      <div className='text-center'>
        <h1 className='text-3xl text-emerald-800 font-bold'>
          {'<'}_hackerNation_{'/>'}
        </h1>
        <h3 className='text-slate-500'>
          Destination for programming {'&'} tech blogs
        </h3>
      </div>

      {/* search bar */}
      <div className='flex justify-center items-center gap-1 my-4'>
        <input
          type='text'
          name='title'
          id='title'
          className='form-input'
          placeholder='Search blog title'
        />
        <button className='btn-primary'>Search</button>
      </div>

      <div className='flex gap-5 text-slate-600 font-medium ml-2 border-b-2 border-slate-100 p-2'>
        <div className='icon-text-inline'>
          <MdOutlineFeed /> <h3>Trending</h3>
        </div>
        <div className='icon-text-inline'>
          <AiOutlineStar /> <h3>Featured</h3>
        </div>
        <div className='icon-text-inline'>
          <BsClockHistory /> <h3>Recent</h3>
        </div>
      </div>

      {/* trending blogs */}
      <div className='space-y-0.5 bg-slate-200'>
        <Card />
        <Card />
      </div>
    </main>
  );
};

export default Home;
