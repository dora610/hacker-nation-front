import React from 'react'

function Search() {
  return (
        <div className='flex justify-center items-center gap-1 my-4'>
        <input
          type='text'
          name='title'
          id='title'
          className='form-input'
          placeholder='Search blog title'
        />
        <button className='btn-primary'>Search</button>
      </div>
  )
}

export default Search