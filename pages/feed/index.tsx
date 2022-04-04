import { readFileSync } from 'fs';
import { GetStaticProps } from 'next';
import path from 'path';
import { Fragment } from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { BsClockHistory } from 'react-icons/bs';
import { FaHashtag } from 'react-icons/fa';
import { MdOutlineFeed } from 'react-icons/md';
import Card from '../../components/Card';
import FeedHeader from '../../components/FeedHeader';
import TabElement from '../../components/TabElement';
import { Blog } from '../../model/Blog';

function FeedSection({
  blogs,
  activeTab,
}: {
  blogs: [Blog];
  activeTab: string;
}) {
  return (
    <div>
      <FeedHeader activeTab={activeTab} />

      {/* trending blogs */}
      <div className='space-y-0.5 bg-slate-200'>
        {blogs?.length &&
          blogs.map((blog, index) => (
            <Fragment key={index}>
              <Card blog={blog} />
            </Fragment>
          ))}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const data = readFileSync(
    path.join(process.cwd(), '/data/blog.json'),
    'utf8'
  );
  const blogs: [Blog] = JSON.parse(data);

  return {
    props: {
      blogs: blogs,
      activeTab: 'trending',
    },
  };
};

export default FeedSection;
