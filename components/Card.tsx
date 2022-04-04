import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment } from 'react';
import { AiOutlineLike } from 'react-icons/ai';
import { BsBookmark } from 'react-icons/bs';
import { HiOutlineBookOpen } from 'react-icons/hi';
import { Blog } from '../model/Blog';
import AuthorInfo from './AuthorInfo';
import Tag from './Tag';

const Card = ({ blog }: { blog: Blog }) => {
  const {
    id,
    title,
    subtitle,
    author,
    userName,
    published,
    tags,
    profilePic,
    readTime,
    badges,
    blogImg,
    likes,
  } = blog;
  
  return (
    <div className='flex flex-col gap-4 hover:bg-slate-50 px-4 py-6 bg-white'>
      <div className='flex gap-2'>
        <AuthorInfo profileUrl={profilePic} name={author} username={userName} />
        <div className='text-sm text-slate-600 ml-4'>
          <p>{published}</p>
          <div className='icon-text-inline'>
            <HiOutlineBookOpen className='text-lg font-light' />
            <span>{readTime} mins read</span>
          </div>
        </div>
      </div>

      <div className='flex gap-2'>
        {badges?.length &&
          badges.map((badge: string, index: number) => (
            <div key={index} className='ring-1 ring-slate-300 px-2 rounded-2xl'>
              {badge}
            </div>
          ))}
      </div>

      <Link href={`/blog/${id}`}>
        <a>
          <h2 className='text-2xl font-bold'>{title}</h2>
        </a>
      </Link>
      <h6 className='overflow-x-hidden whitespace-nowrap text-ellipsis w-96 text-slate-600'>
        {subtitle}
      </h6>
      <div className='w-full object-cover'>
        <Image
          src={blogImg}
          width={640}
          height={340}
          alt='blog post'
          className='rounded-md'
        />
      </div>

      <div className='flex gap-2'>
        <span className='icon-text-inline'>
          <AiOutlineLike /> <span>{likes}</span>
        </span>
      </div>

      <div className='flex items-center gap-2'>
        <button>
          <BsBookmark />
        </button>
        {tags?.length && (
          <>
            {tags.slice(0, 3).map((tag: string, index: number) => (
              <Fragment key={index}>
                <Tag url={`/tags/${tag}`} tagName={tag} />
              </Fragment>
            ))}

            {tags?.length - 3 && <span>+{tags.length - 3}</span>}
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
