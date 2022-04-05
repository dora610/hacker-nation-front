import React, { Fragment } from 'react'
import { Blog } from '../model/Blog'
import Card from './Card'

function BlogList({blogs}: {blogs: [Blog]}) {
  return (
    <>
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
    </>
  )
}

export default BlogList