import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineLike } from 'react-icons/ai';
import { BsBookmark } from 'react-icons/bs';
import { HiOutlineBookOpen } from 'react-icons/hi';
import AuthorInfo from './AuthorInfo';
import Tag from './Tag';

const Card = () => {
  return (
    <div className='flex flex-col gap-4 hover:bg-slate-50 px-4 py-6 bg-white'>
      <div className='flex gap-2'>
        <AuthorInfo profileUrl={'/profile.png'} name={'Ronald Blüthl'} username={'r.bluthl'}/>
        <div className='text-sm text-slate-600 ml-4'>
          <p> Apr 03, 2022</p>
          <div className='icon-text-inline'>
            <HiOutlineBookOpen className='text-lg font-light' />
            <span>5 mins read</span>
          </div>
        </div>
      </div>

      <div className='flex gap-2'>
        <div className='ring-1 ring-slate-300 px-2 rounded-2xl'>featured</div>
      </div>

      <Link href={'/blog/1'}>
        <a>
          <h2 className='text-2xl font-bold'>How to implement better APIs</h2>
        </a>
      </Link>
      <h6 className='overflow-x-hidden whitespace-nowrap text-ellipsis w-96 text-slate-600'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci,
        maiores!
      </h6>
      <Image
        src={'/blog.jpg'}
        width={100}
        height={200}
        // layout='responsive'
        alt='blog post'
        className='rounded-md'
      />

      <div className='flex gap-2'>
        <span className='icon-text-inline'>
          <AiOutlineLike /> <span> 5</span>
        </span>
      </div>

      <div className='flex items-center gap-2'>
        <button>
          <BsBookmark />
        </button>
        <Tag url={'/tag/1'} tagName={'tag1'}/>
        <Tag url={'/tag/2'} tagName={'tag2'}/>
        <span>+2</span>
      </div>
    </div>
  );
};

export default Card;
