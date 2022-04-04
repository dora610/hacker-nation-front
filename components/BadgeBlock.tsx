import React, { Fragment } from 'react';

function BadgeBlock({ badges }: { badges: [string] }) {
  return (
    <div className='flex gap-2 bg-slate-50 p-2 rounded-lg'>
      {badges?.length &&
        badges.map((badge, index) => (
          <Fragment key={index}>
            <div className='bg-white p-2 rounded-md shadow-md shadow-slate-200 capitalize'>
              {badge}
            </div>
          </Fragment>
        ))}
    </div>
  );
}

export default BadgeBlock;
