import { readFileSync } from 'fs';
import { GetStaticProps } from 'next';
import path from 'path';
import React, { Fragment } from 'react'
import BlogList from '../../components/BlogList';
import Card from '../../components/Card';
import FeedHeader from '../../components/FeedHeader'
import { Blog } from '../../model/Blog';

function Recent({
  blogs,
  activeTab,
}: {
  blogs: [Blog];
  activeTab: string;
}) {
  return (
    <div>
      <FeedHeader activeTab={activeTab} />

      <BlogList blogs={blogs}/>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const data = readFileSync(
    path.join(process.cwd(), '/data/blog.json'),
    'utf8'
  );
  const blogs: [Blog] = JSON.parse(data);

  return {
    props: {
      blogs: blogs.slice(0,2),
      activeTab: 'recent',
    },
  };
};

export default Recent