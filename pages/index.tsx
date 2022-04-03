import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

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

      {/* trending blogs */}
      <div className='bg-slate-100 p-2'>
        <Link href={'/blog/1'}>
        <a>
        <div className='card bg-white rounded-lg shadow-md hover:shadow-lg grid grid-cols-[auto_1fr] gap-2 items-center'>
          <Image
            src={'/blog.jpg'}
            width={150}
            height={150}
            alt='title'
            className='rounded-tl-md rounded-bl-md'
          />
          <div className='flex flex-col gap-2'>
            <h2 className='text-xl font-bold'>
              Lorem ipsum dolor sit, amet consectetur
            </h2>
            <h3 className='text-sm font-medium'>
              by John Doe{' '}
              <span className='w-1 h-1 p-1 bg-slate-300 rounded-full'>j d</span>
            </h3>
            <h6 className='text-sm font-extralight'>
              published at - 03/04/2022
            </h6>

            <div className='flex gap-2 flex-wrap self-start my-2'>
              <Link href={`/tag/tag1`}>
                <a>
                  <span className='ring-1 ring-slate-400 p-1 rounded-md'>
                    #tag1
                  </span>
                </a>
              </Link>
              <Link href={`/tag/tag1`}>
                <a>
                  <span className='ring-1 ring-slate-400 p-1 rounded-md'>
                    #tag2
                  </span>
                </a>
              </Link>
            </div>

            {/* <button className='btn-small w-1/2 mx-auto'>Read more</button> */}
          </div>
        </div>
        </a>
        </Link>
      </div>
    </main>
  );
};

export default Home;
