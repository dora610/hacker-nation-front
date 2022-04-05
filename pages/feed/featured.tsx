import { readFileSync } from 'fs';
import { GetStaticProps } from 'next';
import path from 'path';
import React, { Fragment } from 'react';
import BlogList from '../../components/BlogList';
import Card from '../../components/Card';
import FeedHeader from '../../components/FeedHeader';
import { Blog } from '../../model/Blog';

function Featured({ blogs }: { blogs: [Blog] }) {
  return (
    <div>
      <FeedHeader activeTab='featured' />

      <BlogList blogs={blogs}/>
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
