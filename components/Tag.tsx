import Link from 'next/link';
import React from 'react';
import { UrlObject } from 'url';

function Tag(props: { url: string | UrlObject; tagName: string; }) {
  return (
    <Link href={props.url}>
      <a>
        <span className='tag'>
          #{props.tagName}
        </span>
      </a>
    </Link>
  );
}

export default Tag;
