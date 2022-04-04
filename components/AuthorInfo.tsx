import Image from 'next/image'
import React from 'react'

    function AuthorInfo(props: { name: string; profileUrl: string; username: string }) {
    const {profileUrl, name, username} = props
  return (
    <div className='flex gap-3 items-center'>
        <Image
          src={profileUrl}
          alt='Ronald Blüthl'
          width={50}
          height={50}
          className='rounded-full bg-slate-500'
        />
        <div>
          <h3 className='font-medium'>{name}</h3>
          <h5 className='text-slate-600 text-sm'>{username}</h5>
        </div>
    </div>
  )
}

export default AuthorInfo