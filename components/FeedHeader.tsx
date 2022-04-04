import React from 'react'
import TabElement from './TabElement'
import { AiOutlineStar } from 'react-icons/ai';
import { BsClockHistory } from 'react-icons/bs';
import { FaHashtag } from 'react-icons/fa';
import { MdOutlineFeed } from 'react-icons/md';

function FeedHeader({activeTab=''}: {activeTab?:string}) {
  return (
    <div className='flex text-slate-600 font-medium ml-4 border-b-2 border-slate-100'>
        <TabElement
          tabName={'Trending'}
          tabIcon={<MdOutlineFeed />}
          tabUrl={'/feed'}
          activeTab={activeTab}
        />
        <TabElement
          tabName={'Featured'}
          tabIcon={<AiOutlineStar />}
          tabUrl={'/feed/featured'}
          activeTab={activeTab}
        />
        <TabElement
          tabName={'Tags'}
          tabIcon={<FaHashtag />}
          tabUrl={'/feed/tags'}
          activeTab={activeTab}
        />
        <TabElement
          tabName={'Recent'}
          tabIcon={<BsClockHistory />}
          tabUrl={'/feed/recent'}
          activeTab={activeTab}
        />
      </div>
  )
}

export default FeedHeader