import React from 'react'
import Link from 'next/link';

const TabElement = ({
    tabName,
    tabIcon,
    tabUrl,
    activeTab = '',
  }: {
    tabName: string;
    tabIcon: any;
    tabUrl: string;
    activeTab?: string;
  }) => {
    let activeTabClass =
      activeTab === tabName.toLowerCase()
        ? 'text-emerald-600 border-b-emerald-600 border-b-2'
        : '';
  
    return (
      <Link href={tabUrl}>
        <a>
          <div
            className={
              'icon-text-inline hover:bg-slate-200 p-2 rounded-t-sm' +
              activeTabClass
            }
          >
            {tabIcon}
            {tabName}
          </div>
        </a>
      </Link>
    );
  };

export default TabElement