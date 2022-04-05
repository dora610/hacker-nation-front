import Image from 'next/image';
import React, { Fragment, useState } from 'react';
import FeedHeader from '../../components/FeedHeader';
import { IoMdAdd } from 'react-icons/io';
import TagRow from '../../components/TagRow';
import { GetStaticProps } from 'next';
import { readFileSync } from 'fs';
import path from 'path';
import { Tag } from '../../model/Tag';

interface TagOption {
  val: string;
  show: string;
}

function Tags({ tags, defaultOption }: { tags: [Tag]; defaultOption: string }) {
  const [tagOpts, setTagOpts] = useState<[TagOption]| any>([
    { val: 'week', show: 'This Week' },
    { val: 'month', show: 'This Month' },
    { val: 'all', show: 'All Time' },
  ]);

  return (
    <div>
      <FeedHeader activeTab='tags' />
      <div className='mx-4 my-2'>
        <h2 className='text-xl font-medium'>Trending Tags</h2>
        <h4 className='text-sm font-light'>
          Tags with most number of articles
        </h4>

        <select
          name='cat'
          id='cat'
          value={defaultOption}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>setTagOpts(e.target.value)}
          className='my-4 w-40 capitalize px-4 py-2 ring-1 border-emerald-400 rounded-md focus:ring-2 focus:ring-emerald-300 focus:outline-none'
        >
          {tagOpts.map((tag: TagOption, index: number) => (
            <Fragment key={index}>
              <option value={tag.val}>{tag.show}</option>
            </Fragment>
          ))}
          <option value='month'>This Month</option>
          <option value='all'>All time</option>
        </select>

        <div className='flex flex-col gap-4'>
          {tags?.length &&
            tags.map((tag, index) => (
              <Fragment key={index}>
                <TagRow tag={tag} />
              </Fragment>
            ))}
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const query = context.params;

  const data = readFileSync(
    path.join(process.cwd(), '/data/tags.json'),
    'utf8'
  );
  const tags: [Tag] = JSON.parse(data);

  return {
    props: {
      tags: tags,
      defaultOption: 'week',
    },
  };
};

export default Tags;
