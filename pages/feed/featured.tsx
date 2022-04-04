import { readFileSync } from 'fs';
import { GetStaticProps } from 'next';
import path from 'path';
import React, { Fragment } from 'react';
import Card from '../../components/Card';
import FeedHeader from '../../components/FeedHeader';
import { Blog } from '../../model/Blog';

function Featured({ blogs }: { blogs: [Blog] }) {
  return (
    <div>
      <FeedHeader activeTab='featured' />

      <div className='space-y-0.5 bg-slate-200'>
        {blogs?.length ? (
          blogs.map((blog, index) => (
            <Fragment key={index}>
              <Card blog={blog} />
            </Fragment>
          ))
        ) : (
          <h2>No Featured blog found</h2>
        )}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const data = readFileSync(
    path.join(process.cwd(), '/data/blog.json'),
    'utf8'
  );
  const blogs = JSON.parse(data);
  const featuredBlogs: [Blog] = blogs.filter(
    (blog: Blog) => blog?.badges && blog.badges.includes('featured')
  );

  return {
    props: {
      blogs: featuredBlogs,
      activeTab: 'featured',
    },
  };
};

export default Featured;
