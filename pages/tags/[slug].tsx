import { useRouter } from 'next/router'
import React from 'react'

function TagDeatils() {
    const router = useRouter()
    const tag = router.query.slug || ''
  return (
    <div>TagDeatils - {tag}</div>
  )
}

export default TagDeatils