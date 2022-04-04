import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {AiOutlineLike} from 'react-icons/ai'
import {BsBookmark} from 'react-icons/bs'
import {HiOutlineBookOpen} from 'react-icons/hi'

const Card = () => {
  return (
    <div className='flex flex-col gap-4 hover:bg-slate-50 px-4 py-6 bg-white'>
      <div className='flex gap-2'>
        <Image
          src={'/profile.png'}
          alt='Ronald Blüthl'
          width={50}
          height={50}
          className='rounded-full bg-slate-500'
        />
        <div>
          <h3 className='font-medium'>Ronald Blüthl</h3>
          <h5 className='text-slate-600 text-sm'>r.bluthl</h5>
        </div>
        <div className='text-sm text-slate-600 ml-4'>
          <p> Apr 03, 2022</p>
          <div className='icon-text-inline'> <HiOutlineBookOpen className='text-lg font-light'/><span>5 mins read</span></div>
        </div>
      </div>

      <div className='flex gap-2'>
          <div className='ring-1 ring-slate-300 px-2 rounded-2xl'>featured</div>
      </div>

      <h2 className='text-2xl font-bold'>How to implement better APIs</h2>
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
          <span className='icon-text-inline'><AiOutlineLike/> <span> 5</span></span>
      </div>

      <div className='flex items-center gap-2'>
         <button><BsBookmark/></button> 
         <span className='bg-slate-100 p-1 rounded-lg ring-1 ring-slate-200 text-slate-600 hover:bg-slate-200 hover:text-blue-600'>#tag1</span>
         <span className='bg-slate-100 p-1 rounded-lg ring-1 ring-slate-200 text-slate-600 hover:bg-slate-200 hover:text-blue-600'>#tag2</span>
         
         <span>+2</span>
      </div>

      
    </div>
  );
};

export default Card;
