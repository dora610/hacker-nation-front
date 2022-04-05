import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoMdAdd } from 'react-icons/io';

function TagRow({ tag }: { tag: any }) {
  return (
    <div className='grid grid-cols-[3rem_1fr_3rem] gap-3 bg-slate-100 p-4 rounded-lg h-20'>
      <Link href={`/tag/${tag?.tagName}`}>
        <a>
          <Image
            src={tag?.tagIcon}
            width={35}
            height={35}
            alt='js'
            className='rounded-md'
          />
        </a>
      </Link>
      <div>
        <Link href={`/tag/${tag?.tagName}`}>
          <a>
            <h4 className='text-lg font-semibold'>#{tag?.tagName}</h4>
          </a>
        </Link>
        <h6 className='text-sm font-medium text-slate-400'>
          {tag?.articleCount} articles this week
        </h6>
      </div>
      <button className='bg-white rounded-full flex justify-center items-center m-2'>
        <IoMdAdd className='fill-emerald-500 text-2xl' />
      </button>
    </div>
  );
}

export default TagRow;
