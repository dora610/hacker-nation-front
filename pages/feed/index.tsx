import Link from 'next/link';
import { MdOutlineFeed } from 'react-icons/md';
import { AiOutlineStar } from 'react-icons/ai';
import { BsClockHistory } from 'react-icons/bs';
import { FaHashtag } from 'react-icons/fa';
import Card from '../../components/Card';
import { GetStaticProps } from 'next';
import { readFileSync } from 'fs';
import path from 'path';
import BlogDetails from '../blog/[id]';
import { Fragment } from 'react';

function FeedSection({ blogs }: { blogs: [any] }) {
  return (
    <>
      <div className='flex text-slate-600 font-medium ml-2 border-b-2 border-slate-100'>
        <Link href='/feed'>
          <a>
            <div className='icon-text-inline text-emerald-600 border-b-emerald-600 border-b-2 hover:bg-slate-200 p-2 rounded-t-sm'>
              <MdOutlineFeed /> <h3>Trending</h3>
            </div>
          </a>
        </Link>
        <Link href='/feed/featured'>
          <a>
            <div className='icon-text-inline hover:bg-slate-200 p-2 rounded-t-sm'>
              <AiOutlineStar /> <h3>Featured</h3>
            </div>
          </a>
        </Link>
        <Link href='/feed/tags'>
          <a>
            <div className='icon-text-inline hover:bg-slate-200 p-2 rounded-t-sm'>
              <FaHashtag /> <h3>Tags</h3>
            </div>
          </a>
        </Link>
        <Link href='/feed/recent'>
          <a>
            <div className='icon-text-inline hover:bg-slate-200 p-2 rounded-t-sm'>
              <BsClockHistory /> <h3>Recent</h3>
            </div>
          </a>
        </Link>
      </div>

      {/* trending blogs */}
      <div className='space-y-0.5 bg-slate-200'>
        {blogs?.length &&
          blogs.map((blog: any, index: number) => (
            <Fragment key={index}>
              <Card blog={blog} />
            </Fragment>
          ))}
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const data = readFileSync(
    path.join(process.cwd(), '/data/blog.json'),
    'utf8'
  );

  const featuredBlogs: [object] = JSON.parse(data);
  console.log(featuredBlogs);
  

  return {
    props: {
      blogs: featuredBlogs.slice(0,2),
    },
  };
};

export default FeedSection;
