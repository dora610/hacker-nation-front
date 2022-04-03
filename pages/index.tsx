import type { NextPage } from 'next';

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
      <div className='bg-slate-100 p-6'>
        <div className='card bg-white rounded-lg shadow-md hover:shadow-lg grid grid-cols-[1fr_2fr] gap-2'>
          <div className='bg-emerald-400 rounded-tl-md rounded-bl-md'>
            Blog thumb
          </div>
          <div className='flex flex-col gap-2 py-2'>
            <h2 className='text-xl font-bold'>
              Lorem ipsum dolor sit, amet consectetur
            </h2>
            <h3 className='text-sm font-light'>
              by John Doe{' '}
              <span className='w-1 h-1 p-1 bg-slate-300 rounded-full'>j d</span>
            </h3>
            <h6 className='text-sm font-extralight text-slate-400'>
              published at - 03/04/2022
            </h6>
            <p>
              <small className='badge-tag'>#tag1</small>
              <small className='badge-tag'>#tag2</small>
            </p>
            <button className='btn-small w-1/2 mx-auto'>Read more</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
