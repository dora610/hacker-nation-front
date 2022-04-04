import { readFileSync } from 'fs';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import path from 'path';
import React, { Fragment } from 'react';
import { IoMdAdd } from 'react-icons/io';
import { Tag } from '../../model/Tag';
import { IoIosPeople } from 'react-icons/io';
import { GrArticle } from 'react-icons/gr';
import Card from '../../components/Card';
import { Blog } from '../../model/Blog';

function TagDeatils({ tag, blogs }: { tag: Tag; blogs: [Blog] }) {
  return (
    <div>
      <div className='flex flex-col gap-6 items-center my-6 justify-center mx-4'>
        <div className='flex flex-col md:flex-row gap-6 items-center'>
          <Image
            src={tag?.tagIcon}
            width={70}
            height={70}
            alt='js'
            className='rounded-md'
          />
          <h4 className='text-4xl font-semibold'>#{tag?.tagName}</h4>
        </div>

        <div className='flex gap-4'>
          <button className='btn-primary-outline-rounded icon-text-inline'>
            <IoMdAdd className='fill-emerald-500 text-2xl' />
            Follow
          </button>
          <button className='btn-primary-rounded icon-text-inline'>
            Start writing
          </button>
        </div>

        <div className='flex gap-4 text-slate-600 font-medium'>
          <div className='icon-text-inline'>
            <IoIosPeople />
            {tag?.followers} followers
          </div>
          <div className='icon-text-inline'>
            <GrArticle />
            {tag?.articleCount} articles
          </div>
        </div>
      </div>
      <hr />
      <h2 className='text-lg m-4'>🔥 Trending this week</h2>

      {blogs?.length ? (
        <div className='space-y-0.5 bg-slate-200'>
          {blogs.map((blog, index) => (
            <Fragment key={index}>
              <Card blog={blog} />
            </Fragment>
          ))}
        </div>
      ) : (
        <h3 className='text-center'>No Blog Found</h3>
      )}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const tagData = readFileSync(
    path.join(process.cwd(), '/data/tags.json'),
    'utf8'
  );
  const blogData = readFileSync(
    path.join(process.cwd(), '/data/blog.json'),
    'utf8'
  );
  const tags: [Tag] = JSON.parse(tagData);
  const blogs: [Blog] = JSON.parse(blogData);
  const filteredTag: Tag = tags.filter(
    (tag) => tag.tagName === context?.params?.slug
  )[0];
  const filteredBlogs = blogs.filter((blog) =>
    blog.tags.includes(filteredTag.tagName)
  );

  return {
    props: {
      tag: filteredTag,
      blogs: filteredBlogs,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  const data = readFileSync(
    path.join(process.cwd(), '/data/tags.json'),
    'utf8'
  );
  const tags: [Tag] = JSON.parse(data);
  const paramList = tags.map((tag) => {
    return { params: { slug: tag.tagName } };
  });

  return {
    paths: paramList,
    fallback: 'blocking',
  };
};

export default TagDeatils;
